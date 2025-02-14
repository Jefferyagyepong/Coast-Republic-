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
          <li><Link href="/shop">Shop</Link></Link>
          <li><Link href="#">Services</Link></Link>
          <li><Link href="#">Contact</Link></Link>
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMenu;
