import Link from "next/link";

export default function Sale() {
  return (
    <div className="sale">
      <div className="flex-row">
        <h1 className="font-size">15</h1>
        <div className="flex-column">
          <h4>%</h4>
          <h4>OFF</h4>
        </div>
      </div>
      <br />
      <br />
      <span>NEW SEASON</span>
      <br />
      <br />
      <p>Discount automatically applied at checkout</p>
      <br />
      <br />
      <Link href={"/shop"} className="shop-now">
        Shop Now
      </Link>
    </div>
  );
}