// pages/api/payments/paystack/webhook.js
import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { paystackVerify } from "@/lib/paystack";
import { sendOrderConfirmationEmail, sendAdminOrderNotification } from "@/lib/email";

// Signature verification needs the exact raw request body, so Next.js's
// automatic JSON parsing must be turned off for this route.
export const config = {
  api: { bodyParser: false },
};

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end();
  }

  const rawBody = await readRawBody(req);

  // ── Critical security check ────────────────────────────────────────────
  // Confirms this request genuinely came from Paystack and wasn't sent by
  // an attacker who simply POSTs a fake "charge.success" payload at this
  // URL. Nothing below this point runs unless the signature matches.
  const signature = req.headers["x-paystack-signature"];
  const expectedSignature = crypto
    .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY)
    .update(rawBody)
    .digest("hex");

  if (!signature || signature !== expectedSignature) {
    console.error("Paystack webhook signature mismatch — rejected.");
    return res.status(401).end();
  }

  const event = JSON.parse(rawBody);

  if (event.event === "charge.success") {
    const reference = event.data.reference;

    try {
      // Second independent check: re-verify directly with Paystack's API
      // rather than trusting the webhook payload's own status field.
      const verified = await paystackVerify(reference);

      if (verified.status !== "success") {
        console.warn(`Verify did not return success for ${reference}`);
        return res.status(200).end();
      }

      const order = await prisma.order.findUnique({
        where: { referenceId: reference },
        include: { items: true },
      });

      if (!order) {
        console.error(`Webhook for unknown order reference: ${reference}`);
        return res.status(200).end();
      }

      // Idempotency: Paystack can legitimately send this event more than
      // once (retries). Never double-decrement stock or double-email.
      if (order.paymentStatus === "PAID") {
        return res.status(200).end();
      }

      // Confirm the amount actually paid matches the order total exactly,
      // catching any attempt to tamper with the amount in transit.
      const expectedAmount = Math.round(order.total * 100);
      if (verified.amount !== expectedAmount) {
        console.error(
          `Amount mismatch for ${reference}: expected ${expectedAmount}, got ${verified.amount}`
        );
        return res.status(200).end();
      }

      await prisma.$transaction(async (tx) => {
        await tx.order.update({
          where: { id: order.id },
          data: { paymentStatus: "PAID", status: "CONFIRMED" },
        });

        for (const item of order.items) {
          if (!item.productId) continue;
          await tx.product.updateMany({
            where: { id: item.productId, stock: { gte: item.quantity } },
            data: { stock: { decrement: item.quantity } },
          });
        }
      });

      const updatedOrder = { ...order, paymentStatus: "PAID", status: "CONFIRMED" };
      const [customerResult, adminResult] = await Promise.allSettled([
        sendOrderConfirmationEmail(updatedOrder),
        sendAdminOrderNotification(updatedOrder),
      ]);

      if (customerResult.status === "rejected") {
        console.error("Customer email failed:", customerResult.reason);
      }
      if (adminResult.status === "rejected") {
        console.error("Admin email failed:", adminResult.reason);
      }
    } catch (err) {
      console.error("Paystack webhook processing failed:", err);
      // Still acknowledge with 200 once logged, so Paystack doesn't retry
      // indefinitely for an error on our side rather than a payment issue.
    }
  }

  return res.status(200).end();
}
