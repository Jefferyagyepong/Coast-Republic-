import Link from "next/link";
import Image from "next/image";

function All() {
  return (
    <div className="footer-align-left">
      <Image src={"https://images.unsplash.com/photo-1600269452339-56203889e71c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="img" width={380} height={800} />
      <h5>Sneakers: Designer pairs in our collection </h5>
      <Link href={"/products"}>Shop now</Link>
    </div>
  );
}
export default All;
