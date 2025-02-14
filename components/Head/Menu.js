import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hamburger-menu">
        <button 
          className={`hamburger ${isOpen ? "open" : ""}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`menu ${isOpen ? "show" : ""}`}>
        <ul>
          <li><Link href="#">Home</Link></li>
          <li><Link href="#">About</Link></li>
          <li><Link href="#">Services</Link></li>
          <li><Link href="#">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMenu;
