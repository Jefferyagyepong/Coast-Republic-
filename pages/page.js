"use client";

import { useState, useEffect } from "react";
import Product from "@/components/Product";


export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fake");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">E-Commerce Store</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-8">
      
      </div>
    </div>
  );
}
