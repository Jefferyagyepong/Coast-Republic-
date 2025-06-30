import Link from "next/link";
import Image from "next/image";
export default function Collection() {
  return (
    <div className="footer-align-left">
      <Image src={"https://images.unsplash.com/photo-1622445272461-c6580cab8755?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="img" width={380} height={700} />
      <h3>NECCESITIES | BLOG </h3>
      <Link href={"/products"}>Read</Link>
    </div>
  );
}
