import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  // Selecting cart from global state
  const cart = useSelector(state => state.cart);

  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <div className="inline">
      <Link href="/cart">
        <FontAwesomeIcon icon={faShoppingBag} size="2x" color="black" opacity={0.6}/>
      </Link>
      <p className="count">{getItemsCount()}</p>
    </div>
  );
};

export default Navbar;
