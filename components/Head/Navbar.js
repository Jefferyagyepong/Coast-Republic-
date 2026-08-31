/* eslint-disable react/react-in-jsx-scope */
"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  const { getCartCount } = useCart();

  return (
    
         
        <Link  className="cart" href={"/cart"}>
             <Image src={"/shopping-cart.svg"} alt="cart" width={20} height={30} /> ({getCartCount()})
        </Link>
       
      
      
  );
}