
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
// app/components/OrderSummary.jsx

'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ImageCarousel.module.css'; // Or use styled-jsx below

const images = [
  '/GYAMFUA.SVG',
  '/gyamfua black OLIVE.svg',
  '/thugga.jpg',
  '/socks.svg',
  '/wrangler.svg',
];

const INTERVAL = 5000;

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const progressRef = useRef(null);

  useEffect(() => {
    const startProgress = () => {
      if (progressRef.current) {
        progressRef.current.style.transition = 'none';
        progressRef.current.style.width = '0%';
        // Force reflow to restart transition
        void progressRef.current.offsetWidth;
        progressRef.current.style.transition = `width ${INTERVAL}ms linear`;
        progressRef.current.style.width = '100%';
      }
    };

    startProgress();
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      startProgress();
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className={`${styles.image} ${index === currentIndex ? styles.active : ''}`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <div className={styles.progressBar}>
        <div ref={progressRef} className={styles.progress}></div>
      </div>
    </div>
  );
}



