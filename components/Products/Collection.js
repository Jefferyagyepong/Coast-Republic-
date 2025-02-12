import Link from "next/link";
import Image from "next/image";
export default function Collection() {
  return (
    <div className="footer-align-left">
     <Image src={"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="img" width={380} height={700} />"}    
      <h5>Tees: Designer pairs in our collection </h5>
      <Link href={"/products"}>Shop now</Link>
    </div>
  );
}
