// Data layer for products — now backed by Prisma + Neon (Postgres).
// Replaces the old hardcoded array. All functions are async because
// they hit the database.

import { PrismaClient } from "@prisma/client";

// Reuse a single PrismaClient instance across hot reloads in dev,
// so Next.js doesn't open a new DB connection on every file save.
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

// Strip any non-plain-JSON values (e.g. Date objects) so these are
// safe to return directly from getStaticProps/getServerSideProps.
function toPlain(value) {
  return JSON.parse(JSON.stringify(value));
}

export async function getAllProducts() {
  const products = await prisma.product.findMany({
    orderBy: { name: "asc" },
  });
  return toPlain(products);
}

export async function getProductBySlug(slug) {
  const product = await prisma.product.findUnique({
    where: { slug },
  });
  return product ? toPlain(product) : null;
}

export async function getAllProductSlugs() {
  const products = await prisma.product.findMany({
    select: { slug: true },
  });
  return products.map((p) => p.slug);
}
