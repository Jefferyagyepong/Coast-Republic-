import Link from "next/link";
import Image from "next/image";

function Title() {
  return (
    <div className="footer-align-left">
      <Image src={"/products/calvin1a.WEBP"} alt="img" width={380} height={700} />
      <h5>Sneakers: Designer pairs in our collection </h5>
      <Link href={"/products"}>Shop now</Link>
    </div>
  );
}
export default Title;
