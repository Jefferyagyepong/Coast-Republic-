import Link from "next/link";
export default function Nav() {
    return (
      <div className="top-nav">
        <input id="menu-toggle" type="checkbox" />

        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li>
            <Link href={"/shop"} className="salmon-mobile">
              Shop
            </Link>
          </li>
          <li>
            <Link href={"/about"} className="salmon-mobile">
              About
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className="salmon-mobile">
              Customer Service
            </Link>
          </li>
          <li>
            <Link href={"/shop"} className="salmon-mobile">
              Sale
            </Link>
          </li>
        </ul>
      </div>
    );
}