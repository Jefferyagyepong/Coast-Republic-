// src/lib/products.ts
import { prisma } from '@/lib/db'
import type { products, product_variants, product_images, categories } from '@prisma/client'

export type ProductWithRelations = products & {
  category: categories | null
  variants: (product_variants & {
    images: product_images[]
  })[]
  images: product_images[]
}

export async function getFeaturedProducts(): Promise<ProductWithRelations[]> {
  return prisma.products.findMany({
    where: {
      is_active: true,
      is_featured: true,
    },
    include: {
      category: true,
      variants: {
        where: { stock_quantity: { gt: 0 } },
        orderBy: { is_default: 'desc' },
        include: {
          images: { where: { is_primary: true }, take: 1 },
        },
      },
      images: {
        where: { is_primary: true },
        take: 1,
      },
    },
    orderBy: { created_at: 'desc' },
    take: 12,
  })
}

export async function getProductBySlug(
  slug: string,
): Promise<ProductWithRelations | null> {
  return prisma.products.findUnique({
    where: {
      slug,
      is_active: true,
    },
    include: {
      category: true,
      variants: {
        where: { stock_quantity: { gt: 0 } },
        orderBy: [{ is_default: 'desc' }, { id: 'asc' }],
      },
      images: {
        orderBy: { display_order: 'asc' },
      },
    },
  })
}