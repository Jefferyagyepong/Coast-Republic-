import Link from "next/link";
import Image from "next/image";
export default function Collection() {
  return (
    <div className="footer-align-left">
      <Image src= {"/GYAMFUA.svg"} alt="img" width={1200}  height={400}/>
      <h3>NECCESITIES | BLOG </h3>
      <Link href={"/products"}>Read</Link>
    </div>
  );
}
