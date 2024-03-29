import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import CartBasket from "./CartBasket";
import Link from "next/link.js";


export default function Header() {

  return (
    <header id="header" className="sticky">
      <Link href={"./"}>
        <Image src={"/crlogo.svg"} width={77} height={70} alt="logo" className="logo" />
      </Link>
      <div className="right">
        <Image
          src={"/Search.svg"}
          width={20}
          height={30}
          alt="cart"
          className="search"
        />
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
        <CartBasket />
      </div>
    </header>
  );
}
