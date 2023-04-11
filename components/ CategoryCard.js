
       
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/CategoryCard.module.css';

const CategoryCard = ({ image, name }) => {
  return (
    <div className={styles.card}>

      <Image className={styles.image} src={image} height={250} width={200} alt='product image'/>
      <Link href={`/category/${name.toLowerCase()}`}>
        <div className={styles.info}>
          <h6>{name}</h6>
          <p>SHOP NOW</p>
        </div>
      </Link>
    </div>
  );
};
export default CategoryCard;

   
