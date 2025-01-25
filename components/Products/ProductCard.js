import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
import styles from "/sass/components/ShopPage.module.scss";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <Link href={"/"}>
        <Image
          src={product.image}
          height={130}
          width={120}
          alt=""
          className={styles.border}
        />
      </Link><br/>
      <em>
        {" "}
        <h4 className={styles.title}>{product.title}</h4>
        <Link href={"/details"}>View sizing</Link>
      </em><br/>
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
