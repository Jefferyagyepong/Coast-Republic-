import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link.js";

export default function Nav() {
  return (

      <section className="top-nav">
        <input id="menu-toggle" type="checkbox" />

        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li>
            <Link href={"/about"} className="header-link">
              About
            </Link>
          </li>
          <li>
            <Link href={"/shop"} className="header-link">
              Shop
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className="header-link">
              Contact
            </Link>
          </li>
     
        </ul>
      </section>

  );
}
