
<<<<<<< HEAD
import { useState } from 'react';
import Image from "next/image";
  
  

function All ({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };


  return (

    <div className="slideshowContainer">
      <div className="slides">
    
        <div className="slide">
         <Image src={"/basqu.jpg"} alt="img" width={370} height={700} />
      <h5>How to dress for your age</h5>         
        </div>
    
     <div className="slide">
         <Image src={"/basqu.jpg"} alt="img" width={370} height={700} />
      <h5>How to dress for your age</h5><br/>
     
      </div>

   <div className="controls">
        <button onClick={goToPreviousSlide} className="button-carousel">&lt;</button>
        <button onClick={goToNextSlide} className="button-carousel">&gt;</button>
      </div>
              
        </div>
    
        </div>

  );
}
export default All;
=======
>>>>>>> 5386b7c8794cd13b1b32d8f725eef20da21100e7
