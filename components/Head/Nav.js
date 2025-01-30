import { useState } from "react";
import styles from "../styles/Navbar.module.css"; // Import the CSS module

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyLogo</div>

      {/* Hamburger Icon */}
      <div 
        className={`${styles.hamburger} ${open ? styles.open : ""}`} 
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`${styles.navLinks} ${open ? styles.show : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}
