"use client";

import { useState, useEffect } from "react";
import Product from "@/components/Products";
import Cart from "@/components/Cart";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>E-Commerce Store</h1>
      <div>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-8">
        <Cart />
      </div>
    </div>
  );
}
