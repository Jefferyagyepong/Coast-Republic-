"use client";
import Image from 'next/image';

import { useRef, useState } from "react";

const images = [
  "/thugga.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
];

export default function ImageCarousel() {
  const carouselRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex overflow-x-scroll scrollbar-hide space-x-4 p-2"
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-64 h-40 object-cover rounded-lg flex-shrink-0"
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="mt-2 w-full h-1 bg-gray-300 rounded-full relative">
        <div
          className="h-1 bg-blue-500 rounded-full transition-all"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
}
