import Link from "next/link";
import Image from "next/image";

function Show() {
  return (
    <div className="footer-align-left">
      <Image
        src={
          "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        width={380}
        height={700}
        alt="img"
      />
      <h5>Journal: Designer pairs in our collection </h5>
      <br />
      <br />
      <Link href={"/products"}>Shop now</Link>
    </div>
  );
}
export default Show;
