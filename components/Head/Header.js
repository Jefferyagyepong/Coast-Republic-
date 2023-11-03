import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";


import CartBasket from "./CartBasket";
import Link from "next/link.js";
import SearchInput from "./SearchInput";



export default function Header() {
  return (
    <div className="stick">
      <div className="wrapper seven">
        <h3 className="text">
          <span> Free delivery to all regions on orders over &#8373;500</span>
        </h3>
      </div>
      <header className="sticky">
        <div className="top-nav">
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
        </div>
        <div className="">
          <Link href={"./"}>
         <Image src={"/crlogo.svg"} width={99} height={90} alt="logo"/>
          </Link>
        </div>
        <div>
          <SearchInput />
        </div>

        <div>
          <CartBasket />
        </div>
      </header>
    </div>
  );
}
