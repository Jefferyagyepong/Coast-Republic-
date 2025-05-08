import { useCart } from './context/CartContext';

export default function CartPage() {
  const { cartItems, addItem, removeItem } = useCart();

  // Example item to add to cart
  const sampleItem = { id: 1, name: 'Sample Product', price: 29.99 };

  return (
    <div >
      <h1>Shopping Cart</h1>
      <button
        onClick={() => addItem(sampleItem)}
    
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