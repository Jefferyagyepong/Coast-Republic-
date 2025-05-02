// components/ProductList.js
import { useState } from 'react';

// Sample JSON data (replace with your own data or fetch from an API)
const productsData = [
{
    "_id": 1,
    "slug": "Air Force 1 07 black",
    "name": "Air Force 1 07 black",       
    "image": "/products/force1a.JPG",
    "category": "Sneaker",
    "description": "Lorem ipsum dalot gunt Dreh",
    "price": 109.99

  },
  {
    "_id": 2,
    "slug": "Reebok classics",
    "name": "Reebok classics",     
    "image": "/products/reebook1c.JPG",
    "category": "Sneaker",
    "description": "Lorem ipsum dalot gunt Dreh",
    "price": 109.99

  },
  {
    "_id": 3,
    "slug": "Air Force 1 07 high black",
    "name": "Air Force 1 07 high black",
    "image": "/products/force3a.JPG",
     "category": "Sneaker",
    "description": "Lorem ipsum dalot gunt Dreh",
    "price": 130.00

  },
  {
    "_id": 4,
    "slug": " Adidas Campus",
    "name": " Adidas Campus",
    "image": "/products/campus1a.JPG",
    "category": "Sneaker",
    "description": "Lorem ipsum dalot gunt Dreh",
    "price": 185.00
 
  },
  {
    "_id": 5,
    "slug": "Converse Chuck Taylor",
    "name": "Converse Chuck Taylor",
    "image": "/products/chuck1a.JPG",
    "category": "Sneaker",
    "description": "Lorem ipsum dalot gunt Dreh",
    "price": 75.00

  },
  {
    "_id": 6,
    "slug": "Timberland Boots",
    "name": "Timberland Boots",
    "image": "/products/tims1a.JPG",
    "category": "Sneaker",
    "description": "Lorem ipsum dalot gunt Dreh",
    "price": 275.00

  },
  {
    "_id": 7,
    "slug": "vans",
    "name": "vans",
    "image": "/products/vans1a.WEBP",
    "category": "Sneaker",
    "description": "Lorem ipsum dalot gunt Dreh",
    "price": 80.00

  },
  {
    "_id": 8,
    "slug": "Reebok",
    "name": "Reebok",
    "image": "/products/reebook1b.WEBP",
    "category": "Sneaker",
    "description": "Lorem ipsum dalot gunt Dreh",
    "price": 120.00

  }
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
