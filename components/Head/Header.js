import CartBasket from "./CartBasket";
import Link from "next/link.js";
import Menu from "./Menu";

function Header() {
  return (
    <>
      <header>
       
        
            <Menu />
      
       <Link href={"./"}>
          <h4>Coast Republic</h4>
        </Link>
    
         <CartBasket />
        
      </header>
    </>
  );
}
export default Header;
