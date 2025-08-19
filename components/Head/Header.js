import CartBasket from "./CartBasket";
import Link from "next/link.js";
import Menu from "./Menu";
function Header() {
  return (
    <>
      <header>

        <Menu />
        <div>
          <Link href={"./"}>
            <h4>Coast Republic</h4>
          </Link>
        </div>

        <CartBasket />

      </header>
    </>
  );
}
export default Header;
