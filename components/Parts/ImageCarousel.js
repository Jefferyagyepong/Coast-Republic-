
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
// app/components/OrderSummary.jsx

// components/ImageCarousel.jsx
'use client';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Sample image data with names
  const defaultImages = images || [
    { src: '/images/image1.jpg', name: 'Sunset Beach' },
    { src: '/images/image2.jpg', name: 'Mountain Peak' },
    { src: '/images/image3.jpg', name: 'City Skyline' },
    { src: '/images/image4.jpg', name: 'Forest Path' },
  ];

  // Scroll to the selected image
  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  // Handle next and previous buttons
  const handleNext = () => {
    if (currentIndex < defaultImages.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  // Calculate progress bar width
  const progressWidth = ((currentIndex + 1) / defaultImages.length) * 100;

  // Update current index based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        const itemWidth = carouselRef.current.offsetWidth;
        const newIndex = Math.round(scrollLeft / itemWidth);
        setCurrentIndex(newIndex);
      }
    };

    const carousel = carouselRef.current;
    carousel?.addEventListener('scroll', handleScroll);
    return () => carousel?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="max-w-3xl mx-auto my-12">
      <h2 className="text-2xl font-semibold text-center mb-6">Image Carousel</h2>
      <div className="relative">
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory hide-scrollbar"
        >
          {defaultImages.map((image, index) => (
            <figure
              key={index}
              className="relative flex-none w-full snap-center"
            >
              <Image
                src={image.src}
                alt={image.name}
                width={600}
                height={400}
                className="object-cover w-full h-64 md:h-96"
                priority={index === 0}
              />
              <figcaption className="text-center mt-2 text-gray-700 font-medium">
                {image.name}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md disabled:opacity-50"
          aria-label="Previous Image"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === defaultImages.length - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md disabled:opacity-50"
          aria-label="Next Image"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="bg-gray-200 h-2 rounded-full">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-2">
            Slide {currentIndex + 1} of {defaultImages.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
