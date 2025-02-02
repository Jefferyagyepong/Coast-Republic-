import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";


const images = [
  "/products/george1a.JPG",
  "/products/force1b.JPG",
  "/products/tim1b.JPG",
  "/products/calvin1c.JPG",
  "/products/george1b.JPG",
];

export default function Carousel() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="carousel">
      <button className="scrollButton" onClick={scrollLeft}>
        ‹
      </button>
      <div className="carouselContainer" ref={scrollContainerRef}>
        {images.map((src, index) => (
          <div key={index} className="carouselItem">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={90}
              height={90}
            />
          </div>
        ))}
      </div>
   
      <button className="scrollButton" onClick={scrollRight}>
        ›
      </button>
    </div>
  );
}