import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Image from "next/image";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className={styles.cartContainer}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className={styles.cartItems}>
            {cart.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <Image
                  src={item.image}
                  alt={item.name}
                  className={styles.itemImage}
                />
                <div className={styles.itemDetails}>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <div className={styles.quantityControl}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    className={styles.removeButton}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.cartSummary}>
            <h2>Total: ${calculateTotal()}</h2>
            <button className={styles.checkoutButton}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
