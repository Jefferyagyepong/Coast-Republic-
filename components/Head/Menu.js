import Link from "next/link";
function Menu() {
  return (
<>
      
        <input className="side-menu" type="checkbox" id="side-menu"/>
        <label className="hamb" for="side-menu"><span className="hamb-line"></span></label>
        <!-- Menu -->
        <nav className="nav">
            <ul className="menu">
                <li><Link href="#">Shop</Link></li>
                <li><Link href="#">Delivery Info</Link> </li>
                <li><Link href="#">About Us</Link></li>
        <li><Link href="#">Privacy</Link></li>
            </ul>
        </nav>
    </>
  );
}
export default Menu;
