// /components/cart/CartSummary.jsx
import { useCart } from "@/context/CartContext";


export default function CartSummary() {
  const { getCartTotal } = useCart();

  return (
    <div>
      <h2>Order Summary</h2>
      <p>Total: ${getCartTotal().toFixed(2)}</p>
      <button>Proceed to Checkout</button>
    </div>
  );
}
