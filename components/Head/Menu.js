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
        <li><Linkhref="#home">Home</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default HamburgerMenu;