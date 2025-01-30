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

  const handleRadioChange = (e) => {
    setCurrentIndex(Number(e.target.value));
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

      {/* Radio Buttons */}
      <div className="radio-buttons">
        {images.map((_, index) => (
          <label key={index}>
            <input
              type="radio"
              name="carousel"
              value={index}
              checked={currentIndex === index}
              onChange={handleRadioChange}
            />
          </label>
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

        .radio-buttons {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
        }

        .radio-buttons label {
          cursor: pointer;
        }

        .radio-buttons input[type="radio"] {
          width: 12px;
          height: 12px;
          background-color: #fff;
          border-radius: 50%;
          border: 2px solid #fff;
          appearance: none;
        }

        .radio-buttons input[type="radio"]:checked {
          background-color: #333;
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;
