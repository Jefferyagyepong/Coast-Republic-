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
      <h4 className={styles.title}>{product.product}</h4>
      <br />
      <div className="inline-flex">
        <Image src={"/crlogo2.png"} width={15} height={10} alt="logo" />
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
