import { useState } from "react";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} className="slide" />
        ))}
      </div>

      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>

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
          width: ${images.length * 100}%;
        }
        
        .slide {
          width: 100%;
          flex-shrink: 0;
          object-fit: cover;
        }

        .prev, .next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          font-size: 24px;
          z-index: 10;
        }

        .prev { left: 10px; }
        .next { right: 10px; }

        .prev:hover, .next:hover {
          background: rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;
