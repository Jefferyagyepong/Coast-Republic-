import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Top from "./Top";
import CartBasket from "./CartBasket";
import Link from "next/link.js";
import Nav from "./Nav";

export default function Mobile() {
  return (
  
          <header className="sticky-mobile">
              <Nav/>
        <Link href={"./"}>
          <Image src={"/crlogo.svg"} width={77} height={70} alt="logo" />
        </Link>
        <CartBasket />
      </header>
  
  );
}
