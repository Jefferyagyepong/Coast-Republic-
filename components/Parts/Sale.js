// components/ImageSlider.jsx
"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ImageSlider({ images = [], interval = 4000 }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = () => setIndex(i => (i + 1) % images.length)
  const prev = () => setIndex(i => (i - 1 + images.length) % images.length)

  useEffect(() => {
    if (paused) return

    const id = setInterval(next, interval)
    return () => clearInterval(id)
  }, [paused, interval, images.length])

  if (!images.length) return null

  return (
    <div
      className="card-wrapper"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div
        className="flex-transition-container"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="min-w-full">
            <Image
              src={src}
              alt={`slide ${i + 1}`}
              width={1200}
              height={800}
              className="w-full h-auto object-cover aspect-[4/3] sm:aspect-video"
              priority={i === 0}
              quality={82}
            />
          </div>
        ))}
      </div>

      {/* Arrows - appear on hover */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-80 transition-opacity bg-black/50 hover:bg-black/70 text-white text-2xl w-11 h-11 rounded-full flex items-center justify-center"
        aria-label="previous"
      >
        ←
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-80 transition-opacity bg-black/50 hover:bg-black/70 text-white text-2xl w-11 h-11 rounded-full flex items-center justify-center"
        aria-label="next"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === index
                ? 'bg-white scale-125 shadow'
                : 'bg-white/60 hover:bg-white/90'
            }`}
            aria-label={`slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
