import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import CartBasket from "./CartBasket";
import Link from "next/link.js";


export default function Header() {

  return (
    <header>
   
        <Link href={"./"}>
          <Image
            src={"/crlogo.svg"}
            width={90}
            height={70}
            alt="logo"
          />
        </Link>
      
        <CartBasket />
 
  
    </header>
  );
}
