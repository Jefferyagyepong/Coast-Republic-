"use client";

import { useCart } from "@/context/CartContext";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartCount,
  } = useCart();

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Total Items: {getCartCount()}</p>
      <p>Total Price: ${getCartTotal()}</p>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} >
              <div>
                <h2>{item.title}</h2>
                <p>
                  ${item.price} x {item.quantity}
                </p>
              </div>
              <div>
                <button
          
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
             
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
