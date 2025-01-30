import React from "react";
import Image from 'next/image';

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
];

const ImageCarousel = () => {
  return (
    <div className="carouselContainer">
      <div className="carousel">
        {images.map((src, index) => (
          <Image key={index} src={src} alt={`Image ${index + 1}`}  width={60} height={60}  />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
