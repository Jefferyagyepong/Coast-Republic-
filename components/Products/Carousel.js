"use client"; // If using Next.js App Router

import Image from 'next/image';


import { useRef, useState, useEffect } from "react";

const images = [
  "/products/george1a.JPG",

  "/products/force1b.JPG",
  "/products/tim1b.JPG",
  "/products/calvin1c.JPG",
  "/products/george1b.JPG",
];

export default function ImageCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
m

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="carousel-container">
      {/* Image Carousel */}
      <div ref={carouselRef} className="carousel">
        {images.map((src, index) => (
          <Image key={index} src={src} alt={`Image ${index}`} width={120}height={120}className="carousel-image" />
        ))}
      </div>

      {/* Scroll Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>
    </div>
  );
}

