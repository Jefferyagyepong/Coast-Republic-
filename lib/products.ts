import { prisma } from '@/lib/db'
import type { Product, ProductVariant, ProductImage, Category } from '@prisma/client'

export type ProductWithRelations = Product & {
  category: Category | null
  variants: (ProductVariant & {
    images: ProductImage[]
  })[]
  images: ProductImage[]
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