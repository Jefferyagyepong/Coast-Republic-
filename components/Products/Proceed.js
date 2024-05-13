import Image from "next/image";
import Link from "next/link";

export default function Proceed() {
  return (
    <div className="integrity">
      <Link href={"/checkout"} className="proceed-link">
        <Image src={"/lock.svg"} width={20} height={20} alt="lock" /> Proceed To
        Checkout
      </Link>
    </div>
  );
}
