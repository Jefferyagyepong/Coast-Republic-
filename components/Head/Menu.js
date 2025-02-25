import Link from "next/link";
function Menu() {
  return (
<>
    <Link href="" className="logo">CSS Nav</Link>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
  <ul class="menu">
    <li><Link href="#work">Our Work</Link></li>
    <li><Link href="#about">About</Link></li>
    <li><Link href="#careers">Careers</Link></li>
    <li><Link href="#contact">Contact</Link></li>
  </ul>
    </>
  );
}
export default Menu;
