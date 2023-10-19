import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slice";
import styles from "../sass/components/ProductCard.module.css";
import Link from "next/link";

const CategoryCard= ({ product }) => {
  const dispatch = useDispatch();



  return (
    <div className={styles.card}>
      <Link href={"/des"}>
        {" "}
        <Image src={product.image} height={120} width={90} alt="" />
      </Link>
      <br />
   

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
  );
};
export default CategoryCard;
