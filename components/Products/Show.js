import Image from "next/image";
import { useEffect } from "react";
export default function Show() {
   

  return (
   

<section className="carousel" aria-label="Gallery">
  <ol className="carousel__viewport">
    <li id="carousel__slide1"
        tabindex="0"
        className="carousel__slide">
      <div className="carousel__snapper">
        <Link href={"#carousel__slide4"}
           className="carousel__prev">Go to last slide</Link>
        <Link href={"#carousel__slide2"}
           className="carousel__next">Go to next slide</Link>
      </div>
    </li>
    <li id="carousel__slide2"
        tabindex="0"
        className="carousel__slide">
      <div className="carousel__snapper"></div>
      <Link href={"#carousel__slide1"}
         className="carousel__prev">Go to previous slide</Link>
      <Link href={"#carousel__slide3"}
         className="carousel__next">Go to next slide</Link>
    </li>
    <li id="carousel__slide3"
        tabindex="0"
        className="carousel__slide">
      <div className="carousel__snapper"></div>
      <Link href={"#carousel__slide2"}
         className="carousel__prev">Go to previous slide</Link>
      <Link href={"#carousel__slide4"}
         className="carousel__next">Go to next slide</Link>
    </li>
    <li id={"carousel__slide4"}
        tabindex="0"
        className="carousel__slide">
      <div className="carousel__snapper"></div>
      <Link href={"#carousel__slide3"}
         className="carousel__prev">Go to previous slide</Link>
      <Link href={"#carousel__slide1"}
         className="carousel__next">Go to first slide</Link>
    </li>
  </ol>
    <aside className="carousel__navigation">
    <ol className="carousel__navigation-list">
      <li className="carousel__navigation-item">
        <Link href={"#carousel__slide1"}
           className="carousel__navigation-button">Go to slide 1</Link>
      </li>
      <li className="carousel__navigation-item">
        <Link href={"#carousel__slide2"}
           className="carousel__navigation-button">Go to slide 2</Link>
      </li>
      <li className="carousel__navigation-item">
        <Link href={"#carousel__slide3"}
           className="carousel__navigation-button">Go to slide 3</Link>
      </li>
      <li className="carousel__navigation-item">
        <Link href={"#carousel__slide4"}
           className="carousel__navigation-button">Go to slide 4</Link>
      </li>
    </ol>
  </aside>
</section
  
  
  
  
  
  
  
        <Image
            src={"/products/vans1a.WEBP"}
            className="image-item"
            alt="img"
            width={70}
            height={60}
          />
            <Image
            src={"/products/george1b.JPG"}
            className="image-item"
            alt="img"
            width={70}
            height={60}
          />
     
                 <Image
            src={"/products/calvin1c.JPG"}
            className="image-item"
            alt="img"
            width={70}
            height={60}
          />
       
                 <Image
            src={"/products/calvin1a.WEBP"}
            className="image-item"
            alt="img"
            width={70}
            height={60}
          />
      
                 <Image
            src={"/products/true1a.JPG"}
            className="image-item"
            alt="img"
            width={70}
            height={60}
          />
    
                <Image
            src={"/products/reebook1a.JPG"}
            className="image-item"
            alt="img"
            width={70}
            height={60}
          />
    
  );
}
