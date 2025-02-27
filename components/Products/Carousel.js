


// components/DraggableCarousel.js
import { useState, useRef } from 'react';
import Image from "next/image";
const DraggableCarousel = ({ images }) => {
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

    const images = [
  "/products/george1a.JPG",

  "/products/force1b.JPG",
  "/products/tim1b.JPG",
  "/products/calvin1c.JPG",
  "/products/george1b.JPG",
];


  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setDragging(false);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Scroll-fast
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };


  return (
    <div
      ref={carouselRef}
      className="carousel"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="carousel__inner">
        {images.map((image, index) => (
          <div key={index} className="carousel__item">
            <Image src={image.src} alt={image.alt} className="carousel__image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DraggableCarousel;
