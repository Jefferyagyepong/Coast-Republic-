
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
// app/components/OrderSummary.jsx

// app/components/ImageCarousel.jsx
'use client'; // Since this is a client-side component

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles
import Image from 'next/image';

// Sample image data (replace with your image URLs or paths)
const images = [
  { src: 'https://via.placeholder.com/800x400?text=Image+1', alt: 'Image 1' },
  { src: 'https://via.placeholder.com/800x400?text=Image+2', alt: 'Image 2' },
  { src: 'https://via.placeholder.com/800x400?text=Image+3', alt: 'Image 3' },
];

const ImageCarousel = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <Carousel
        showArrows={true} // Show navigation arrows
        showThumbs={false} // Hide thumbnails
        showStatus={false} // Hide status (e.g., "1 of 3")
        infiniteLoop={true} // Loop through images
        autoPlay={true} // Auto-play carousel
        interval={3000} // Time between slides (in ms)
        stopOnHover={true} // Pause on hover
        swipeable={true} // Enable swipe on touch devices
        dynamicHeight={false} // Fixed height for consistency
        className="relative"
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-64 sm:h-80 md:h-96">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded-lg"
              priority={index === 0} // Prioritize first image for faster loading
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;



