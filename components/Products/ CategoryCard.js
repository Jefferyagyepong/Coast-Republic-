import Image from "next/image";
import styles from "/sass/components/ProductCard.module.css";

import Link from "next/link";

const CategoryCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <Link
        href={ "/ses"}
       
      >
        <Image
          src={product.image}
          height={160}
          width={140}
          alt=""
          className={styles.border}
        />
      </Link>

      <h4 className={styles.title}>{product.product}</h4>
    </div>
  );
};
export default CategoryCard;
