import Menu from "./Menu";
import CartBasket from "./CartBasket";
import Link from "next/link.js";

function Header() {
  return (
    <>
      <header>
<<<<<<< HEAD
        <nav>
          <ul>
            <li>
              <Link href={"/"}></Link>
            </li>
          </ul>
          <label for="menu" tabIndex="0">=</label>
          <input type="checkbox" id="menu" />
          <ul>
            <li>
              <Link href={"/contact"}></Link>
              <Link href={"/privacy"}></Link>
              <Link href={"/ters"}></Link>
            </li>
          </ul>
        </nav>

        <Link href={"./"}>
          <h5>Coast Republic</h5>
        </Link>
        <CartBasket />
=======
                 
        <Link href={"./"}>                   
        <h5>Coast Republic</h5>
        </Link>       
         <Menu />
        <CartBasket />    
  
    
>>>>>>> f3867ee28e57010638532bf39166e3e2da417ef8
      </header>
    </>
  );
}
export default Header;