// components/ProductImageSlider.jsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ProductImageSlider({ products, priority = true, className = '' }) {
  const [current, setCurrent] = useState(0)
  const [touchStartX, setTouchStartX] = useState(null)

  if (!products?.length) {
    return (
      <div className="aspect-square w-full bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
        No images available
      </div>
    )
  }

  const goTo = (index) => {
    setCurrent(Math.max(0, Math.min(index, images.length - 1)))
  }

  const next = () => goTo(current + 1)
  const prev = () => goTo(current - 1)

  // Swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return
    const diff = touchStartX - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) next()
      else prev()
    }
    setTouchStartX(null)
  }

  // Keyboard arrows
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [current])

  return (
    <div className={`w-full ${className}`}>
      {/* Main image */}
      <div
        className="relative aspect-square overflow-hidden rounded-xl bg-gray-50 shadow-sm"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={product[current].image}
          alt={images[current].alt}
          fill
          priority={priority && current === 0}
          quality={82}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
          className="object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-md transition hover:scale-110"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-md transition hover:scale-110"
              aria-label="Next image"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-4">
          <div className="flex gap-2.5 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {products.map((img, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`
                  flex-shrink-0 w-20 sm:w-24 aspect-square rounded-lg overflow-hidden border-2 transition-all snap-start
                  ${idx === current
                    ? 'border-blue-600 scale-105 shadow-md'
                    : 'border-transparent hover:border-gray-300 opacity-80 hover:opacity-100'}
                `}
                aria-label={`Image ${idx + 1}`}
                aria-current={idx === current ? 'true' : 'false'}
              >
                <Image
                  src={product.image}
                  alt={img.alt}
                  fill
                  sizes="96px"
                  className="object-cover"
                  quality={75}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}