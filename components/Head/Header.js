import Image from "next/image";
import CartBasket from "./CartBasket";
import Menu from "./Menu";
import Link from "next/link.js";

function Header() {
  return (
    <>
      <header>
        <Menu />   
        <div className="header-inline">
        <Link href={"./"}>            
        <Image src={"/crlogo.svg"} width={70} height={60} alt="logo" />
        <h5>Coast Republic</h5>
        </Link>            
        </div>                                 
        <CartBasket />    
      </header>
    </>
  );
}
export default Header;