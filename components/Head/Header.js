import CartBasket from "./CartBasket";
import Link from "next/link.js";
import Menu from "./Menu";
function Header() {
  return (
    <>
      <header>
        <div>
          <Menu />
          <Link href={"./"}>
            <h4>Coast Republic</h4>
          </Link>
          <CartBasket />
        </div>

      </header>
    </>
  );
}
export default Header;
