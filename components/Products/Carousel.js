import { useState } from "react";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (event) => {
    setCurrentIndex(Number(event.target.value));
  };

  return (
    <div className="carousel-container">
      {/* Image Slider */}
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} className="slide" />
        ))}
      </div>

      {/* Slider Bar */}
      <input
        type="range"
        min="0"
        max={images.length - 1}
        value={currentIndex}
        onChange={handleSlideChange}
        className="slider"
      />

      <style jsx>{`
        .carousel-container {
          width: 100%;
          max-width: 800px;
          overflow: hidden;
          position: relative;
          text-align: center;
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

        .slider {
          width: 100%;
          margin-top: 10px;
          -webkit-appearance: none;
          height: 5px;
          background: #ddd;
          border-radius: 5px;
          outline: none;
          opacity: 0.9;
          transition: opacity 0.2s;
        }

        .slider:hover {
          opacity: 1;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 15px;
          height: 15px;
          background: #333;
          border-radius: 50%;
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          width: 15px;
          height: 15px;
          background: #333;
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;
