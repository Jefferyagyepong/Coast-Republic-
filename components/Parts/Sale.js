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
          <div key={i} className="min-width-full">
            <Image
              src={src}
              alt={`slide ${i + 1}`}
              width={1200}
              height={800}
              className="responsive-media"
              priority={i === 0}
              quality={82}
            />
          </div>
        ))}
      </div>

      {/* Arrows - appear on hover */}
      <button
        onClick={prev}
        className="carousel-button"
        aria-label="previous"
      >
        ←
      </button>

      <button
        onClick={next}
        className="carousel-button-next"
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
