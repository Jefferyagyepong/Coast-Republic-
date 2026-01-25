'use client'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react'
import React from 'react'
export default function CartPage() {
 const { state, removeItem, updateQuantity, itemCount, total } = useCart()
 if (itemCount === 0) {
   return (
<div className="max-w-4xl mx-auto px-4 py-16 text-center">
<h1 className="text-4xl font-bold mb-6">Your Cart</h1>
<p className="text-xl text-gray-600 mb-10">Your cart is empty.</p>
<Link
         href="/products"
         className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
>
         Continue Shopping <ArrowRight size={18} />
</Link>
</div>
   )
 }
 return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
<h1 className="text-3xl md:text-4xl font-bold mb-10">Your Shopping Cart</h1>
<div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
       {/* Cart Items */}
<div className="lg:col-span-2 space-y-6">
         {state.items.map((item) => (
<div
             key={`${item.id}-${item.variantId ?? 'default'}`}
             className="flex flex-col sm:flex-row gap-6 bg-white p-5 md:p-6 rounded-xl border shadow-sm"
>
<div className="relative w-full sm:w-32 h-32 flex-shrink-0">
<Image
                 src={item.imageUrl ?? '/placeholder.jpg'}
                 alt={item.name}
                 fill
                 className="object-cover rounded-lg"
               />
</div>
<div className="flex-1">
<h3 className="font-semibold text-lg md:text-xl">{item.name}</h3>
               {item.attributes && Object.keys(item.attributes).length > 0 && (
<p className="text-sm text-gray-500 mt-1.5">
                   {Object.entries(item.attributes)
                     .map(([k, v]) => `${k}: ${v}`)
                     .join(' • ')}
</p>
               )}
<p className="text-xl font-bold mt-3">
                 ${(item.price * item.quantity).toFixed(2)}
</p>
<div className="flex flex-wrap items-center gap-6 mt-5">
<div className="flex items-center border rounded-lg overflow-hidden">
<button
                     onClick={() => updateQuantity(item.id, item.variantId, item.quantity - 1)}
                     className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 transition"
                     aria-label="Decrease quantity"
>
<Minus size={16} />
</button>
<span className="px-6 py-2.5 font-medium min-w-[3rem] text-center">
                     {item.quantity}
</span>
<button
                     onClick={() => updateQuantity(item.id, item.variantId, item.quantity + 1)}
                     className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 transition"
                     aria-label="Increase quantity"
>
<Plus size={16} />
</button>
</div>
<button
                   onClick={() => removeItem(item.id, item.variantId)}
                   className="text-red-600 hover:text-red-800 font-medium flex items-center gap-1.5"
>
<Trash2 size={18} />
                   Remove
</button>
</div>
</div>
</div>
         ))}
</div>
       {/* Summary */}
<div className="lg:col-span-1">
<div className="bg-gray-50 rounded-xl p-6 md:p-8 border sticky top-8">
<h2 className="text-2xl font-bold mb-6">Order Summary</h2>
<div className="space-y-4 text-lg">
<div className="flex justify-between">
<span>Subtotal ({itemCount} items)</span>
<span>${total.toFixed(2)}</span>
</div>
<div className="flex justify-between">
<span>Shipping</span>
<span className="text-gray-600">Calculated at checkout</span>
</div>
<div className="border-t pt-4 flex justify-between text-xl font-bold">
<span>Total</span>
<span>${total.toFixed(2)}</span>
</div>
</div>
<Link
             href="/checkout"
             className="mt-8 block w-full bg-blue-600 text-white text-center py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition shadow-md"
>
             Proceed to Checkout
</Link>
</div>
</div>
</div>
</div>
 )
}