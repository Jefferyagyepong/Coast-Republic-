import React, { useRef, useLayoutEffect } from "react";
import Top from "./Top";


import CartBasket from "./CartBasket";
import Link from "next/link.js";
import SearchInput from "./SearchInput";
import List from "./List";


export default function Header() {
  return (
    <div className="stick">
      <Top />
      <header className="sticky">
        <List/>
       
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
