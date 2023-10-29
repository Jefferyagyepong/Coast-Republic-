import Link from "next/link";

export default function Proceed() {
  return (
    <div className="integrity">
      <Link href={"/checkout"} className="shop-nows">
        Proceed To Checkout
      </Link>
    </div>
  );
}
