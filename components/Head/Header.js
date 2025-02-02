import Image from "next/image";
//import CartBasket from "./CartBasket";
import Link from "next/link.js";

function Header() {
  return (
    <header>
<<<<<<< HEAD
      <Link href={"./"}>
        <Image src={"/crlogo.svg"} width={90} height={70} alt="logo" />
      </Link>
      <h2 className="logo-name">Coast Republic</h2>
      <CartBasket />
=======
        <Link href={"./"}>
          <Image
            src={"/crlogo.svg"}
            width={90}
            height={70}
            alt="logo"
          />
        </Link>
        <h2 className="logo-name">Coast Republic</h2>
    
>>>>>>> 4aeb9a5b6fadb37cc983e34bcf41a738cd60ff8b
    </header>
  );
}
export default Header;
