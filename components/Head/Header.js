import Menu from "@/components/Head/Menu";
import CartBasket from "./CartBasket";
import Link from "next/link.js";

function Header() {
  return (
    <>
      <header>
                 
        <Link href={"./"}>            
       
        <h5>Coast Republic</h5>
        </Link>                                      
        <CartBasket />    
        <Menu />
      </header>
    </>
  );
}
export default Header;