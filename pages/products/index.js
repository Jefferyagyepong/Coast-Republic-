import { useState, useMemo, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "@/components/Head/Header";
import FootBottom from "@/components/Footer/FootBottom";
import { getAllProducts } from "@/lib/products";
import Newsletter from "@/components/Footer/Newsletter";

export async function getStaticProps() {
  return { props: { products: getAllProducts() } };
}

const formatMoney = (amount, currency) =>
  `${currency} ${Number(amount).toFixed(2)}`;

const DEFAULT_FILTER = "All";
const DEFAULT_SORT = "name-asc";
const ITEMS_PER_PAGE = 10;
const SEARCH_DEBOUNCE_MS = 250;

const SORT_OPTIONS = [
  { value: "name-asc", label: "Name (A–Z)" },
  { value: "name-desc", label: "Name (Z–A)" },
  { value: "price-asc", label: "Price (Low to High)" },
  { value: "price-desc", label: "Price (High to Low)" },
];

// Builds a compact page list with ellipses, e.g. 1 … 4 5 [6] 7 8 … 12
const getPageWindow = (current, total) => {
  const pages = [];
  const add = (p) => pages.push(p);
  const windowSize = 1;
  add(1);
  if (current - windowSize > 2) add("…");
  for (
    let p = Math.max(2, current - windowSize);
    p <= Math.min(total - 1, current + windowSize);
    p++
  ) {
    add(p);
  }
  if (current + windowSize < total - 1) add("…");
  if (total > 1) add(total);
  return pages;
};

const ProductsPage = ({ products }) => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(DEFAULT_FILTER);
  const [sort, setSort] = useState(DEFAULT_SORT);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const hydratedFromUrl = useRef(false);

  // ---- Read filters from the URL once the router is ready, so shared
  // links, bookmarks, and the back button restore the exact same view.
  useEffect(() => {
    if (!router.isReady || hydratedFromUrl.current) return;
    hydratedFromUrl.current = true;
    const { q, category, sort: sortParam, page } = router.query;
    if (typeof q === "string") {
      setSearch(q);
      setSearchInput(q);
    }
    if (typeof category === "string") setFilter(category);
    if (typeof sortParam === "string") setSort(sortParam);
    if (typeof page === "string" && !Number.isNaN(Number(page))) {
      setCurrentPage(Math.max(1, parseInt(page, 10)));
    }
  }, [router.isReady, router.query]);

  // ---- Debounce the text input so filtering doesn't run on every keystroke
  useEffect(() => {
    const id = setTimeout(() => {
      setSearch(searchInput);
      setCurrentPage(1);
    }, SEARCH_DEBOUNCE_MS);
    return () => clearTimeout(id);
  }, [searchInput]);

  // ---- Keep the URL in sync with the current view (shallow — no re-fetch)
  useEffect(() => {
    if (!router.isReady || !hydratedFromUrl.current) return;
    const query = {};
    if (search) query.q = search;
    if (filter !== DEFAULT_FILTER) query.category = filter;
    if (sort !== DEFAULT_SORT) query.sort = sort;
    if (currentPage > 1) query.page = String(currentPage);
    router.replace({ pathname: router.pathname, query }, undefined, {
      shallow: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, filter, sort, currentPage]);

  const categories = [
    DEFAULT_FILTER,
    ...new Set(products.map((product) => product.category)),
  ];

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

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const rangeStart = filteredProducts.length === 0 ? 0 : startIndex + 1;
  const rangeEnd = Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    setCurrentPage(1);
  };

  const handleSearchInputChange = (e) => setSearchInput(e.target.value);

  const handleClearSearch = () => {
    setSearchInput("");
    setSearch("");
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setFilter(DEFAULT_FILTER);
    setSort(DEFAULT_SORT);
    setSearch("");
    setSearchInput("");
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
            <h5>Shop All</h5>

            {/* Filter bar: search, category, sort — one flex row, wraps on mobile */}
            <div className="controls">
              <div className="search-field">
                <svg
                  className="search-field__icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  value={searchInput}
                  onChange={handleSearchInputChange}
                  placeholder="Search t-shirts, jeans, caps, shoes..."
                  className="search-products form-input"
                  aria-label="Search products"
                />
                {searchInput && (
                  <button
                    type="button"
                    className="search-field__clear"
                    onClick={handleClearSearch}
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>

              <div className="select-field">
                <select
                  onChange={handleFilterChange}
                  value={filter}
                  aria-label="Filter by category"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="select-field">
                <select onChange={handleSortChange} value={sort} aria-label="Sort products">
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

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

            {/* Active filter chips */}
            {filtersActive && (
              <div className="filter-chips">
                {search && (
                  <span className="filter-chip">
                    “{search}”
                    <button type="button" onClick={handleClearSearch} aria-label="Remove search filter">
                      ×
                    </button>
                  </span>
                )}
                {filter !== DEFAULT_FILTER && (
                  <span className="filter-chip">
                    {filter}
                    <button
                      type="button"
                      onClick={() => {
                        setFilter(DEFAULT_FILTER);
                        setCurrentPage(1);
                      }}
                      aria-label="Remove category filter"
                    >
                      ×
                    </button>
                  </span>
                )}
                {sort !== DEFAULT_SORT && (
                  <span className="filter-chip">
                    {SORT_OPTIONS.find((o) => o.value === sort)?.label}
                    <button
                      type="button"
                      onClick={() => setSort(DEFAULT_SORT)}
                      aria-label="Reset sort order"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            )}

            <p className="results-count">
              {filteredProducts.length === 0
                ? "No products found"
                : `Showing ${rangeStart}–${rangeEnd} of ${filteredProducts.length} products`}
            </p>

            {filteredProducts.length === 0 ? (
              <div className="no-results">
                <p>No products match your search or filters.</p>
                <button type="button" className="btn-secondary" onClick={handleClearFilters}>
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="product-container">
                {currentItems.map((product) => {
                  const onSale =
                    typeof product.compareAtPrice === "number" &&
                    product.compareAtPrice > product.price;
                  const outOfStock =
                    typeof product.stock === "number" && product.stock <= 0;
                  const lowStock =
                    typeof product.stock === "number" &&
                    product.stock > 0 &&
                    product.stock <= 5;

                  return (
                    <Link
                      key={product.id}
                      href={`/products/${product.id}`}
                      className={`product-card${outOfStock ? " product-card--oos" : ""}`}
                    >
                      <div className="product-card__media">
                        {product.images?.[0] && (
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            width={300}
                            height={300}
                            style={{ objectFit: "cover" }}
                          />
                        )}
                        {onSale && <span className="badge badge--sale">Sale</span>}
                        {outOfStock && (
                          <span className="badge badge--oos">Out of stock</span>
                        )}
                      </div>
                      <p className="product-card__name">{product.name}</p>
                      <p className="product-card__price">
                        {formatMoney(product.price, product.currency)}
                        {onSale && (
                          <span className="product-card__was">
                            {formatMoney(product.compareAtPrice, product.currency)}
                          </span>
                        )}
                      </p>
                      {lowStock && (
                        <p className="product-card__low-stock">
                          Only {product.stock} left
                        </p>
                      )}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pagination */}
      {filteredProducts.length > 0 && totalPages > 1 && (
        <nav className="pagination-controls" aria-label="Product pages">
          <button onClick={() => goToPage(safePage - 1)} disabled={safePage === 1}>
            Previous
          </button>
          {getPageWindow(safePage, totalPages).map((page, i) =>
            page === "…" ? (
              <span key={`ellipsis-${i}`} className="pagination-ellipsis">
                …
              </span>
            ) : (
              <button
                key={page}
                className={page === safePage ? "pagination-page pagination-page--active" : "pagination-page"}
                onClick={() => goToPage(page)}
                aria-current={page === safePage ? "page" : undefined}
              >
                {page}
              </button>
            )
          )}
          <button onClick={() => goToPage(safePage + 1)} disabled={safePage === totalPages}>
            Next
          </button>
        </nav>
      )}

      <hr />
      <div className="feedback-container">
        <h4>Have any question? </h4>
        <Link href={"/contact"}>Send Us a Message </Link>
      </div>
      <br />
      <Newsletter />
      <FootBottom />

      <style jsx global>{`
        .controls {
          width: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          gap: 14px;
          padding: 10px 0;
          margin-top: 1.5rem;
        }

        .search-field {
          position: relative;
          flex: 1 1 260px;
          min-width: 200px;
          display: flex;
          align-items: center;
        }
        .search-field__icon {
          position: absolute;
          left: 12px;
          color: #888;
          pointer-events: none;
        }
        .search-products {
          width: 100%;
          padding: 10px 36px 10px 38px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
          color: #222;
          box-sizing: border-box;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .search-products:focus {
          outline: none;
          border-color: #1a1a1a;
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.06);
        }
        .search-field__clear {
          position: absolute;
          right: 8px;
          width: 22px;
          height: 22px;
          border: none;
          background: #eee;
          border-radius: 50%;
          font-size: 14px;
          line-height: 1;
          cursor: pointer;
          color: #444;
        }
        .search-field__clear:hover {
          background: #e0e0e0;
        }

        .select-field select {
          padding: 10px 32px 10px 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          color: #222;
          background: #fff
            url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6'><path d='M0 0l5 6 5-6z' fill='%23666'/></svg>")
            no-repeat right 12px center;
          appearance: none;
          -webkit-appearance: none;
          font-size: 14px;
          min-width: 150px;
          cursor: pointer;
        }
        .select-field select:focus {
          outline: none;
          border-color: #1a1a1a;
        }

        .clear-filters-btn {
          padding: 9px 14px;
          font-size: 14px;
          border: 1px solid #ddd;
          border-radius: 6px;
          background: #f5f5f5;
          color: #000;
          cursor: pointer;
          white-space: nowrap;
        }
        .clear-filters-btn:hover {
          background: #e8e8e8;
        }

        @media (max-width: 640px) {
          .controls {
            flex-direction: column;
            align-items: stretch;
          }
          .search-field,
          .select-field,
          .select-field select {
            width: 100%;
          }
        }

        .filter-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 10px;
        }
        .filter-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 10px;
          border-radius: 999px;
          background: #f2f2f2;
          font-size: 13px;
          color: #333;
        }
        .filter-chip button {
          border: none;
          background: none;
          font-size: 14px;
          line-height: 1;
          cursor: pointer;
          color: #666;
        }

        .results-count {
          margin: 14px 0 6px;
          font-size: 13px;
          color: #666;
        }

        .no-results {
          padding: 48px 0;
          text-align: center;
          color: #666;
        }
        .no-results .btn-secondary {
          margin-top: 12px;
        }

        .product-container {
          width: 100%;
          margin: 0 auto;
        }

        .product-card__media {
          position: relative;
        }
        .badge {
          position: absolute;
          top: 8px;
          left: 8px;
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        .badge--sale {
          background: #1a1a1a;
          color: #fff;
        }
        .badge--oos {
          left: auto;
          right: 8px;
          background: #fff;
          color: #b3261e;
          border: 1px solid #b3261e;
        }
        .product-card--oos {
          opacity: 0.6;
        }
        .product-card__was {
          margin-left: 8px;
          color: #999;
          text-decoration: line-through;
          font-weight: 400;
          font-size: 0.85em;
        }
        .product-card__low-stock {
          color: #b3261e;
          font-size: 12px;
          margin-top: 2px;
        }

        .pagination-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          flex-wrap: wrap;
          margin: 2rem 0;
        }
        .pagination-controls button {
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          background: #fff;
          cursor: pointer;
          font-size: 14px;
        }
        .pagination-controls button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .pagination-page--active {
          background: #1a1a1a;
          color: #fff;
          border-color: #1a1a1a;
        }
        .pagination-ellipsis {
          padding: 0 4px;
          color: #999;
        }

        hr {
          border: none;
          height: 1px;
          background: #e0e0e0;
          margin: 1.5rem 0;
        }
      `}</style>
    </>
  );
};

export default ProductsPage;
