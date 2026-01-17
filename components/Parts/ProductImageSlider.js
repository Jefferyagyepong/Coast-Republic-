// components/ProductImageSlider.jsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ProductImageSlider({ images, priority = true, className = '' }) {
  const [current, setCurrent] = useState(0)
  const [touchStartX, setTouchStartX] = useState(null)

  if (!images?.length) {
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