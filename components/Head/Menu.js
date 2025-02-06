// components/HamburgerMenu.js
import { useState } from "react";
import Link from 'next/link';


export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-menu">
      <input
        type="checkbox"
        id="menu-toggle"
        className="menu-toggle"
        checked={open}
        onChange={() => setOpen(!open)}
      />
      <label htmlFor="menu-toggle">
        <div className="hamburger-icon"></div>
        <div className="hamburger-icon"></div>
        <div className="hamburger-icon"></div>
      </label>
      <div className="menu">
        <Link href="/">Home</Link>
        <Link href="/products/">Shop</Link>
        <Link href="#">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      
      <style jsx>{`
        .hamburger-menu {
  position: relative;
  display: inline-block;
}

.hamburger-icon {
  width: 30px;
  height: 3px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

.menu-toggle {
  display: none;
}

.menu {
  display: none;
  position: absolute;
  top: 40px;
  left: 0;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 150px;
  padding: 10px;
}

.menu a {
  display: block;
  text-decoration: none;
  color: black;
  padding: 10px;
}

.menu-toggle:checked + .menu {
  display: block;
}


  
      `}</style>
    </div>
  );
}
