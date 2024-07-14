import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import CartBasket from "./CartBasket";
import Link from "next/link.js";


export default function Header() {

  return (
    <header>
      <div className="header-top">
        <Link href={"./"}>
          <Image
            src={"/coast.svg"}
            width={90}
            height={70}
            alt="logo"
      
          />
        </Link>
        <CartBasket />
      </div>
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
              Products
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className="header-link">
              Contact
            </Link>
          </li>
          <li>
            <Link href={"/"} className="header-link">
              Help Center
            </Link>
          </li>
          <li>
            <Link href={"/"} className="header-link">
              Refunds
            </Link>
          </li>
        </ul>
      </section>
    </header>
  );
}
