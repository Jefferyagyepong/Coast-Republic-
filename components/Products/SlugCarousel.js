import Image from "next/image";
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
          
