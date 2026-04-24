'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'

interface ProductImage {
  id: string | number
  url: string
  alt?: string
}

interface ImageSliderProps {
  images: ProductImage[]
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 })
  const [dragStart, setDragStart] = useState<number | null>(null)
  const mainRef = useRef<HTMLDivElement>(null)

  const goTo = useCallback((index: number) => {
    setActiveIndex(Math.max(0, Math.min(index, images.length - 1)))
    setIsZoomed(false)
  }, [images.length])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed || !mainRef.current) return
    const rect = mainRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setZoomPos({ x, y })
  }, [isZoomed])

  // Touch / drag swipe
  const handleTouchStart = (e: React.TouchEvent) => setDragStart(e.touches[0].clientX)
  const handleMouseDown = (e: React.MouseEvent) => setDragStart(e.clientX)

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (dragStart === null) return
    const delta = e.changedTouches[0].clientX - dragStart
    if (Math.abs(delta) > 40) delta < 0 ? goTo(activeIndex + 1) : goTo(activeIndex - 1)
    setDragStart(null)
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStart === null) return
    const delta = e.clientX - dragStart
    if (Math.abs(delta) > 40) {
      delta < 0 ? goTo(activeIndex + 1) : goTo(activeIndex - 1)
    } else {
      setIsZoomed(z => !z)
    }
    setDragStart(null)
  }

  if (!images?.length) {
    return (
      <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center">
        <span className="text-gray-400 text-sm">No images</span>
      </div>
    )
  }

  const active = images[activeIndex]

  return (
    <div className="flex flex-col gap-4 select-none" style={{ fontFamily: 'inherit' }}>

      {/* ── Main image ── */}
      <div
        ref={mainRef}
        className="relative overflow-hidden rounded-2xl bg-gray-50"
        style={{
          aspectRatio: '1 / 1',
          cursor: isZoomed ? 'zoom-out' : 'zoom-in',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slide strip */}
        <div
          className="flex h-full transition-transform duration-500 ease-[cubic-bezier(.25,.8,.25,1)]"
          style={{ width: `${images.length * 100}%`, transform: `translateX(-${(activeIndex / images.length) * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={img.id} className="relative h-full flex-shrink-0" style={{ width: `${100 / images.length}%` }}>
              <Image
                src={img.url}
                alt={img.alt ?? `Product image ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={i === 0}
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Zoom lens overlay */}
        {isZoomed && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url(${active.url})`,
              backgroundSize: '250%',
              backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
              backgroundRepeat: 'no-repeat',
            }}
          />
        )}

        {/* Prev / Next arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); goTo(activeIndex - 1) }}
              disabled={activeIndex === 0}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm shadow flex items-center justify-center transition hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goTo(activeIndex + 1) }}
              disabled={activeIndex === images.length - 1}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm shadow flex items-center justify-center transition hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); goTo(i) }}
                aria-label={`Go to image ${i + 1}`}
                className="transition-all duration-300 rounded-full bg-white shadow"
                style={{
                  width: i === activeIndex ? '20px' : '8px',
                  height: '8px',
                  opacity: i === activeIndex ? 1 : 0.5,
                }}
              />
            ))}
          </div>
        )}

        {/* Counter badge */}
        <span className="absolute top-3 right-3 text-xs font-medium bg-black/40 text-white px-2 py-0.5 rounded-full backdrop-blur-sm z-10">
          {activeIndex + 1} / {images.length}
        </span>
      </div>

      {/* ── Thumbnail strip ── */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {images.map((img, i) => (
            <button
              key={img.id}
              onClick={() => goTo(i)}
              aria-label={`View image ${i + 1}`}
              className="relative flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200"
              style={{
                width: 72,
                height: 72,
                outline: i === activeIndex ? '2px solid #111' : '2px solid transparent',
                outlineOffset: '2px',
                opacity: i === activeIndex ? 1 : 0.55,
              }}
            >
              <Image
                src={img.url}
                alt={img.alt ?? `Thumbnail ${i + 1}`}
                fill
                sizes="72px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Inline SVG icons ──────────────────────────────────────────
function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}
function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}