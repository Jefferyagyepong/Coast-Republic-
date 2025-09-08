/* eslint-disable react/react-in-jsx-scope */
"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";


export default function Navbar() {
  const { getCartCount } = useCart();

  return (
    <nav>
      <div>
     
        <Link  className="whiteCart" href={"#"}>
             Cart ({getCartCount()})
        </Link>
       
      
      </div>
    </nav>
  );
}
