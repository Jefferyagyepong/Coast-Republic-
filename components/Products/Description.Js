import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
import styles from "/sass/components/ProductCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
 




const Description = ({ product }) => {
  
   useEffect(() => {
     const imgs = document.querySelectorAll(".img-select a");
     const imgBtns = [...imgs];
     let imgId = 1;

     imgBtns.forEach(imgItem => {
       imgItem.addEventListener("click", event => {
         event.preventDefault();
         imgId = imgItem.dataset.id;
         slideImage();
       });
     });

     function slideImage() {
       const displayWidth = document.querySelector(
         ".img-showcase img:first-child"
       ).clientWidth;

       document.querySelector(".img-showcase").style.transform = `translateX(${
         -(imgId - 1) * displayWidth
       }px)`;
     }

     window.addEventListener("resize", slideImage);
   }, []);
  const dispatch = useDispatch();
  return (
    // <div className="container">
    //   <div className={styles.card}>
    //     <Image src={"/Hoodie.svg"} height={150} width={120} alt="" />
    //     <h4 className={styles.title}>{product.product}</h4>
    //     <h5 className={styles.category}>{product.category}</h5>
    //     <p>&#8373; {product.price}</p>
    //     <p>{product.description}</p>
    //     <button
    //       onClick={() => dispatch(addToCart(product))}
    //       className={styles.button}
    //     >
    //       Add to Cart
    //     </button>
    //   </div>
    // </div>

    <div className="card-wrapper">
      <div className="card">
        <div className="product-imgs">
          <div className="img-display">
            <div className="img-showcase">
              <Image
                src={product.image}
                alt="shoe image"
                width={50}
                height={620}
              />

              <Image
                src={product.image}
                alt="shoe image"
                width={50}
                height={620}
              />
              <Image
                src={product.image}
                alt="shoe image"
                width={50}
                height={620}
              />
              <Image
                src={product.image}
                alt="shoe image"
                width={50}
                height={620}
              />
            </div>
          </div>
          <div className="img-select">
            <div className="img-item">
              <a href="#" data-id="1">
                <Image
                  src={product.image}
                  alt="shoe image"
                  width={100}
                  height={99}
                />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="2">
                <Image
                  src={product.image}
                  alt="shoe image"
                  width={100}
                  height={99}
                />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="3">
                <Image
                  src={product.image}
                  alt="shoe image"
                  width={100}
                  height={99}
                />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="4">
                <Image
                  src={product.image}
                  alt="shoe image"
                  width={100}
                  height={99}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="product-content">
          <h3>{product.product}</h3><br/>

          <div className="product-rating">
            <FontAwesomeIcon
              icon={faStar}
              width={10}
              height={10}
              color="gold"
            />
            <FontAwesomeIcon
              icon={faStar}
              width={10}
              height={10}
              color="gold"
            />{" "}
            <FontAwesomeIcon
              icon={faStar}
              width={10}
              height={10}
              color="gold"
            />{" "}
            <FontAwesomeIcon
              icon={faStarHalfAlt}
              width={10}
              height={10}
              color="gold"
            />
            <span>4.7(21)</span>
          </div>

          <div className="product-price">
            <p className="last-price">
              Old Price:{" "}
              <span>
                <del>&#8373; {product.price}</del>
              </span>
            </p>
            <p className="new-price">
              New Price: <span>&#8373; {product.price}</span>
            </p>
          </div>

          <div className="product-detail">
            <h2>about this item: </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              eveniet veniam tempora fuga tenetur placeat sapiente architecto
              illum soluta consequuntur, aspernatur quidem at sequi ipsa!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.
            </p>
            <ul>
              <li>
                In Stock: <span>{ product.isAvailable}</span>
              </li>
              <li>
                Category: <span>{ product.category}</span>
              </li>
              <li>
                Delivery Area: <span>All 16 Regions in GH</span>
              </li>
              <li>
                Delivery Fee: <span>Free</span>
              </li>
            </ul>
          </div>

          <div className="purchase-info">
            <button
              onClick={() => dispatch(addToCart(product))}
              className={styles.button}
            >
              Add to Cart
            </button>
          </div>
          <div className="purchase-info">
            <Link href={"/cart"}>
              <h3 className="black">
                View Bag{" "}
                <FontAwesomeIcon icon={faShoppingBag} width={10} height={10} />
              </h3>
            </Link>
          </div>

          <div class="social-links">
            <p>Share At: </p>

            <a href="#">
              <FontAwesomeIcon icon={faTwitter} width={10} height={10} />
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} width={10} height={10} />
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default  Description;