<<<<<<< HEAD
=======
// components/ImageCarousel.js
import { useState } from 'react';
import Image from "next/image";


const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      
      <div className="carousel-slide">
        <Image
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>
      
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <span 
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
>>>>>>> 5386b7c8794cd13b1b32d8f725eef20da21100e7
