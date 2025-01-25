import Image from "next/image";
import CartBasket from "./CartBasket";
import Link from "next/link.js";

function Header() {
  return (
<<<<<<< HEAD
    <>
      <header>
   
          <Link href={"./"}>
            <Image src={"/crlogo.svg"} width={90} height={70} alt="logo" />
          </Link>
          <h3>Coast Republic</h3>
          <CartBasket />
    
      </header>
    </>
=======
    <header>
        <Link href={"./"}>
          <Image
            src={"/crlogo.svg"}
            width={90}
            height={70}
            alt="logo"
          />
        </Link>
        <h2 className="logo-name">Coast Republic</h2>
        <CartBasket />
    </header>
>>>>>>> 81b8a603b8970c9e37ed39eae242159691509bed
  );
}
export default Header;
