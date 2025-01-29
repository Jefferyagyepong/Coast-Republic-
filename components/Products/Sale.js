
//import Image from 'next/image';
//import { useState, useEffect } from 'react';

//const Slideshow = ({ images, interval = 3000 }) => {
  //const [currentSlide, setCurrentSlide] = useState(0);

  //useEffect(() => {
    //const slideInterval = setInterval(() => {
    //  setCurrentSlide((prev) => (prev + 1) % images.length);
   // }, interval);

  //  return () => clearInterval(slideInterval);
 //  }, [images.length, interval]);

//  const nextSlide = () => {
  //  setCurrentSlide((prev) => (prev + 1) % images.length);
 //  };

  //const prevSlide = () => {
  //  setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
 // };

 //  return (
   // <div style={styles.container}>
    //  <Image
      //  src={images[currentSlide]}
       // alt={`Slide ${currentSlide + 1}`}
      //  style={styles.image}
     // />
     // <div style={styles.buttons}>
       // <button onClick={prevSlide} style={styles.button}>Prev</button>
       // <button onClick={nextSlide} style={styles.button}>Next</button>
     // </div>
   // </div>
 //  );
//};

//const styles = {
  //container: {
   // position: 'relative',
   // width: '100%',
   // height: '300px',
  //  overflow: 'hidden',
 // },
 // image: {
  //  width: '100%',
   // height: '100%',
   // objectFit: 'cover',
   // transition: 'opacity 1s ease-in-out',
 // },
//  buttons: {
  //   position: 'absolute',
 //    top: '50%',
    //width: '100%',
    //display: 'flex',
   // justifyContent: 'space-between',
   // transform: 'translateY(-50%)',
 // },
  //button: {
    //backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //color: 'white',
    //border: 'none',
    //padding: '10px',
   // cursor: 'pointer',
  //},
//};

//export default Slideshow;
import Link from 'next/link';

function Show (){
  return(
  <div>
    <h2>
      SALE
      </h2>
      <p>
        EXTRA 15% OFF
SELECTED SALE ITEMS
APPLY CODE FLASHI5 AT CHECKOUT
         </p>
        <Link href={"/products"}>
          Shop now
             </Link>
          
    <br/><br/><br/><br/>
     <Link href={"/terms"}>
          T&Cs apply
             </Link>


     </div>
  
  );
};
export default Sale;


