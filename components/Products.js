"use client";

import { useCart } from "@/context/CartContext";

export default function Product({ product }) {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <button
     
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
