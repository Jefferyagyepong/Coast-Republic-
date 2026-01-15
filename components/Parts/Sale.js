
// components/AutoImageSlider.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  autoPlayInterval?: number; // in milliseconds
};

export default function AutoImageSlider({
  images,
  autoPlayInterval = 4000,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Autoplay
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(nextSlide, autoPlayInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, autoPlayInterval, images.length]);

  // Go to specific slide (for dots)
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-2xl group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div key={idx} className="min-w-full flex-shrink-0">
            <Image
              src={src}
              alt={`Product image ${idx + 1}`}
              width={1400}
              height={900}
              className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[5/3]"
              priority={idx === 0}
              quality={85}
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 
                 bg-black/40 hover:bg-black/70 text-white 
                 p-3 rounded-full opacity-0 group-hover:opacity-100 
                 transition-opacity duration-300 focus:outline-none z-10"
        aria-label="Previous image"
      >
        ←
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 
                 bg-black/40 hover:bg-black/70 text-white 
                 p-3 rounded-full opacity-0 group-hover:opacity-100 
                 transition-opacity duration-300 focus:outline-none z-10"
        aria-label="Next image"
      >
        →
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-white scale-125 shadow-md"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
