
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
// app/components/OrderSummary.jsx

"use client";
import { useState, useEffect } from "react";

const images = [
  { src: "/images/img1.jpg", name: "Image 1" },
  { src: "/images/img2.jpg", name: "Image 2" },
  { src: "/images/img3.jpg", name: "Image 3" },
  { src: "/images/img4.jpg", name: "Image 4" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div className="carousel-slide" key={idx}>
            <img src={img.src} alt={img.name} />
            <p className="caption">{img.name}</p>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${((current + 1) / images.length) * 100}%` }}
        />
      </div>
    </div>
  );
}


