import Link from "next/link";
import Image from "next/image";
import styles from "../sass/components/CategoryCard.module.css";

const CategoryCard = ({ image, name }) => {
  return (
    <div className={styles.card}>
      <Link href={`/shop`}>
        <Image
          className={styles.image}
          src={image}
          height={150}
          width={120}
          alt="product image"
        />
      </Link>
      <div className={styles.info}>
        <h5>{name}</h5>
        <h6>SHOP NOW</h6>
      </div>
    </div>
  );
};
export default CategoryCard;
