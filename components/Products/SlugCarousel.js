import Image from "next/image";
import { useState } from 'react';
const Slideshow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

function SlugCarousel () {
  return(
    <>
      <div className="slideshowContainer">
      <div className="slides">
        <div className="slide">
         <Image
          src={product.image}
          height={400}
          width={390}
          alt=" product"       
        />     
        </div>
            
        <div className="slide">
         <Image
          src={product.image}
          height={400}
          width={390}
          alt=" product"       
        />     
        </div>
            
         <div className="slide">
         <Image
          src={product.image}
          height={400}
          width={390}
          alt=" product"       
        /> 
        </div>
      
      <div className="controls">
        <button onClick={goToPreviousSlide} className="button-carousel">&lt;</button>
        <button onClick={goToNextSlide} className="button-carousel">&gt;</button>
      </div>
            
    </div>
    </div>
    </>
  );
    }
export default SlugCarousel;
          
