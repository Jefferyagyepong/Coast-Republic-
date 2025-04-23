import CartBasket from "./CartBasket";
import Link from "next/link.js";
import Menu from "./Menu";
import Image from "next/image";
function Header() {
  return (
    <>
           <header>       
            <div className="header-inline">                
            <Menu />
            <Link href={"./"}>
            <h4 className="logoName">Coast Republic</h4>
            </Link>
            </div>  
            <CartBasket />
            </header>
    </>
  );
}
export default Header;
