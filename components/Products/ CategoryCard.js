import Image from "next/image";
import styles from "/sass/components/ShopPage.module.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
import Link from "next/link";

const CategoryCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <br />{" "}
       <Link href={`/products/${product.slug}`}>
        <Image
          src={product.image}
          height={100}
          width={120}
          alt=""
          className={styles.border}
        />
      <h4>{product.name}</h4>
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
export default CategoryCard;

   

