"use client"
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import React, { use } from 'react'
export default function Header() {
 const { itemCount } = useCart()
 return (
<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<Link href="/" className="text-2xl font-bold text-gray-900">
           Shop
</Link>
<nav className="flex items-center gap-10">
<Link href="/products" className="text-gray-700 hover:text-gray-900 font-medium">
             Products
</Link>
<Link href="/cart" className="relative text-gray-800 hover:text-gray-900">
<ShoppingCart size={26} strokeWidth={1.8} />
             {itemCount > 0 && (
<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1.5">
                 {itemCount > 99 ? '99+' : itemCount}
</span>
             )}
</Link>
</nav>
</div>
</div>
</header>
 )
}