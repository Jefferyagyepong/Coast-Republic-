
import { useState } from "react";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Head/Header";
import Footer from "@/components/Footer/Footer";
import { getAllProducts } from "@/lib/products";
import ProductNav from "@/components/Parts/ProductNav";
export async function getStaticProps() {
  return { props: { products: getAllProducts() } };
}

const formatMoney = (amount, currency) =>
  `${currency} ${Number(amount).toFixed(2)}`;

const ProductsPage = ({ products }) => {
  
     // Set the items per page and current page state
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Get the current items to display
  const currentItems = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("name-asc");

  // Get unique categories for filter dropdown
  const categories = [
    "All",
    ...new Set(products.map(product => product.category)),
  ];

  // Filter and sort products
  const filteredProducts = products
    .filter(product => filter === "All" || product.category === filter)
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "name-asc") return a.name.localeCompare(b.name);
      if (sort === "name-desc") return b.name.localeCompare(a.name);
      return 0;
    });
  return (
    <>
      <Head>
        <title>Shop | Coast Republic</title>
      </Head>
      <Header />

      <div className="main-content">
        <div className="custom-container">
          <div className="container-center">
            <h1 className="heading-large">Shop All</h1>
            
                      <ProductNav />
                      <div className="controls">
          <label>
            Filter:
            <select
              onChange={e => setFilter(e.target.value)}
              value={filter}
              className="background-bg"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
              </label>
          <label>
            Sort:
            <select
              onChange={e => setSort(e.target.value)}
              value={sort}
              className="background-bg"
            >
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
            </select>
          </label>
        </div>
            

            <div className="product-grid">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="product-card"
                >
                  {product.images?.[0] && (
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={300}
                      height={300}
                      style={{ objectFit: 'cover' }} // Prevents image stretching
                    />
                  )}
                  <p className="product-card__name">{product.name}</p>
                  <p className="product-card__price">
                    {formatMoney(product.price, product.currency)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
           {/* Pagination Buttons */}
      <div className="pagination-controls">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <hr/>
      
        <div className="feedback-container">
      <h4>We would like to hear what you think!</h4>
      <Link href={"#"}>Give feedback</Link>
      </div>

      <Footer />
    </>
  );
};

export default ProductsPage;

      




