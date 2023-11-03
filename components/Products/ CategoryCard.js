import Image from "next/image";
import styles from "/sass/components/ProductCard.module.css";

import Link from "next/link";

const CategoryCard = ({ product }) => {


  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Link href={"/des"}>
          {" "}
          <Image src={product.image} height={120} width={90} alt="card" />
        </Link>
        <br />

        <h4 className={styles.title}>{product.product}</h4>
        <h5 className={styles.category}>{product.category}</h5>
      </div>
    </div>
  );
};
export default CategoryCard;
