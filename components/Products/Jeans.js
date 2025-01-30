import Link from 'next/link';
import Image from 'next/image';
const images = [
  "/thugga.jpg",
 
];
function Show (){
  return(
 <div  className="footer-align-left">
  
          <div
        className="carousel"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <Image key={index} src={src} alt="img" className="slide" />
        ))}
      </div>
    
<h5>Jeans: Designer pairs in our collection </h5>
<Link href={"/products"}>Shop now</Link>

  <style jsx>{`
        .carousel-container {
        padding: 10px 20px;
          width: 100%;
          max-width: 800px;
          overflow: hidden;
          position: relative;
        }

        .carousel {
        padding:5px 10px;
          display: flex;
          transition: transform 0.5s ease-in-out;
        }

        .slide {
          width: 200px;
          height: 190px;
          flex-shrink: 0;
          object-fit: cover;
        }

        
        }
      `}</style>
     </div>
    
    
  
  );
}
export default Show;