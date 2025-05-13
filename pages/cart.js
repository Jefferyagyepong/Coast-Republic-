import { useCart } from '@/context/cartContext';
import { useSelector, useDispatch } from "react-redux";
export default function CartPage() {
const cart = useSelector(state => state.cart);

  // Example item to add to cart
  const sampleItem = { id: 1, name: 'Sample Product', price: 29.99 };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Shopping Cart</h1>
      <button
        onClick={() => addItem(sampleItem)}
        style={{ marginBottom: '20px' }}
      >
        Add Sample Item
      </button>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} (Qty: {item.quantity})
              <button
                onClick={() => removeItem(item.id)}
                style={{ marginLeft: '10px' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}