import Image from "next/image";

import styles from "/sass/components/ProductCard.module.scss";
import Link from "next/link";


const ProductCard = ({ product }) => {


  return (
    <div className={styles.card}>
      <Link href={"/ses"}>
        <Image src={product.image} height={160} width={150} alt="" className={styles.border} />
      </Link>

      <h4 className={styles.title}>{product.product}</h4>
      {/* <h5 className={styles.category}>{product.category}</h5>
      <p>&#8373; {product.price}</p>
      <p>{product.description}</p> */}
    </div>
  );
};

export default ProductCard;
