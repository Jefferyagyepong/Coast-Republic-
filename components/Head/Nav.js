import Link from "next/link.js";

const Nav = () => {
  return (
    <>
      <section className="top-nav">
        <input id="menu-toggle" type="checkbox" />

        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>

        <ul className="menu">
          <li>
            <Link href={"/shop"}>Home</Link>
          </li>
          <li>
            <Link href={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link href={"/about"}>About Us</Link>
          </li>

          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Nav;
