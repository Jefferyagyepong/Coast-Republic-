import React from "react";
import Image from "next/image";


const CarouselRadio = () => {
  return (
    <div className="carouselRadio">
      {/* Slides */}
      <div className="slidesRadio">
        <input type="radio" name="radio-btn" id="slide1" defaultChecked />
        <input type="radio" name="radio-btn" id="slide2" />
        <input type="radio" name="radio-btn" id="slide3" />

        <div className="slideRadio first">
        <div className="footer-align-left"> 
        <h4>GET THE COAST REPUBLIC APP </h4>
        <p>Download and enjoy our app anytime, anywhere for IOS and Android devices.</p>

      <div className="ibrid-flex">
          <Image src={"/apple.svg"} alt="apple" width={40} height={30} />
          <Image src={"/android.svg"} alt="android" width={40} height={30} />
        </div>
      </div>
        </div>
        <div className="slideRadio">
          <Image src="https://via.placeholder.com/800x400/7f7fff/fff?text=Slide+2" alt="Slide 2" />
        </div>
        <div className="slideRadio">
          <Image src="https://via.placeholder.com/800x400/7fff7f/fff?text=Slide+3" alt="Slide 3" />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation">
        <label htmlFor="slide1" className="nav-btn"></label>
        <label htmlFor="slide2" className="nav-btn"></label>
        <label htmlFor="slide3" className="nav-btn"></label>
      </div>
    </div>
  );
};

export default CarouselRadio;
