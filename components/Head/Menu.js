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
    </div>
  );
}
