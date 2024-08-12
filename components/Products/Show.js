import Image from "next/image";
import Link from "next/link";
export default function Show() {
   
  return (
    <div>
     
  
<section className="carousel" >
  <ol className="carousel_viewport">
    <li id="carousel_slide1"
      
        className="carousel_slide">
      <div className="carousel_snapper">
        <Link href={"#carousel_slide4"}
           className="carousel_prev">Go to last slide</Link>
        <Link href={"#carousel_slide2"}
           className="carousel_next">Go to next slide</Link>
      </div>
    </li>
    <li id="carousel_slide2"
        
        className="carousel_slide">
      <div className="carousel_snapper"></div>
      <Link href={"#carousel_slide1"}
         className="carousel_prev">Go to previous slide</Link>
      <Link href={"#carousel_slide3"}
         className="carousel_next">Go to next slide</Link>
    </li>
    <li id="carousel_slide3"
      
        className="carousel_slide">
      <div className="carousel_snapper"></div>
      <Link href={"#carousel_slide2"}
         className="carousel_prev">Go to previous slide</Link>
      <Link href={"#carousel_slide4"}
         className="carousel_next">Go to next slide</Link>
    </li>
    <li id={"carousel_slide4"}
      
        className="carousel_slide">
      <div className="carousel_snapper"></div>
      <Link href={"#carousel_slide3"}
         className="carousel_prev">Go to previous slide</Link>
      <Link href={"#carousel_slide1"}
         className="carousel_next">Go to first slide</Link>
    </li>
  </ol>
    <aside className="carousel_navigation">
    <ol className="carousel_navigation-list">
      <li className="carousel_navigation-item">
        <Link href={"#carousel_slide1"}
           className="carousel_navigation-button">Go to slide 1</Link>
      </li>
      <li className="carousel_navigation-item">
        <Link href={"#carousel_slide2"}
           className="carousel_navigation-button">Go to slide 2</Link>
      </li>
      <li className="carousel_navigation-item">
        <Link href={"#carousel_slide3"}
           className="carousel_navigation-button">Go to slide 3</Link>
      </li>
      <li className="carousel_navigation-item">
        <Link href={"#carousel_slide4"}
           className="carousel_navigation-button">Go to slide 4</Link>
      </li>
    </ol>
  </aside>
</section

   </div>
  
  
  
  
  
  /*
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
          */
    
  );
}
