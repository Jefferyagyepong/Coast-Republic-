
import Link from "next/link";

function Show() {
  return (
    <div className="sale-box">

      <b>
        <h1>NEW ARRIVALS</h1>
      </b>{" "}

      <p>
   GET ALL DISCOUNTS AND DELIVERY INFORMATION AT CHECKOUT
      </p>{" "}

      <Link href={"/products"}>Shop now</Link>

      <Link href={"/terms"}>
        T&Cs apply
        <br />
      </Link>
      <br />
    </div>
  );
}
export default Show;
