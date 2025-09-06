import Link from "next/link";
import Image from "next/image";

function All() {
  return (
    <div className="footer-align-left">
      <Image
        src={
          "https://images.unsplash.com/photo-1584386450584-c6d766612a45?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fE5pa2UlMjBBaXIlMjBzbmVha2VyfGVufDB8fDB8fHww"
        }
        alt="img"
        width={380}
        height={800}
      />
      <h3>SNEAKERS</h3>


      <Link href={"/products"}>Shop now</Link>
    </div>
  );
}
export default All;
