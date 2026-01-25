'use client'
import { useCart } from '../../context/CartContext'
import { ShoppingCart } from 'lucide-react'
import { useState } from 'react'
type Props = {
 product: {
   id: number
   name: string
   slug: string
   base_price: number // Decimal from Prisma → number in JS
   images: { url: string; is_primary: boolean }[]
 }
 selectedVariant?: {
   id: number
   name: string | null
   price: number
   attributes: Record<string, any> | null
 }
}
export default function AddToCartButton({ product, selectedVariant }: Props) {
 const { addItem } = useCart()
 const [added, setAdded] = useState(false)
 const handleAdd = () => {
   const price = selectedVariant?.price ?? product.base_price
   const image = product.images.find((i) => i.is_primary)?.url
   const item = {
     id: product.id,
     variantId: selectedVariant?.id,
     name: selectedVariant?.name
       ? `${product.name} — ${selectedVariant.name}`
       : product.name,
     slug: product.slug,
     price,
     quantity: 1,
     imageUrl: image,
     attributes: selectedVariant?.attributes ?? undefined,
   }
   addItem(item)
   setAdded(true)
   setTimeout(() => setAdded(false), 1800)
 }
 return (
<button
     onClick={handleAdd}
     disabled={added}
     className={`
       w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all
       ${added ? 'bg-green-600 text-white cursor-default' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'}
     `}
>
<ShoppingCart size={20} />
     {added ? 'Added to Cart!' : 'Add to Cart'}
</button>
 )
}