import { prisma } from '@lib/db'
import { ProductWithVariantsAndImages } from '@types/product'
export async function getFeaturedProducts() {
 return prisma.products.findMany({
   where: { is_active: true, is_featured: true },
   include: {
     category: true,
     variants: {
       where: { stock_quantity: { gt: 0 } },
       orderBy: { is_default: 'desc' },
       include: { images: { where: { is_primary: true } } }
     },
     images: { where: { is_primary: true } }
   },
   orderBy: { created_at: 'desc' },
   take: 12
 })
}
export async function getProductBySlug(slug: string) {
 return prisma.products.findUnique({
   where: { slug, is_active: true },
   include: {
     category: true,
     variants: {
       where: { stock_quantity: { gt: 0 } },
       orderBy: { display_order: 'asc' }
     },
     images: { orderBy: { display_order: 'asc' } }
   }
 })
}