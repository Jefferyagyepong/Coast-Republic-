import { useState } from "react";

inport Image from "next/image";

export default function Home() {
 

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
    
      </div>
      <button className="prev" onClick={prevSlide}>&lt;</button>
      <button className="next" onClick={nextSlide}>&gt;</button>
    </div>
  );
}
