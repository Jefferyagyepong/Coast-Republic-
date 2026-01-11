/* eslint-disable react/react-in-jsx-scope */

import Link from "next/link";

function Show() {
  return (
    <>
    <div>
        <h1>NEW ARRIVALS</h1>
    

      <p>
   GET ALL DISCOUNTS AND DELIVERY INFORMATION AT CHECKOUT
      </p>{" "}

      <Link href={"/products"}>Shop now</Link>

      <Link href={"/terms"}>
        T&Cs apply
      
      </Link>
  
    </div>
    </>
  );
}
export default Show;
