import { prisma } from "./prisma";

export async function getAllProducts() {
  return await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function getProductById(id) {
  return await prisma.product.findUnique({
    where: { id },
  });
}

export async function getAllProductIds() {
  const products = await prisma.product.findMany({
    select: { id: true },
  });
  return products.map((p) => p.id);
}