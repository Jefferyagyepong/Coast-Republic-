import Image from "next/image";
import { useEffect } from "react";
export default function Show() {
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
        <div class="slide"><h1 class="slide-number">6</h1></div>
      </div>
    </div>


   
  return (
   
      
        </button>
        <ul className="image-list">
     
          <Image
            src={"/products/tim1b.JPG"}
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
            src={"/products/reebook1c.JPG"}
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
          <Image
            src={"/products/carhartt.JPG"}
            className="image-item"
            alt="img"
            width={70}
            height={60}
          />
        </ul>
        <button
          id="next-slide"
          className="slide-button material-symbols-rounded"
        >
          <Image
            src={"/arrow-back.svg"}
            width={20}
            height={20}
            alt="chevronright"
          />
        </button>
      </div>
      <div className="slider-scrollbar">
        <div className="scrollbar-track">
          <div className="scrollbar-thumb"></div>
        </div>
      </div>
    </div>
  );
}
