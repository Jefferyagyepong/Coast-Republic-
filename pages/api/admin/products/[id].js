// pages/api/admin/products/[id].js
import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "PUT") {
    const {
      name,
      slug,
      price,
      currency,
      images,
      description,
      sizes,
      colors,
      category,
      stock,
      isActive,
    } = req.body || {};

    try {
      const product = await prisma.product.update({
        where: { id },
        data: {
          name,
          slug,
          price: Number(price),
          currency: currency || "GHS",
          images: Array.isArray(images) ? images : [],
          description,
          sizes: Array.isArray(sizes) ? sizes : [],
          colors: Array.isArray(colors) ? colors : [],
          category,
          stock: Number(stock) || 0,
          isActive: Boolean(isActive),
        },
      });
      return res.status(200).json({ product });
    } catch (err) {
      if (err.code === "P2002") {
        return res.status(409).json({ message: "A product with that slug already exists." });
      }
      if (err.code === "P2025") {
        return res.status(404).json({ message: "Product not found." });
      }
      console.error("Update product failed:", err);
      return res.status(500).json({ message: "Could not update product." });
    }
  }

  // Quick active/inactive toggle used from the products list, without
  // needing the full edit form.
  if (req.method === "PATCH") {
    const { isActive } = req.body || {};
    try {
      const product = await prisma.product.update({
        where: { id },
        data: { isActive: Boolean(isActive) },
      });
      return res.status(200).json({ product });
    } catch (err) {
      console.error("Toggle product failed:", err);
      return res.status(500).json({ message: "Could not update product." });
    }
  }

  if (req.method === "DELETE") {
    try {
      await prisma.product.delete({ where: { id } });
      return res.status(200).json({ ok: true });
    } catch (err) {
      if (err.code === "P2025") {
        return res.status(404).json({ message: "Product not found." });
      }
      console.error("Delete product failed:", err);
      return res.status(500).json({ message: "Could not delete product." });
    }
  }

  res.setHeader("Allow", ["PUT", "PATCH", "DELETE"]);
  return res.status(405).json({ message: "Method not allowed" });
}
