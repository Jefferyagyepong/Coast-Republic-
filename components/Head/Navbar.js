import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

const Navbar = () => {
  // Selecting cart from global state
  const cart = useSelector(state => state.cart);

  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <>
        <Link href="#">
        <Image src={"/person.svg"} width={35} height={30} alt="logo" />
      </Link>

      <Link href="/cart">
        <Image src={"/bag.svg"} width={55} height={65} alt="logo" />
      </Link>
      <div className="count">{getItemsCount()}</div>
    </>
  );
};

export default Navbar;
