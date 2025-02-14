import Link from "next/link";
import Image from "next/image";

function Show() {
  return (
     <div className="footer-align-left">
        <Image src={"/products/carhartt.JPG"} width={360} height={700} alt="img"/>
      <h5>Journal: Designer pairs in our collection </h5>
      <Link href={"/products"}>Shop now</Link>
    </div>
  );
}
export default Show;
