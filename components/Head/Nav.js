import { useState } from "react";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">MyLogo</div>

      {/* Hamburger Icon */}
      <div 
        className="hamburger" ${open ? styles.open : ""}`} 
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className="navLinks" ${open ? styles.show : ""}`}>
        <li><Link href={/#"}>Home</Link></li>
        <li><Link href={"/about"}>About</Link></li>
        <li><Link href={"/products"}>Services</Link></li>
        <li><Link href={"/contact"}>Contact</Link></li>
      </ul>
    </nav>
  );
}
