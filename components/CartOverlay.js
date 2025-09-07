/* eslint-disable react/react-in-jsx-scope */
"use client";

import { useCart } from "@/context/CartContext";

export default function CartOverlay() {
  const { showCart, setShowCart, cartItems, removeFromCart, getCartTotal } =
    useCart();

  if (!showCart) return null;

  return (
    <div className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg p-4">
      <button
        className="bg-red-500 text-white px-2 py-1"
        onClick={() => setShowCart(false)}
      >
        Close
      </button>
      <h2 className="text-xl font-bold">Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="p-2 border-b">
          <h3>{item.title}</h3>
          <p>
            ${item.price} x {item.quantity}
          </p>
          <button
            className="bg-red-500 text-white px-2 py-1"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
      <p>Total: ${getCartTotal()}</p>
    </div>
  );
}
