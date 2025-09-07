/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";

function Shop() {
  return (
    <div className="black-bg">
      <Link href={"/products"}>
        shop
      </Link>
    </div>
  );
}
export default Shop;