import { useState } from "react";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon / Close Button */}
      <button 
        className="hamburger-btn" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Navigation Menu */}
      <nav className={`menu ${isOpen ? "show" : ""}`}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</a></Link>
          <li><Link href="#">Services</a></Link>
          <li><Link href="#">Contact</a></Link>
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMenu;
