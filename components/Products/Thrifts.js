import Link from "next/link";
import Image from "next/image";

function All() {
  return (
    <div className="footer-align-left">
      <Image src={"/products/force3a.JPG"} alt="img" width={360} height={500} />
      <h5>Sneakers: Designer pairs in our collection </h5>
      <Link href={"/products"}>Shop now</Link>
    </div>
  );
}
export default All;
