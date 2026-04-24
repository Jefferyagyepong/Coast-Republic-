import type {
  products,
  product_variants,
  product_images,
  categories,
} from '@prisma/client'

export interface ProductWithRelations extends products {
  category: categories | null
  variants: Array<
    product_variants & {
      images: product_images[]
    }
  >
  images: product_images[]
}