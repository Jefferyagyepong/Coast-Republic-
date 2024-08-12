import Image from "next/image";
import { useEffect } from "react";
export default function Show() {
   


   
  return (
   
       <div id="slideshow">
      <div class="slide-wrapper">
        <div class="slide">      <Image
            src={"/products/vans1a.WEBP"}
            className="image-item"
            alt="img"
            width={70}
            height={60}
          /></div>
        <div class="slide">
            <Image
            src={"/products/george1b.JPG"}
            className="image-item"
            alt="img"
            width={70}
            height={60}
          />
         </div>
        <div class="slide">
                 <Image
            src={"/products/calvin1c.JPG"}
            className="image-item"
            alt="img"
            width={70}
            height={60}
          />
            </div>
        <div class="slide">
                 <Image
            src={"/products/calvin1a.WEBP"}
            className="image-item"
            alt="img"
            width={70}
            height={60}
          />
            </div>
        <div class="slide">
                 <Image
            src={"/products/true1a.JPG"}
            className="image-item"
            alt="img"
            width={70}
            height={60}
          />
            </div>
        <div class="slide">
                <Image
            src={"/products/reebook1a.JPG"}
            className="image-item"
            alt="img"
            width={70}
            height={60}
          />
            </div>
      </div>
    </div>
    
  );
}
