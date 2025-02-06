import { useState } from "react";
import Link from 'next/link';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className={styles.logo}>My Logo</div>
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
        <ul className="menu" ${isOpen ? styles.open : ""}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="/products/">Shop</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      
      <style jsx>{`
        .navbar {
  background: #333;
  padding: 16px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
}

/* Logo */
.logo {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

/* Hamburger Button */
.hamburger {
  font-size: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: none;
}

/* Navigation Menu */
.menu {
  list-style: none;
  display: flex;
  gap: 20px;
}

.menu li a {
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  padding: 8px 12px;
  transition: background 0.3s;
}

.menu li a:hover {
  background: #444;
  border-radius: 5px;
}

/* Responsive for Mobile */
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .menu {
    display: none;
    flex-direction: column;
    background: #333;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    text-align: center;
  }

  .menu.open {
    display: flex;
  }

  .menu li {
    padding: 16px;
  }
}
     
      `}</style>
    </nav>
  );
};

export default HamburgerMenu;

