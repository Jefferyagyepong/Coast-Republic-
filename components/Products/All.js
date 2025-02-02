import Link from "next/link";
import Image from "next/image";

function All() {
  return (
    <div className="footer-align-left">
      <Image
        src={"/products/calvin1a.WEBP"}
        alt="img"
        width={400}
        height={700}
      />
      <h5>Journal: Designer pairs in our collection </h5>
      <Link href={"/products"}>Shop now</Link>
    </div>
  );
}
export default All;
