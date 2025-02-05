import Image from "next/image";
import CartBasket from "./CartBasket";
import Menu from "./Menu";
import Link from "next/link.js";

function Header() {
  return (
    <>
      <header>
        <Menu />   
          <Link href={"./"}>            
          <Image src={"/crlogo.svg"} width={90} height={70} alt="logo" />
            <h3>Coast Republic</h3>
              </Link>                               
          <CartBasket />    
      </header>
    </>
  );
}
export default Header;