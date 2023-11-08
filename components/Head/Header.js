import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Top from "./Top";
import CartBasket from "./CartBasket";
import Link from "next/link.js";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className="stick">
      <Top />
      <header className="sticky">
        <Link href={"./"}>
          <Image src={"/crlogo.svg"} width={99} height={90} alt="logo" />
        </Link>
       
      </header>
      <CartBasket />
      <Nav />
    </div>
  );
}
