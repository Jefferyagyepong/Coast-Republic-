/* eslint-disable react/react-in-jsx-scope */
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Menu from './Menu';
import Navbar from './Navbar';
import Toast from './Toast';

export default function Header() {
  const headerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Keep --header-height in sync with the header's real rendered height.
  // It changes when the announcement bar (Toast) is dismissed, so without
  // this, main-content keeps the old padding-top and leaves a gap — or
  // the mobile drawer opens at the wrong offset.
  useEffect(() => {
    const node = headerRef.current;
    if (!node || typeof ResizeObserver === 'undefined') return;

    const setHeightVar = () => {
      document.documentElement.style.setProperty(
        '--header-height',
        `${node.offsetHeight}px`
      );
    };

    setHeightVar();
    const observer = new ResizeObserver(setHeightVar);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Toggle a class for the "lifted" shadow once the page scrolls under
  // the fixed header (styled in _Header.scss via header.is-scrolled).
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header ref={headerRef} className={isScrolled ? 'is-scrolled' : ''}>
      <Toast />
      <div className="header-flex-row">
        <Menu />
        <Link href="/">
          <h3 className="logo">Coast Republic</h3>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
