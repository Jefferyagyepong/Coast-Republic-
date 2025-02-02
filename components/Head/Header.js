import Image from "next/image";
import CartBasket from "./CartBasket";
import Link from "next/link.js";

function Header() {
  return (
    <>
      <header>
   
          <Link href={"./"}>
            <Image src={"/crlogo.svg"} width={90} height={70} alt="logo" />
          </Link>
          <h3>Coast Republic</h3>
           <Link href="/" className="font-bold text-lg">E-Commerce Store</Link>
      <div className="space-x-4">
        <Link href="/search">Search</Link>
      </div>
          <CartBasket />
    
      </header>
    </>
  );
}
export default Header;