import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>Cart is empty</p>}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} - ${item.price * item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {cartItems.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
    </div>
  );
}