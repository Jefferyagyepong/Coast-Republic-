import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cartItems, addItem, removeItem } = useCart();

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
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
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