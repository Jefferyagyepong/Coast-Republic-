import Image from "next/image";
import styles from "/sass/components/ProductCard.module.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
import Link from "next/link";

const CategoryCard = ({ product }) => {
    const dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <Link href={"/ses"}>
        <Image
          src={product.image}
          height={160}
          width={140}
          alt=""
          className={styles.border}
        />
      </Link>

      <h4 className={styles.title}>{product.product}</h4>
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
