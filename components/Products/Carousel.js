import React from "react";
import styles from "../styles/Carousel.module.css"; // Import CSS styles

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
];

const ImageCarousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} className={styles.image} />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
