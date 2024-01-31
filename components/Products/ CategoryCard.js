import Image from "next/image";
import styles from "/sass/components/ShopPage.module.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
import Link from "next/link";

const CategoryCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
 
      <div className={styles.card}>
        <Link href={"/"}>
          <Image
            src={product.image}
            height={160}
            width={140}
            alt=""
            className={styles.border}
          />
        </Link>

        <h4 className={styles.title}>{product.product}</h4><br/>
        <p className={styles.category}>{product.category}</p><br/>
        <p className={styles.price}>&#8373; {product.price}</p><br/>
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
export default CategoryCard;
