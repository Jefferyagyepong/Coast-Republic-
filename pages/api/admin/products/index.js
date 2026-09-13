// pages/api/admin/products/index.js
import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
    });
    return res.status(200).json({ products });
  }

  if (req.method === "POST") {
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

    if (!name || !slug || price === undefined || !description || !category) {
      return res.status(400).json({
        message: "Name, slug, price, description, and category are required.",
      });
    }

    try {
      const product = await prisma.product.create({
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
          isActive: isActive ?? true,
        },
      });
      return res.status(201).json({ product });
    } catch (err) {
      if (err.code === "P2002") {
        return res.status(409).json({ message: "A product with that slug already exists." });
      }
      console.error("Create product failed:", err);
      return res.status(500).json({ message: "Could not create product." });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).json({ message: "Method not allowed" });
}
