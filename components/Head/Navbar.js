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



      <div className="flex-row">

        <Link href="/cart">
          <Image src={"/bag.svg"} width={55} height={65} alt="logo" />
        </Link>
        {getItemsCount()}</div>
    </>
  );
};

export default Navbar;
