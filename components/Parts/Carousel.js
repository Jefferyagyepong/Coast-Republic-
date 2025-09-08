/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
// components/Carousel.js
import styles from './Carousel.module.css';

const Carousel = ({ items }) => {
    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carousel}>
                <div className={styles.carouselTrack}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.carouselItem}>
                            <img src={item.image} alt={item.brand} className={styles.carouselImage} />
                            <div className={styles.carouselInfo}>
                                <div className={styles.carouselBrand}>{item.brand}</div>
                            </div>
                        </div>
                    ))}
                    {/* Duplicate items for seamless looping (optional for infinite scroll) */}
                    {items.map((item, index) => (
                        <div key={index + items.length} className={styles.carouselItem}>
                            <img src={item.image} alt={item.brand} className={styles.carouselImage} />
                            <div className={styles.carouselInfo}>
                                <div className={styles.carouselBrand}>{item.brand}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Optional navigation buttons (CSS-styled) */}
            <button className={styles.prevButton}>❮</button>
            <button className={styles.nextButton}>❯</button>
        </div>
    );
};

export default Carousel;

