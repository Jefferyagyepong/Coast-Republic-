/* eslint-disable react/react-in-jsx-scope */
'use client';
import Link from "next/link.js";
import Menu from "./Menu";
import Navbar from "./Navbar";

import Toast from './Toast';

export default function Header() {
  return (
    <header
      style={{
        position: 'fixed',
        width: '100%',
        backgroundColor: '#eafafe',
        zIndex: 1000,
        color: '#000',
      }}
    >
      <Toast />

      {/* rest of your header — logo, nav, cart icon, etc. */}
       <div className="header-flex-row">
               <Menu />
          
          <Link href={"./"}>
            <h3 className="logo">Coast Republic</h3>
          </Link>
          
              <Navbar />
        </div>
    </header>
  );
}

