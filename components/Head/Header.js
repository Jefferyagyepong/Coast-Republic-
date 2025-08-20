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
            <h4 className="logo">Coast Republic</h4>
          </Link>
        </div>

        <CartBasket />

      </header>
    </>
  );
}
export default Header;
