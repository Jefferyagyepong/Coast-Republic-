
import CartBasket from "./CartBasket";
import Menu from "./Menu";
import Link from "next/link.js";

function Header() {
  return (
    <>
      <header>
        <Menu />           
        <Link href={"./"}>            
       
        <h5>Coast Republic</h5>
        </Link>                                      
        <CartBasket />    
      </header>
    </>
  );
}
export default Header;