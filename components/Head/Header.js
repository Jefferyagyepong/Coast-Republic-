import Menu from "./Menu";
import CartBasket from "./CartBasket";
import Link from "next/link.js";

function Header() {
  return (
    <>
      <header>
                 
        <Link href={"./"}>                   
        <h5>Coast Republic</h5>
        </Link>       
         <Menu />
        <CartBasket />    
  
    
      </header>
    </>
  );
}
export default Header;