// pages/api/admin/orders/[id].js
import { prisma } from "@/lib/prisma";

const VALID_STATUSES = ["PENDING", "CONFIRMED", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"];
const VALID_PAYMENT_STATUSES = ["PENDING", "PAID", "FAILED", "REFUNDED"];

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "PATCH") {
    const { status, paymentStatus } = req.body || {};

    const data = {};
    if (status !== undefined) {
      if (!VALID_STATUSES.includes(status)) {
        return res.status(400).json({ message: "Invalid status." });
      }
      data.status = status;
    }
    if (paymentStatus !== undefined) {
      if (!VALID_PAYMENT_STATUSES.includes(paymentStatus)) {
        return res.status(400).json({ message: "Invalid payment status." });
      }
      data.paymentStatus = paymentStatus;
    }

    if (Object.keys(data).length === 0) {
      return res.status(400).json({ message: "Nothing to update." });
    }

    try {
      const order = await prisma.order.update({ where: { id }, data });
      return res.status(200).json({ order });
    } catch (err) {
      if (err.code === "P2025") {
        return res.status(404).json({ message: "Order not found." });
      }
      console.error("Update order failed:", err);
      return res.status(500).json({ message: "Could not update order." });
    }
  }

  res.setHeader("Allow", ["PATCH"]);
  return res.status(405).json({ message: "Method not allowed" });
}
