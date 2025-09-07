/* eslint-disable react/react-in-jsx-scope */

import Link from "next/link.js";
import Menu from "./Menu";
import Navbar from "./Navbar";
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

     <Navbar />

      </header>
    </>
  );
}
export default Header;
