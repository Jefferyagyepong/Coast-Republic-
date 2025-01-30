import { useState, useEffect } from "react";

const ProductFilter = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // Load products from JSON
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  // Filter and sort products
  useEffect(() => {
    let updatedProducts = [...products];

    // Filter by category
    if (category) {
      updatedProducts = updatedProducts.filter((p) => p.category === category);
    }

    // Sort by price
    if (sortOrder === "asc") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  }, [category, sortOrder, products]);

  return (
    <div>
      <h2>Product List</h2>

      {/* Category Filter */}
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Home & Kitchen">Home & Kitchen</option>
        <option value="Stationery">Stationery</option>
      </select>

      {/* Sorting */}
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="">Sort by Price</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>

      {/* Product List */}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
