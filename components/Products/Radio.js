import React from "react";
import "../styles/Carousel.css"; // Import CSS file

const CarouselRadio = () => {
  return (
    <div className="carouselRadio">
      {/* Slides */}
      <div className="slides">
        <input type="radio" name="radio-btn" id="slide1" defaultChecked />
        <input type="radio" name="radio-btn" id="slide2" />
        <input type="radio" name="radio-btn" id="slide3" />

        <div className="slide first">
          <img src="https://via.placeholder.com/800x400/ff7f7f/fff?text=Slide+1" alt="Slide 1" />
        </div>
        <div className="slide">
          <img src="https://via.placeholder.com/800x400/7f7fff/fff?text=Slide+2" alt="Slide 2" />
        </div>
        <div className="slide">
          <img src="https://via.placeholder.com/800x400/7fff7f/fff?text=Slide+3" alt="Slide 3" />
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
