

import Link from 'next/link';

export default function HamburgerMenu() {


  return (
    <nav>
      
        <input type="checkbox" id="menu-toggle" />
        
        
        <label for="menu-toggle" className="menu-icon">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </label>

        
        <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="/products/">Shop Now</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
    </nav>


  );
}
