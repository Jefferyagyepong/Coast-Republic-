// src/lib/products.ts

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
        include: {
          images: {
            orderBy: { display_order: 'asc' },   // or { is_primary: 'desc' }
            // take: 3,                          // optional – limit per variant
          },
        },
      },
      images: {
        orderBy: { display_order: 'asc' },
      },
    },
  })
}