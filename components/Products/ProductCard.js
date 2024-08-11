import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
import styles from "/sass/components/ShopPage.module.scss";
import Link from "next/link";


const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    
      <div className={styles.card}>
       <br/> <Link href={"/"}>
          <Image
            src={product.image}
            height={130}
            width={120}
            alt=""
            className={styles.border}
          />
        </Link>

        <h4 className={styles.title}>{product.product}</h4>
        <p className={styles.price}> $ {product.price}</p>
        <p className={styles.price}>View sizing</p>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="add-to-cart"
        >
          Add to Bag
        </button>
      </div>
 
  );
};

export default ProductCard;
