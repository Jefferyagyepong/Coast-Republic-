// pages/api/orders.js
import { prisma } from "@/lib/prisma";
import { sendOrderConfirmationEmail, sendAdminOrderNotification } from "@/lib/email";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { customer, delivery, payment, items, subtotal, tax, total, currency } =
    req.body || {};

  // ── Basic validation ──────────────────────────────────────────────────
  if (!customer?.fullName || !customer?.phone || !customer?.email) {
    return res.status(400).json({ message: "Missing customer details." });
  }
  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: "Your cart is empty." });
  }
  if (!delivery?.method || !payment?.method) {
    return res.status(400).json({ message: "Missing delivery or payment method." });
  }
  if (delivery.method === "delivery" && (!delivery && !customer.region)) {
    // region/city/address come through on `customer` from the checkout form
  }

  // NOTE: totals (subtotal/tax/total) are trusted from the client here for
  // simplicity. For stronger protection against tampering, recompute them
  // server-side from `items` + your tax/delivery constants before saving —
  // worth doing before this goes fully live with real payments.

  try {
    const order = await prisma.$transaction(async (tx) => {
      const created = await tx.order.create({
        data: {
          fullName: customer.fullName,
          email: customer.email,
          phone: customer.phone,
          deliveryMethod: delivery.method,
          region: customer.region || null,
          city: customer.city || null,
          address: customer.address || null,
          pickupLocation: delivery.pickupLocation || null,
          notes: customer.notes || null,
          paymentMethod: payment.method,
          momoNetwork: payment.momoNetwork || null,
          subtotal,
          deliveryFee: delivery.fee ?? 0,
          tax,
          total,
          currency: currency || "GHS",
          items: {
            create: items.map((item) => ({
              productId: item.id || null,
              name: item.name,
              price: item.price,
              quantity: item.quantity,
              size: item.size || null,
              color: item.color || null,
              image: item.image || null,
            })),
          },
        },
        include: { items: true },
      });

      // Best-effort stock decrement. Uses a conditional update so we never
      // go negative; if two people buy the last unit at once, whichever
      // request loses just won't decrement further (order still succeeds —
      // stock reconciliation is a follow-up, not a blocker for launch).
      for (const item of items) {
        if (!item.id) continue;
        await tx.product.updateMany({
          where: { id: item.id, stock: { gte: item.quantity } },
          data: { stock: { decrement: item.quantity } },
        });
      }

      return created;
    });

    // Emails are sent after the DB write succeeds. Using allSettled so an
    // email provider hiccup never fails the order itself — the order is
    // already safely saved at this point.
    const [customerResult, adminResult] = await Promise.allSettled([
      sendOrderConfirmationEmail(order),
      sendAdminOrderNotification(order),
    ]);

    if (customerResult.status === "rejected") {
      console.error("Customer email failed:", customerResult.reason);
    }
    if (adminResult.status === "rejected") {
      console.error("Admin email failed:", adminResult.reason);
    }

    return res.status(200).json({ referenceId: order.referenceId });
  } catch (err) {
    console.error("Order creation failed:", err);
    return res.status(500).json({ message: "Could not place your order. Please try again." });
  }
}
