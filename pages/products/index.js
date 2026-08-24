import { useState, useMemo } from "react";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Head/Header";
import FootBottom from "@/components/Footer/FootBottom";
import { getAllProducts } from "@/lib/products";
import ProductNav from "@/components/Parts/ProductNav";

export async function getStaticProps() {
  return { props: { products: getAllProducts() } };
}

const formatMoney = (amount, currency) =>
  `${currency} ${Number(amount).toFixed(2)}`;

const DEFAULT_FILTER = "All";
const DEFAULT_SORT = "name-asc";

const ProductsPage = ({ products }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(DEFAULT_FILTER);
  const [sort, setSort] = useState(DEFAULT_SORT);
  const [search, setSearch] = useState("");

  // Unique categories for filter dropdown
  const categories = [
    DEFAULT_FILTER,
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter + search + sort — recomputed only when inputs change
  const filteredProducts = useMemo(() => {
    return products
      .filter(
        (product) => filter === DEFAULT_FILTER || product.category === filter
      )
      .filter((product) =>
        product.name.toLowerCase().includes(search.trim().toLowerCase())
      )
      .sort((a, b) => {
        if (sort === "price-asc") return a.price - b.price;
        if (sort === "price-desc") return b.price - a.price;
        if (sort === "name-asc") return a.name.localeCompare(b.name);
        if (sort === "name-desc") return b.name.localeCompare(a.name);
        return 0;
      });
  }, [products, filter, search, sort]);

  // Pagination derives from the FILTERED list, not the raw products list
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));

  // Clamp currentPage in case a filter change makes it exceed the new totalPages
  const safePage = Math.min(currentPage, totalPages);

  const currentItems = filteredProducts.slice(
    (safePage - 1) * itemsPerPage,
    safePage * itemsPerPage
  );

  const handlePrevPage = () => {
    if (safePage > 1) setCurrentPage(safePage - 1);
  };

  const handleNextPage = () => {
    if (safePage < totalPages) setCurrentPage(safePage + 1);
  };

  // Any change to filter/search/sort resets pagination to page 1
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setFilter(DEFAULT_FILTER);
    setSort(DEFAULT_SORT);
    setSearch("");
    setCurrentPage(1);
  };

  const filtersActive =
    filter !== DEFAULT_FILTER || sort !== DEFAULT_SORT || search !== "";

  return (
    <>
      <Head>
        <title>Shop | Coast Republic</title>
      </Head>
      <Header />

      <div className="main-content">
        <div className="custom-container">
          <div className="container-center">
            <h5>Shop All</h5><br/><br/>

            <ProductNav />
             

            <div className="controls">
           
                <label >
              
                <input
                  type="text"
                  value={search}
                  onChange={handleSearchChange}
                  placeholder="Search products..."
                  className="search-products form-input"
                />
              </label>      
              <label>
              
                <select
                  onChange={handleFilterChange}
                  value={filter}
                
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>

              <label>
          
                <select
                  onChange={handleSortChange}
                  value={sort}
             
                >
                  <option value="name-asc">sort</option>
                  <option value="name-desc">Name (Z-A)</option>
                  <option value="price-asc">Price (Low to High)</option>
                  <option value="price-desc">Price (High to Low)</option>
                </select>
              </label>

              {filtersActive && (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="clear-filters-btn"
                >
                  Clear filters
                </button>
              )}
            </div>
<br/><br/>
            {filteredProducts.length === 0 ? (
              <p className="no-results">
                No products match your search/filters.
              </p>
            ) : (
              <div className="product-container">
                {currentItems.map((product) => (
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
                        style={{ objectFit: "cover" }}
                      />
                    )}
                    <p className="product-card__name">{product.name}</p>
                    <p className="product-card__price">
                      {formatMoney(product.price, product.currency)}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pagination Buttons */}
      {filteredProducts.length > 0 && (
        <div className="pagination-controls">
          <button onClick={handlePrevPage} disabled={safePage === 1}>
            Previous
          </button>
          <span>
            Page {safePage} of {totalPages}
          </span>
          <button onClick={handleNextPage} disabled={safePage === totalPages}>
            Next
          </button>
        </div>
      )}

      <hr />

      <div className="feedback-container">
        <h4>We would like to hear what you think!</h4>
        <Link href={"/contact"}>Give feedback</Link>
      </div>
      <br />

      <FootBottom />
      <style jsx global>{`
        .controls {
  wdth:100%;
  display: flex;
  flex-direction:column;
  gap: 22px;
  juatify-content: center;
  padding: 10px;
   margin-top:3rem;
}
        
    
        .controls select {
          padding: 12px;
          border: 1px solid #ccc;
          width:100%;
          border-radius: 4px;
          color: #000;
        }
        .clear-filters-btn {
          padding: 8px 14px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 4px;
          background: #f5f5f5;
          cursor: pointer;
        }
        .clear-filters-btn:hover {
          background: #e8e8e8;
        }
        .no-results {
          padding: 40px 0;
          text-align: center;
          color: #666;
        }
        .product-container {
          width: 100%;
          margin: 0 auto;
        }
        .viewButton {
          padding: 8px 15px;
        }
        hr {
          border: none;
          height: 1px;
          background: #e0e0e0;
          margin: 1.5rem 0;
        }
          .clear-filters-btn{
          color:#000;
          }
          .search-products{
        width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  box-sizing: border-box;
          }
      `}</style>
    </>
  );
};

export default ProductsPage;