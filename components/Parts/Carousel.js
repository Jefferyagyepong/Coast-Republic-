/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
// components/Carousel.js
import Image from "next/image";

const Carousel = ({ items }) => {
    return (
        <div className="carouselContainer">
            <div className="carousel">
                <div className="carouselTrack">
                    {items.map((item, index) => (
                        <div key={index} className="carouselItem">
                            <Image src={item.image} alt={item.brand} className="carouselImage" />
                            <div className="carouselInfo">
                                <div className="carouselBrand">{item.brand}</div>
                            </div>
                        </div>
                    ))}
                    {/* Duplicate items for seamless looping (optional for infinite scroll) */}
                    {items.map((item, index) => (
                        <div key={index + items.length} className="carouselItem">
                            <Image src={item.image} alt={item.brand} className="carouselImage" />
                            <div className="carouselInfo">
                                <div className="carouselBrand">{item.brand}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Optional navigation buttons (CSS-styled) */}
            <button className="prevButton">❮</button>
            <button className="nextButton">❯</button>
        </div>
    );
};

export default Carousel;

