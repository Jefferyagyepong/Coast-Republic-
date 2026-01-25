'use client'
import { useState } from 'react'
import { ProductVariantWithImages } from '@/types/Product'

import React from 'react'
interface Props {
 variants: ProductVariantWithImages[]
}
export default function VariantSelector({ variants }: Props) {
 const [selected, setSelected] = useState(variants.find(v => v.is_default) || variants[0])
 return (
<div className="mb-6">
<label className="block text-sm font-medium text-gray-700 mb-3">Select Variant</label>
<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
       {variants.map((variant) => (
<button
           key={variant.id}
           onClick={() => setSelected(variant)}
           className={`p-4 border-2 rounded-xl transition-all hover:shadow-md ${
             selected?.id === variant.id
               ? 'border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-100'
               : 'border-gray-200 hover:border-gray-300'
           }`}
>
<div className="font-medium">{variant.name}</div>
<div className="text-lg font-bold text-blue-600">${variant.price}</div>
<div className="text-xs text-gray-500 mt-1">
             Stock: {variant.stock_quantity}
</div>
           {variant.attributes && (
<div className="text-xs mt-1">
               {Object.entries(variant.attributes).map(([k, v]) => (
<span key={k} className="mr-1">• {k}: {v}</span>
               ))}
</div>
           )}
</button>
       ))}
</div>
</div>
 )
}