import React, { useRef, useLayoutEffect } from "react";
import Top from "./Top";
import Currency from "./Currency";
import CartBasket from "./CartBasket";
import Link from "next/link.js";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky">
      <Top />
      <Currency />

      <section className="top-nav">
        <div>
          <input id="menu-toggle" type="checkbox" />

          <label className="menu-button-container" htmlFor="menu-toggle">
            <div className="menu-button"></div>
          </label>
          <ul className="menu">
            <li>
              <Link href={"/shop"} className="salmon-mobile">
                Shop
              </Link>
            </li>
            <li>
              <Link href={"/delivery"} className="salmon-mobile">
                Delivery
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className="salmon-mobile">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href={"/about"} className="salmon-mobile">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <a href="./">
            <Image
              src="/crlogo.svg"
              width={100}
              height={60}
              alt="Coast-Republic logo"
              id="logo"
            />
          </a>
        </div>
        <div>
          <CartBasket />
        </div>
      </section>
    </header>
  );
}
