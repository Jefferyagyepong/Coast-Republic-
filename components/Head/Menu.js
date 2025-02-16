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
          <Link href={"/"} id="link">
            Home
          </Link>
        </li>
        <li>
          <Link href={"/shop"} id="link">
            Shop
          </Link>
        </li>
        <li>
          <Link href={"/"} id="link">
            Track an order
          </Link>
        </li>
        <li>
          <Link href={"/contact"} id="link">
            Contact Us
          </Link>
        </li>
      </ul>
    </section>
  );
}
export default Menu;
