import CartBasket from "./CartBasket";
import Link from "next/link.js";
import Menu from "./Menu";
import Image from "next/image";
function Header() {
  return (
    <>
      <header>
        <Menu />
 
        <CartBasket />
      </header>
    </>
  );
}
export default Header;
