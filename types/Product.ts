




// types/Product.ts
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
