import Link from "next/link";
import Image from "next/image";

function All() {
  return (
    <div className="footer-align-left">
      <Image src={"/basqu.jpg"} alt="img" width={370} height={700} />
      <h5>How to dress for your age</h5><br/>
      <Link href={"/products"}>Read</Link>
    </div>
  );
}
export default All;

