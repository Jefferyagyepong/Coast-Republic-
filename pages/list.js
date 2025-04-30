// components/ProductList.js
import { useState } from 'react';

// Sample JSON data (replace with your own data or fetch from an API)
const productsData = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99 },
  { id: 2, name: 'T-Shirt', category: 'Clothing', price: 19.99 },
  { id: 3, name: 'Headphones', category: 'Electronics', price: 59.99 },
  { id: 4, name: 'Jeans', category: 'Clothing', price: 49.99 },
];

export default function ProductList() {
  const [products, setProducts] = useState(productsData);
  const [filterCategory, setFilterCategory] = useState('');
  const [sortOrder, setSortOrder] = useState(''); // 'lowToHigh' or empty

  // Handle filtering by category
  const handleFilter = (e) => {
    const category = e.target.value.toLowerCase();
    setFilterCategory(category);
    let filteredProducts = productsData;

    if (category) {
      filteredProducts = productsData.filter((product) =>
        product.category.toLowerCase().includes(category)
      );
    }

    // Apply sorting after filtering
    if (sortOrder === 'lowToHigh') {
      filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    }

    setProducts(filteredProducts);
  };

  // Handle sorting by price (low to high)
  const handleSort = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
    setSortOrder('lowToHigh');
  };

  return (
    <div className="container">
      <h1>Product List</h1>

      {/* Filter Input */}
      <div className="filter">
        <label htmlFor="category">Filter by Category: </label>
        <input
          type="text"
          id="category"
          value={filterCategory}
          onChange={handleFilter}
          placeholder="e.g., Electronics, Clothing"
        />
      </div>

      {/* Sort Button */}
      <button onClick={handleSort}>Sort by Price: Low to High</button>

      {/* Product List */}
      <ul className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.category} - ${product.price.toFixed(2)}
            </li>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </ul>

      {/* Basic CSS */}
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .filter {
          margin-bottom: 20px;
        }
        .filter input {
          padding: 8px;
          width: 200px;
        }
        button {
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          cursor: pointer;
          margin-bottom: 20px;
        }
        button:hover {
          background-color: #005bb5;
        }
        .product-list {
          list-style: none;
          padding: 0;
        }
        .product-list li {
          padding: 10px;
          border-bottom: 1px solid #ddd;
        }
      `}</style>
    </div>
  );
}