'use client'

import { useState } from 'react'

type Variant = {
  id: number
  name: string | null
  price: number
  stock_quantity: number
  is_default: boolean
  attributes: Record<string, any> | null
}

interface VariantSelectorProps {
  variants: Variant[]
}

export default function VariantSelector({ variants }: VariantSelectorProps) {
  const [selected, setSelected] = useState(
    variants.find(v => v.is_default) ?? variants[0],
  )

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        Choose variant
      </label>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {variants.map(variant => (
          <button
            key={variant.id}
            onClick={() => setSelected(variant)}
            className={`p-4 border rounded-xl text-left transition-all ${
              selected?.id === variant.id
                ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="font-medium">{variant.name || 'Default'}</div>
            <div className="text-lg font-bold text-blue-700 mt-1">
              ${variant.price.toFixed(2)}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Stock: {variant.stock_quantity}
            </div>

            {variant.attributes && Object.keys(variant.attributes).length > 0 && (
              <div className="text-xs text-gray-600 mt-2">
                {Object.entries(variant.attributes)
                  .map(([k, v]) => `${k}: ${v}`)
                  .join(' • ')}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}