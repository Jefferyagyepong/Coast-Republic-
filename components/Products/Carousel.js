import { useState, useEffect } from "react";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

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

      <style jsx>{`
        .carousel-container {
          width: 100%;
          max-width: 800px;
          overflow: hidden;
          position: relative;
        }
        
        .carousel {
          display: flex;
          transition: transform 0.8s ease-in-out;
          width: ${images.length * 100}%;
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
