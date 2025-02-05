
import React from "react";
import Image from 'next/image';


const images = [
  "/products/george1a.JPG",

  "/products/force1b.JPG",
  "/products/tim1b.JPG",
  "/products/calvin1c.JPG",
  "/products/george1b.JPG",
];

const ImageCarousel = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
        setScrollProgress(progress);
      }
    }, []);
  
  return (
    <div className="carouselContainer">
      <div className="carousel">
        {images.map((src, index) => (
          <Image key={index} src={src} alt={`Image ${index + 1}`}  width={160} height={160}  />
        ))}
        
      {/* Scroll Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>
  
      </div>
    </div>
  );
};

export default ImageCarousel;