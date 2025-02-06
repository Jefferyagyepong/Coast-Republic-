// components/HamburgerMenu.js
import { useState } from "react";


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
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}
