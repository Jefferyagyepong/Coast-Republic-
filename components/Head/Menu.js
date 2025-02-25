import Link from "next/link";
function Menu() {
  return (
<>
<input className="side-menu" type="checkbox" id="side-menu"/>
        <label className="hamb" for="side-menu"><span className="hamb-line"></span></label>
   
        <nav className="nav">
            <ul className="menu">
                <li><Link href="#">Gallery</Link></li>
                <li><Link href="#">Blog</Link> </li>
                <li><Link href="#">About</Link></li>
            </ul>
        </nav>
    </>
  );
}
export default Menu;
