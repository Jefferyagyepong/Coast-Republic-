// components/HamburgerMenu.jsx
import Link from 'next/link';
// components/HamburgerMenu.jsx


export default function HamburgerMenu() {
  return (
    <nav className="nav">
      <input type="checkbox" className= "checkbox" id="hamburger-toggle" />
      <label htmlFor="hamburger-toggle" className="label">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </label>
      <ul className="menu">
        <li><Link href="/" className="link">Home</Link></li>
        <li><Link href="/about" className="link">About</Link></li>
        <li><Link href="/services" className="link">Services</Link></li>
        <li><Link href="/contact" className="link">Contact</Link></li>
      </ul>
    </nav>
  );
}