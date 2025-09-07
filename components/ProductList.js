"use client";

import { useCart } from "@/context/CartContext";

export default function ProductList({ products }) {
  const { addItem, state: cartState } = useCart();

  return (
    <div>
      {products.map(product => {
        const isInCart = cartState.items.some(item => item.id === product.id);
        return (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button
              onClick={() =>
                addItem({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                })
              }
              disabled={isInCart}
              className={`px-4 py-2 rounded ${
                isInCart
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              {isInCart ? "In Cart" : "Add to Cart"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
