import Link from "next/link";

export default function Sale() {
  return (
    <div className="shop-now">
      <div className="flex-row">
        <h1 className="font-size">15</h1>
        <div className="flex-column">
          <h4>%</h4>
          <h4>OFF</h4>
        </div>
      </div>
      <br />
      <br />
      <span >NEW SEASON</span>
      <br />
      <br />
      <span className="color-linear-gradiant">
        Discount automatically applied at check out
      </span>
      <br />
      <br />
      <Link href={"/shop"} className="add-to-cart">
        Shop Now
      </Link>
    </div>
  );
}
