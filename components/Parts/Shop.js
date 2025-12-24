/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";

function Shop() {
  return (
    <div>
      <Link href={"/products"}>
        shop
      </Link>
    </div>
  );
}
export default Shop;