/* eslint-disable react/react-in-jsx-scope */
"use client";

import { useCart } from "@/context/CartContext";


export default function Navbar() {
  const { getCartCount, setShowCart } = useCart();

  return (
    <nav>
      <div>
     
        <button onClick={() => setShowCart(true)}>
          Cart ({getCartCount()})
        </button>
      </div>
    </nav>
  );
}
