import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slice";
import styles from "../sass/components/ProductCard.module.css";
import Link from "next/link";

const DesCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="row-items">
      <div className={styles.card}>
        <Image src={"/Hoodie.svg"} height={150} width={120} alt="" />
        <h4 className={styles.title}>{product.product}</h4>
        <h5 className={styles.category}>{product.category}</h5>
        <p>&#8373; {product.price}</p>
        <p>{product.description}</p>
        <button
          onClick={() => dispatch(addToCart(product))}
          className={styles.button}
        >
          Add to Cart
        </button>
      </div>

      <div className="category">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="containers">
          <div className="category-item-container has-scrollbar">
            <div className="category-item">
              <div className="category-img-box">
                <img src="/Hoodie.svg" alt="dress & frock" width="100" />
              </div>
            </div>

            <div class="category-item">
              <div className="category-img-box">
                <img src="/Hoodie.svg" alt="winter wear" width="100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DesCard;
