/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link.js";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Toast from "./Toast";


function Header() {
  return (
    <>
      <header>
      <Toast />

   
        <div className="header-flex-row">
               <Menu />
          
          <Link href={"./"}>
            <h3 className="logo">Coast Republic</h3>
          </Link>
          
              <Navbar />
        </div>

 

      </header>
    </>
  );
}
export default Header;
