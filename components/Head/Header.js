import CartBasket from "./CartBasket";
import Link from "next/link.js";
import Menu from "./Menu";

function Header() {
  return (
    <>
      <header>
       
        <div className="inline">      
            <Menu />
       <Link href={"./"}>
          <h5>Coast Republic</h5>
        </Link>
        </div>
    
         <CartBasket />
        
      </header>
    </>
  );
}
export default Header;
