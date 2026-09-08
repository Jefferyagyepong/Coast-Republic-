// lib/products.js
import { prisma } from "./prisma";

// ── Helpers ────────────────────────────────────────────────────────────────

/**
 * Wraps a Prisma call and throws a clean error with context.
 * Avoids leaking raw Prisma error messages to the client.
 */
async function dbCall(fn, context) {
  try {
    return await fn();
  } catch (err) {
    console.error(`[products] ${context}:`, err);
    throw new Error(`Database error: ${context}`);
  }
}

// ── Read ───────────────────────────────────────────────────────────────────

/**
 * Fetch all active products, newest first.
 * Supports optional category filter and basic pagination.
 *
 * @param {{ category?: string, page?: number, limit?: number, includeInactive?: boolean }} opts
 */
export async function getAllProducts({
  category,
  page = 1,
  limit = 24,
  includeInactive = false,
} = {}) {
  const where = {
    ...(includeInactive ? {} : { isActive: true }),
    ...(category ? { category } : {}),
  };

  const [products, total] = await dbCall(
    () =>
      Promise.all([
        prisma.product.findMany({
          where,
          orderBy: { createdAt: "desc" },
          skip: (page - 1) * limit,
          take: limit,
        }),
        prisma.product.count({ where }),
      ]),
    "getAllProducts"
  );

  return {
    products,
    total,
    page,
    totalPages: Math.ceil(total / limit),
    hasNextPage: page * limit < total,
    hasPrevPage: page > 1,
  };
}

/**
 * Fetch a single product by its ID.
 * Returns null if not found.
 *
 * @param {string} id
 */
export async function getProductById(id) {
  if (!id) return null;

  return dbCall(
    () =>
      prisma.product.findUnique({
        where: { id },
      }),
    `getProductById(${id})`
  );
}

/**
 * Fetch a single product by its slug.
 * Returns null if not found.
 *
 * @param {string} slug
 */
export async function getProductBySlug(slug) {
  if (!slug) return null;

  return dbCall(
    () =>
      prisma.product.findUnique({
        where: { slug },
      }),
    `getProductBySlug(${slug})`
  );
}

/**
 * Fetch all product IDs — used by Next.js getStaticPaths.
 *
 * @returns {Promise<string[]>}
 */
export async function getAllProductIds() {
  const products = await dbCall(
    () => prisma.product.findMany({ select: { id: true } }),
    "getAllProductIds"
  );
  return products.map((p) => p.id);
}

/**
 * Fetch all product slugs — use this for getStaticPaths if your
 * product pages are routed by slug (recommended).
 *
 * @returns {Promise<string[]>}
 */
export async function getAllProductSlugs() {
  const products = await dbCall(
    () =>
      prisma.product.findMany({
        where: { isActive: true },
        select: { slug: true },
      }),
    "getAllProductSlugs"
  );
  return products.map((p) => p.slug);
}

/**
 * Fetch all unique category names — useful for nav/filter menus.
 *
 * @returns {Promise<string[]>}
 */
export async function getAllCategories() {
  const products = await dbCall(
    () =>
      prisma.product.findMany({
        where: { isActive: true },
        select: { category: true },
        distinct: ["category"],
        orderBy: { category: "asc" },
      }),
    "getAllCategories"
  );
  return products.map((p) => p.category);
}

/**
 * Fetch related products in the same category, excluding the current one.
 *
 * @param {{ category: string, excludeId: string, limit?: number }}
 * @returns {Promise<Product[]>}
 */
export async function getRelatedProducts({ category, excludeId, limit = 4 }) {
  if (!category || !excludeId) return [];

  return dbCall(
    () =>
      prisma.product.findMany({
        where: {
          category,
          isActive: true,
          NOT: { id: excludeId },
        },
        orderBy: { createdAt: "desc" },
        take: limit,
      }),
    `getRelatedProducts(${category})`
  );
}

/**
 * Search products by name or description (case-insensitive).
 *
 * @param {string} query
 * @param {{ limit?: number }} opts
 * @returns {Promise<Product[]>}
 */
export async function searchProducts(query, { limit = 20 } = {}) {
  if (!query?.trim()) return [];

  return dbCall(
    () =>
      prisma.product.findMany({
        where: {
          isActive: true,
          OR: [
            { name: { contains: query, mode: "insensitive" } },
            { description: { contains: query, mode: "insensitive" } },
            { category: { contains: query, mode: "insensitive" } },
          ],
        },
        orderBy: { createdAt: "desc" },
        take: limit,
      }),
    `searchProducts(${query})`
  );
}

// ── Write (admin / seeding only) ───────────────────────────────────────────

/**
 * Create a new product. Generates a slug from the name if not provided.
 *
 * @param {import('@prisma/client').Prisma.ProductCreateInput} data
 */
export async function createProduct(data) {
  const slug =
    data.slug ||
    data.name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  return dbCall(
    () => prisma.product.create({ data: { ...data, slug } }),
    `createProduct(${data.name})`
  );
}

/**
 * Update an existing product by ID.
 *
 * @param {string} id
 * @param {import('@prisma/client').Prisma.ProductUpdateInput} data
 */
export async function updateProduct(id, data) {
  if (!id) throw new Error("updateProduct: id is required");

  return dbCall(
    () => prisma.product.update({ where: { id }, data }),
    `updateProduct(${id})`
  );
}

/**
 * Soft-delete a product (sets isActive: false).
 * Prefer this over hard deletion to preserve order history.
 *
 * @param {string} id
 */
export async function deactivateProduct(id) {
  if (!id) throw new Error("deactivateProduct: id is required");

  return dbCall(
    () => prisma.product.update({ where: { id }, data: { isActive: false } }),
    `deactivateProduct(${id})`
  );
}