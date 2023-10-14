import React, { useRef, useLayoutEffect } from "react";
import Top from "./Top";

import CartBasket from "./CartBasket";
import Link from "next/link.js";
import Image from "next/image";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <div className="stick">
      <Top />
      <header className="sticky">
        <section className="top-nav">
          <input id="menu-toggle" type="checkbox" />

          <label className="menu-button-container" htmlFor="menu-toggle">
            <div className="menu-button"></div>
          </label>
          <ul className="menu">
            <li>
              <Link href={"/shop"} className="salmon-mobile">
                Clothing
              </Link>
            </li>
            <li>
              <Link href={"/delivery"} className="salmon-mobile">
                Shoes
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className="salmon-mobile">
                Customer Service
              </Link>
            </li>
            <li>
              <Link href={"/about"} className="salmon-mobile">
                Sale
              </Link>
            </li>
          </ul>
        </section>

        <div className="inline">
          <Link href={"./"}>
            <h2>Coast Republic</h2>
          </Link>
          <SearchInput />
        </div>
        <div>
          <CartBasket />
        </div>
      </header>
    </div>
  );
}
