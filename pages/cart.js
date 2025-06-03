import { useCart } from '@/context/CartContext';

export default function Cart() {
  const { cartItems, removeItem, updateItemQuantity, totalPrice } = useCart();

  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name} - ${item.price}</span>
              <div>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateItemQuantity(item.id, parseInt(e.target.value))
                  }
                  min="1"
                />
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Order Summary</h3>
          <p>Total Items: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </>
      )}
    </div>
  );
}
