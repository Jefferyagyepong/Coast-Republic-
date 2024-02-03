import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import CartBasket from "./CartBasket";
import Link from "next/link.js";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
      myFunction();
    };

    // Get the header
    var header = document.getElementById("header");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }, []);
  return (
    <header id="header" className="sticky">
      <Link href={"./"}>
        <Image src={"/crlogo.svg"} width={77} height={70} alt="logo" />
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
