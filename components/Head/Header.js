import Image from "next/image";
import CartBasket from "./CartBasket";
import Menu from "./Menu";
import Link from "next/link.js";

function Header() {
  return (
    <>
      <header>
   <div>
          <Link href={"./"}>
            <Image src={"/crlogo.svg"} width={90} height={70} alt="logo" />
          </Link>
          <Menu />
          
    </div>
    
          <h3>Coast Republic</h3>

          <CartBasket />
    
      </header>
    </>
  );
}
export default Header;