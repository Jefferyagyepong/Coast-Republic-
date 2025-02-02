import Link from "next/link";
import Image from "next/image";
export default function Collection() {
  return (
    <div className="footer-align-left">
      <Image
        src={"/products/calvin1a.WEBP"}
        alt="img"
        width={370}
        height={700}
      />
      <h5>Tees: Designer pairs in our collection </h5>
      <Link href={"/products"}>Shop now</Link>
    </div>
  );
}
