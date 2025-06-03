// components/Cart.js
import { useCart } from '../context/CartContext';

export default function Cart() {
  const {
    currentItems,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    addToCart,
    removeFromCart,
    updateQuantity,
  } = useCart();

  const sampleItem = { id: 1, name: 'Sample Product', price: 29.99 };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={() => addToCart(sampleItem)}>Add Sample Item</button>
      <ul>
        {currentItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
              -
            </button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
