'use client'
import { useState } from 'react'
import Image from 'next/image'
import React from 'react';
interface ImageSliderProps {
 images: { url: string; alt_text?: string; width: number; height: number }[]
}
export default function ImageSlider({ images }: ImageSliderProps) {
 const [current, setCurrent] = useState(0)
 return (
<div className="relative w-full aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden group">
     {/* Main Image */}
<Image
       src={images[current]?.url || '/placeholder.jpg'}
       alt={images[current]?.alt_text || 'Product'}
       fill
       className="object-cover transition-opacity duration-300"
       sizes="(max-width: 768px) 100vw, 50vw"
     />
     {/* Thumbnails */}
<div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
       {images.map((_, idx) => (
<button
           key={idx}
           onClick={() => setCurrent(idx)}
           className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
             idx === current
               ? 'border-blue-500 ring-2 ring-blue-500'
               : 'border-gray-200 hover:border-gray-300'
           }`}
>
<Image
             src={images[idx]?.url || '/placeholder.jpg'}
             alt={`Thumb ${idx + 1}`}
             width={64}
             height={64}
             className="object-cover hover:scale-110 transition-transform"
           />
</button>
       ))}
</div>
     {/* Nav Arrows */}
<button
       onClick={() => setCurrent((p) => (p === 0 ? images.length - 1 : p - 1))}
       className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center text-gray-900 transition-all hover:scale-110"
>
       ‹
</button>
<button
       onClick={() => setCurrent((p) => (p === images.length - 1 ? 0 : p + 1))}
       className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center text-gray-900 transition-all hover:scale-110"
>
       ›
</button>
</div>
 )
}