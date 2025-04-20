import Link from "next/link";
function Menu() {
  return (
<>
 <nav className="nav-box">
      <div className="navbar">
        <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>  
        
          <div className="menu-items">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/products/">Shop</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/contact">contact</Link></li>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}
export default Menu;
