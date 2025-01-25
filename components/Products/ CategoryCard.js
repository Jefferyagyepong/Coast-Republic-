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
      <Link href={"/"}>
        <Image
          src={product.image}
          height={100}
          width={90}
          alt=""
          className={styles.border}
        />
      </Link>
      <em>
        <h4 className={styles.title}>{product.title}</h4>
        <h4 className={styles.title}>InStock: {product.inStock}</h4>
      </em>
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
