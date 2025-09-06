import Link from "next/link";
import Image from "next/image";
// import { useSelector } from "react-redux";

const Navbar = () => {
  // // Selecting cart from global state
  // const cart = useSelector(state => state.cart);

  // // Getting the count of items
  // const getItemsCount = () => {
  //   return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  // };

  return (
<<<<<<< HEAD
    <div className="basket-div">
      <Link href="#">
        <Image src={"/person.svg"} width={35} height={30} alt="logo" />
      </Link>

      <Link href="/cart">
        <Image src={"/bag.svg"} width={55} height={65} alt="logo" />
      </Link>
      {/* <div className="count">{getItemsCount()}</div> */}
    </div>
=======
    <>



      <div className="flex-row">

        <Link href="/cart">
          <Image src={"/bag.svg"} width={55} height={65} alt="logo" />
        </Link>
        {getItemsCount()}</div>
    </>
>>>>>>> 0e36f048fa4763fea18f3576d321091242c36645
  );
};

export default Navbar;
