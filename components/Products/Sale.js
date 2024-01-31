import Link from "next/link";

export default function Sale() {
  return (
    <div className="shop-now">
      <div className="flex-row">
        <h1 className="font-size">15</h1>
        <div className="flex-column">
          <h4 className="opacity-high">%</h4>
          <h4 className="opacity-high">OFF</h4>
        </div>
      </div>
      <br />
      <br />
      <span className="opacity-high">NEW SEASON</span>
      <br />
      <br />
      <p className="opacity-high">
        Discount automatically applied at check out
      </p>
      <br />
      <br />
      <Link href={"/shop"} className="add-to-cart">
        Shop Now
      </Link>
    </div>
  );
}
