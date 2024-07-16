 import Link from "next/link";

export default function Sale() {
  return (
    <div className="shop-now">
      <div className="flex-row">
        <h1>15</h1>
        <div className="flex-column">
          <h4>%</h4>
          <h4>OFF</h4>
        </div>
      </div>
      <br />
      <br />
      <h6 >NEW SEASON</h6>
      <br />
      <br />
      <h6 className="color-linear-gradiant">
        Discount automatically applied at check out
      </h6>
      <br />
      <br />
      <Link href={"/shop"} className="add-to-cart">
        Shop Now
      </Link>
    </div>
  );
}
