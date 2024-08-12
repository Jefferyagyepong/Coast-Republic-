import Image from "next/image";
export default function Show() {
   
  return (

  <div className="carousel-container">
  <div className="carousel-slide">
       <Image
            src={"/products/vans1a.WEBP"}
            className="image-item"
            alt="img"
            width={70}
            height={60}
          />
    </div>
    <div className="carousel-slide">
      
            <Image
            src={"/products/george1b.JPG"}
            className="image-item"
            alt="img"
            width={70}
            height={60}
          />
      </div>
      <div className="carousel-slide">
        
                 <Image
            src={"/products/calvin1c.JPG"}
            className="image-item"
            alt="img"
            width={70}
            height={60}
          />
        </div>
        <div className="carousel-slide">
          
                 <Image
            src={"/products/calvin1a.WEBP"}
            className="image-item"
            alt="img"
            width={70}
            height={60}
          />
          </div>
          <div className="carousel-slide">
             
                 <Image
            src={"/products/true1a.JPG"}
            className="image-item"
            alt="img"
            width={70}
            height={60}
          />
    
            </div>
          
          <div className="carousel-slide">
            
     
                <Image
            src={"/products/reebook1a.JPG"}
            className="image-item"
            alt="img"
            width={70}
            height={60}
          />
            
            </div>
  
  
</div>

  
       
        
    
  );
}
