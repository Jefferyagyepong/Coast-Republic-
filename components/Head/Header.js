
import CartBasket from "./CartBasket";
import Link from "next/link.js";

function Header() {
  return (
    <>
      <header>
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
      </header>
    </>
  );
}
export default Header;