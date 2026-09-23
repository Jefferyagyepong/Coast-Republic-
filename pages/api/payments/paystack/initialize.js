// pages/api/payments/paystack/initialize.js
import { prisma } from "@/lib/prisma";
import { paystackInitialize } from "@/lib/paystack";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { customer, delivery, items, subtotal, tax, total, currency } = req.body || {};

  if (!customer?.fullName || !customer?.phone || !customer?.email) {
    return res.status(400).json({ message: "Missing customer details." });
  }
  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: "Your cart is empty." });
  }
  if (!delivery?.method) {
    return res.status(400).json({ message: "Missing delivery method." });
  }

  // NOTE: subtotal/tax/total are still taken from the client for now, same
  // as the COD flow — for stronger protection, recompute them server-side
  // from `items` and your tax/delivery constants before trusting them here.

  try {
    // Order is created PENDING before any payment happens. Stock is only
    // decremented once the webhook confirms payment, so an abandoned or
    // failed checkout never locks up inventory.
    const order = await prisma.order.create({
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
        paymentMethod: "paystack",
        paymentStatus: "PENDING",
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
    });

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.coast-collective.com";

    const paystackData = await paystackInitialize({
      email: order.email,
      // Paystack expects the smallest currency unit (pesewas for GHS),
      // computed server-side from the order we just saved — never taken
      // directly from anything editable in the browser.
      amount: Math.round(order.total * 100),
      reference: order.referenceId,
      callback_url: `${siteUrl}/order-confirmation/${order.referenceId}`,
      metadata: { orderId: order.id },
    });

    return res.status(200).json({
      referenceId: order.referenceId,
      authorization_url: paystackData.authorization_url,
    });
  } catch (err) {
    console.error("Paystack initialize failed:", err);
    return res.status(500).json({ message: "Could not start payment. Please try again." });
  }
}
