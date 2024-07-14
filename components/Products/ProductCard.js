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
            height={160}
            width={150}
            alt=""
            className={styles.border}
          />
        </Link>

        <h4 className={styles.title}>{product.product}</h4>
        <p className={styles.price}> &#8373; {product.price}</p>
        <p className={styles.description}>{product.description}</p>
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
