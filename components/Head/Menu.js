import Link from "next/link";
function Menu() {
  return (
    <section className="top-nav">
      <input id="menu-toggle" type="checkbox" />

      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>
          <Link href={"/about"} id="header-link">
            About
          </Link>
        </li>
        <li>
          <Link href={"/products/"} id="footer-link">
            Shop
          </Link>
        </li>
        <li>
          <Link href={"/contact"} id="footer-link">
            Contact
          </Link>
        </li>
        <li>
          <Link href={"/help"} id="footer-link">
            Help Center
          </Link>
        </li>
        <li>
          <Link href={"/refund"} id="footer-link">
            Refunds
          </Link>
        </li>
      </ul>
    </section>
  );
}
export default Menu;
