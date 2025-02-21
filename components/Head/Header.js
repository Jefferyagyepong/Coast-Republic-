import CartBasket from "./CartBasket";
import Link from "next/link.js";
import Menu from "./Menu";

function Header() {
  return (
    <>
      <header>
          <Link href={"./"}>
          <h5>Coast Republic</h5>
        </Link>
        <div className="inline">
       
          <Menu />
         <CartBasket />
        </div>
        
      </header>
    </>
  );
}
export default Header;
