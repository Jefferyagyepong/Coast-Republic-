// HamburgerMenu.jsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'HOME' },
  { href: '/products/', label: 'SHOP NOW' },
  { href: '/delivery', label: 'DELIVERY INFOMATION' },
  { href: '/contact', label: 'CONTACT US' },
  { href: '/about', label: 'ABOUT US' },
  { href: '/return', label: 'REFUNDS' },
  { href: '/terms', label: 'TERMS AND CONDITIONS' },
];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // close the drawer automatically whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // lock body scroll while the drawer is open, and let Escape close it
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return (
    <nav className="nav-container">
      <input
        type="checkbox"
        id="nav-toggle"
        className="nav-toggle"
        checked={isOpen}
        onChange={() => setIsOpen((open) => !open)}
        aria-hidden="true"
        tabIndex={-1}
      />
      <label
        htmlFor="nav-toggle"
        className="hamburger"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="nav-menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </label>

      {/* dim backdrop behind the open mobile drawer — tap to close */}
      <div
        className="nav-menu-overlay"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <ul className="nav-menu" id="nav-menu">
        {NAV_LINKS.map(({ href, label }) => {
          const isActive =
            href === '/' ? pathname === '/' : pathname?.startsWith(href);

          return (
            <li key={href}>
              <Link
                className={`nav-menu-link${isActive ? ' active' : ''}`}
                href={href}
                aria-current={isActive ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          );
        })}

        {/*
          This item used to sit as a plain <li> in the flex flow, which is
          why it showed up as a stray extra item next to the desktop links.
          It's now flagged .nav-menu-footer, which the stylesheet hides on
          desktop and pins to the bottom of the mobile drawer only.
        */}
        <li className="nav-menu-footer">
          <p>
            © {new Date().getFullYear()} Coast Republic Store. All rights
            reserved.
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default HamburgerMenu;
