 import Link from "next/link";

export default function Sale() {
  return (
    <div className="shop-now">
      <h3 className="next-color-option">NEW SEASON</h3>

      <h2 className="next-color">
        Discount automatically applied at check out
      </h2>

      <Link href={"/shop"} className="add-to-cart">
        Shop Now
      </Link>
    </div>
  );
}
