import Link from "next/link.js";
export default function List() {
  return (
    <section className="top-nav">
      <input id="menu-toggle" type="checkbox" />

      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>
          <Link href={"/shop"} className="salmon-mobile">
            Clothing
          </Link>
        </li>
        <li>
          <Link href={"/delivery"} className="salmon-mobile">
            Shoes
          </Link>
        </li>
        <li>
          <Link href={"/contact"} className="salmon-mobile">
            Customer Service
          </Link>
        </li>
        <li>
          <Link href={"/about"} className="salmon-mobile">
            Sale
          </Link>
        </li>
      </ul>
    </section>
  );
}
