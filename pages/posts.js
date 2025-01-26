// pages/index.js

// pages/products.js
import CategoryCard from "@/components/Products/ CategoryCard";
import { getProducts } from "./api/products/index";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Products({products}) {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  //const fetchProducts = async (page) => {
    //setLoading(true);
    //const res = await fetch(`/api/products/data?page=${page}&limit=10`);
    //const data = await res.json();
    //setProducts(data.data);
    //setTotalPages(data.totalPages);
    //setCurrentPage(data.currentPage);
    //setLoading(false);
  //};

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  return (
    <div>
      <h1>Our Products</h1>

      {loading && <p>Loading products...</p>}

           <div className={styles.cards}>
          {products.map(product => (
            <CategoryCard key={product._id} product={product} />
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

export async function getStaticProps() {
  const products = await getProducts();
    setLoading(true);
  //const res = await fetch(`/api/products/data?page=${page}&limit=10`);
    //const data = await res.json();
    setProducts(products.data);
    setTotalPages(products.totalPages);
    setCurrentPage(products.currentPage);
    setLoading(false);
  return { props: { products } };
};

