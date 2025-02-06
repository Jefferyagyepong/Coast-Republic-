import { useState } from 'react';
import Link from 'next/link';
import styles from './sass/Navbar.module.sass';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MySite</div>
      <div 
        className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`${styles.menu} ${menuOpen ? styles.show : ''}`}>
        <button className={styles.close} onClick={() => setMenuOpen(false)}>×</button>
        <ul>
          <li><Link href="#">Home</Link></li>
          <li><Link href="#">About</Link></li>
          <li><Link href="#">Services</Link></li>
          <li><Link href="#">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
