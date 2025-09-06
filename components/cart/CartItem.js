// /components/cart/CartItem.jsx
import { useCart } from "@/pages/context/CartContext";
import Image from "next/image";

export default function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div>
      <Image src={item.image} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>
        <div>
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity === 1}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            +
          </button>
        </div>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
}
