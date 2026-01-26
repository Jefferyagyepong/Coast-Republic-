// src/types/product.ts    ← create this file
export interface ProductWithVariantsAndImages {
  id: string
  name: string
  description: string | null
  price: number
  // ... all other product fields

  variants: Array<{
    id: string
    sku: string
    price?: number
    stock: number
    // ...
  }>

  images: Array<{
    id: string
    url: string
    alt?: string
    order: number
  }>
}

// Optional: if you want to re-use Prisma's generated type + your extensions
import { Product } from '@prisma/client'

export type ProductWithVariantsAndImages = Product & {
  variants: /* variant type */
  images:   /* image type   */
}
