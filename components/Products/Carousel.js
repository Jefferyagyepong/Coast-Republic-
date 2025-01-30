import { useState, useRef } from "react";

const images = [
  "/thugga.jpg",
  "/thugga.jpg",
  "/thugga.jpg",
  "/thugga.jpg",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startTouch = useRef(0);

  const handleTouchStart = (e) => {
    startTouch.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endTouch = e.changedTouches[0].clientX;
    if (startTouch.current - endTouch > 50) {
      nextSlide();
    }
    if (endTouch - startTouch.current > 50) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="carousel-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} className="slide" />
        ))}
      </div>

      <style jsx>{`
        .carousel-container {
          width: 100%;
          max-width: 800px;
          overflow: hidden;
          position: relative;
        }

        .carousel {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }

        .slide {
          width: 100%;
          flex-shrink: 0;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;
