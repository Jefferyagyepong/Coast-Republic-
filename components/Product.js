"use client";

import { useCart } from "@/context/CartContext";

export default function Productpage({product}) {
  const { addToCart } = useCart();
 
  return (
    <div className="border p-4 rounded">
      <h2 className="text-lg font-bold">x</h2>
      <p className="text-gray-600">$689</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
