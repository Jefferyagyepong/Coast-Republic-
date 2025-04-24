// HamburgerMenu.jsx
import React, { useState } from 'react';
import Link from 'next/link';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-container">
      <input
        type="checkbox"
        id="nav-toggle"
        className="nav-toggle"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <label htmlFor="nav-toggle" className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className="nav-menu">
        <li><Link href="./">HOME</Link></li>
        <li><Link href="/shop">SHOP NOW </Link></li>
        <li><Link href="/delivery">DELIVERY INFOMATION</Link></li>
        <li><Link href="contact">CONTACT US</Link></li>
      </ul>
    </nav>
  );
};

export default HamburgerMenu;