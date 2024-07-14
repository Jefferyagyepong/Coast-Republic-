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
          height={160}
          width={147}
          alt=""
          className={styles.border}
        />
      </Link>
      <h4 className={styles.title}>{product.product}</h4>
      <br />
      <div className="inline-flex">
        <Image src={"/coast.svg"} width={30} height={40} alt="logo" />
        <p> coast republic</p>
      </div>
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
