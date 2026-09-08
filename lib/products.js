import { prisma } from "./prisma";

export async function getAllProducts() {
  return prisma.product.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "desc" },
  });
}

export async function getProductById(id) {
  return prisma.product.findUnique({
    where: { id },
  });
}

export async function getAllProductIds() {
  const products = await prisma.product.findMany({
    where: { isActive: true },
    select: { id: true },
  });
  return products.map((p) => p.id);
}
