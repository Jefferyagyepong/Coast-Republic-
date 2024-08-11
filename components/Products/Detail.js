import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
import styles from "/sass/components/ShopPage.module.scss";
import Link from "next/link";


const Detail = ({ product }) => {
  const dispatch = useDispatch();

  return (
    
      <div>
       <Link href={"/"}>
          <Image
            src={product.image}
            height={130}
            width={120}
            alt="product image"

          />
        </Link>

        <h4>{product.product}</h4>
        <Link href={"#"}><p className={styles.price}>View sizing</p>
           </Link>
        
        <button
          onClick={() => dispatch(addToCart(product))}
          className="add-to-cart"
        >
          Add to Bag
        </button>
      </div>
 
  );
};

export default Detail