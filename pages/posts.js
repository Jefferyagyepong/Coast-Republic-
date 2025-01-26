// pages/products.js

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async (page) => {
    setLoading(true);
    const res = await fetch(`https:/coast-republic/api/posts?page=${page}&limit=10`);
    const data = await res.json();
    setProducts(data.data);
    setTotalPages(data.totalPages);
    setCurrentPage(data.currentPage);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  return (
    <div>
      <h1>Our Products</h1>

      {loading && <p>Loading products...</p>}

      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>${product.price}</strong></p>
            <Link href={`/products/${product.id}`}>
              <a>View Details</a>
            </Link>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <span>{currentPage} of {totalPages}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
