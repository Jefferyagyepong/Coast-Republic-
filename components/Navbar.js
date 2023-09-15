import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import styles from "../sass/components/Navbar.module.css";
const Navbar = () => {
  // Selecting cart from global state
  const cart = useSelector(state => state.cart);

  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <div className={styles.links}>
      <Link href="/cart">
        <Image src="/cart.svg" width={20} height={20} alt="cart icon" />
      </Link>
      <p> ({getItemsCount()})</p>
    </div>
  );
};

export default Navbar;
