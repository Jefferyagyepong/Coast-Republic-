
import Link from "next/link";

function Show() {
  return (
    <div className="sale-box">
      
      <b>
        <h1>SALE</h1>
      </b>{" "}
      
      <p>
        EXTRA 15% OFF SELECTED SALE ITEMS APPLY CODE COASTI5 AT CHECKOUT
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
