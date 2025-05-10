// app/cart/page.jsx
'use client';
import Image from "next/image";
import { useState } from 'react';

export default function CartPage() {
  // Sample cart data
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Classic Sneakers', price: 89.99, quantity: 1, size: '10', image: '/sneakers.jpg' },
    { id: 2, name: 'Graphic Tee', price: 29.99, quantity: 2, size: 'M', image: '/tee.jpg' },
  ]);

  // Calculate total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p style={styles.empty}>Your cart is empty.</p>
      ) : (
        <div style={styles.cart}>
          <div style={styles.items}>
            {cartItems.map((item) => (
              <div key={item.id} style={styles.item}>
                <Image src={item.image} alt={item.name} style={styles.image} />
                <div style={styles.details}>
                  <h3 style={styles.itemName}>{item.name}</h3>
                  <p style={styles.itemSize}>Size: {item.size}</p>
                  <p style={styles.itemPrice}>${item.price.toFixed(2)}</p>
                  <div style={styles.quantity}>
                    <button
                      style={styles.quantityBtn}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span style={styles.quantityNum}>{item.quantity}</span>
                    <button
                      style={styles.quantityBtn}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    style={styles.removeBtn}
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div style={styles.summary}>
            <h2 style={styles.summaryTitle}>Order Summary</h2>
            <div style={styles.summaryDetails}>
              <p>Subtotal: ${calculateTotal()}</p>
              <p>Shipping: Free</p>
              <p style={styles.total}>Total: ${calculateTotal()}</p>
            </div>
            <button style={styles.checkoutBtn}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '20px',
  },
  empty: {
    textAlign: 'center',
    fontSize: '1.2rem',
  },
  cart: {
    display: 'flex',
    gap: '20px',
  },
  items: {
    flex: '2',
  },
  item: {
    display: 'flex',
    gap: '20px',
    padding: '20px',
    borderBottom: '1px solid #ddd',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  },
  details: {
    flex: '1',
  },
  itemName: {
    fontSize: '1.2rem',
    margin: '0 0 10px',
  },
  itemSize: {
    color: '#555',
    margin: '5px 0',
  },
  itemPrice: {
    fontWeight: 'bold',
    margin: '5px 0',
  },
  quantity: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    margin: '10px 0',
  },
  quantityBtn: {
    width: '30px',
    height: '30px',
    border: '1px solid #ddd',
    background: '#f9f9f9',
    cursor: 'pointer',
  },
  quantityNum: {
    width: '30px',
    textAlign: 'center',
  },
  removeBtn: {
    background: 'none',
    border: 'none',
    color: 'red',
    cursor: 'pointer',
    padding: '0',
  },
  summary: {
    flex: '1',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
  summaryTitle: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  summaryDetails: {
    marginBottom: '20px',
  },
  total: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  checkoutBtn: {
    width: '100%',
    padding: '15px',
    background: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};