import type { Product, ProductVariant, ProductImage, Category } from '@prisma/client'

export interface ProductWithRelations extends Product {
  category: Category | null
  variants: Array<
    ProductVariant & {
      images: ProductImage[]
    }
  >
  images: ProductImage[]
}