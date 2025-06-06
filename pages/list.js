

// components/ProductList.js
import { useState } from 'react';
import Image from "next/image";

// Sample JSON data (replace with your own or fetch from an API)
const products = [
  {
    id: 1,
    name: 'Laptop',
    category: 'Electronics',
    price: 999.99,
    image: 'https://via.placeholder.com/150?text=Laptop',
  },
  {
    id: 2,
    name: 'T-Shirt',
    category: 'Clothing',
    price: 19.99,
    image: 'https://via.placeholder.com/150?text=T-Shirt',
  },
  {
    id: 3,
    name: 'Smartphone',
    category: 'Electronics',
    price: 699.99,
    image: 'https://via.placeholder.com/150?text=Smartphone',
  },
  {
    id: 4,
    name: 'Jeans',
    category: 'Clothing',
    price: 49.99,
    image: 'https://via.placeholder.com/150?text=Jeans',
  },
];

export default function ProductList() {
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('name-asc');

  // Get unique categories for filter dropdown
  const categories = ['All', ...new Set(products.map((product) => product.category))];

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => filter === 'All' || product.category === filter)
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'name-asc') return a.name.localeCompare(b.name);
      if (sort === 'name-desc') return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <div className="product-list-container">
      <div className="controls">
        <label>
          Filter by Category:
          <select onChange={(e) => setFilter(e.target.value)} value={filter}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label>
          Sort by:
          <select onChange={(e) => setSort(e.target.value)} value={sort}>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
          </select>
        </label>
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Image src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      <style jsx global>{`
        .product-list-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        .controls {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }
        .controls label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
        }
        .controls select {
          padding: 8px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
        }
        .product-card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 15px;
          text-align: center;
          background: #fff;
        }
        .product-card img {
          max-width: 100%;
          height: auto;
          border-radius: 4px;
        }
        .product-card h3 {
          font-size: 18px;
          margin: 10px 0;
        }
        .product-card p {
          margin: 5px 0;
          color: #555;
        }
      `}</style>
    </div>
  );
}
