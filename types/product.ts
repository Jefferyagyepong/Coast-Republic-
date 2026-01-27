
import { Prisma } from '@prisma/client'

export type ProductWithVariantsAndImages = Prisma.ProductsGetPayload<{
  include: {
    category: true,
    variants: {
      include: { images: true }
    },
    images: true
  }
}>
// This defines the Variant type specifically
export type ProductVariantWithImages = Prisma.ProductVariantsGetPayload<{
  include: { images: true }
}