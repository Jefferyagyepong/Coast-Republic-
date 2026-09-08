import { useState, useMemo, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "@/components/Head/Header";
import FootBottom from "@/components/Footer/FootBottom";
import { getAllProducts } from "@/lib/products";
import Newsletter from "@/components/Footer/Newsletter";
import CoastApp from "@/components/Parts/CoastApp";

export async function getStaticProps() {
  const products = await getAllProducts();

  return {
    props: {
      products,
    },
    revalidate: 60, // refresh every 60 seconds
  };
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

  // ---- Read filters from the URL once the router is ready
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

  // ---- Debounce the text input
  useEffect(() => {
    const id = setTimeout(() => {
      setSearch(searchInput);
      setCurrentPage(1);
    }, SEARCH_DEBOUNCE_MS);
    return () => clearTimeout(id);
  }, [searchInput]);

  // ---- Keep the URL in sync with the current view
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

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  );
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const rangeStart = filteredProducts.length === 0 ? 0 : startIndex + 1;
  const rangeEnd = Math.min(
    startIndex + ITEMS_PER_PAGE,
    filteredProducts.length
  );

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
        <title>Shop All Products | Coast Republic</title>
        <meta
          name="description"
          content="Shop the full Coast Republic collection — t-shirts, jeans, caps, shoes and more. Filter, search, and sort to find your next favorite piece."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.coastrepublic.com/products" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shop All Products | Coast Republic" />
        <meta
          property="og:description"
          content="Shop the full Coast Republic collection — t-shirts, jeans, caps, shoes and more."
        />
        <meta property="og:url" content="https://www.coastrepublic.com/products" />
        <meta property="og:site_name" content="Coast Republic" />
        <meta
          property="og:image"
          content="https://www.coastrepublic.com/og-products.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shop All Products | Coast Republic" />
        <meta
          name="twitter:description"
          content="Shop the full Coast Republic collection — t-shirts, jeans, caps, shoes and more."
        />
        <meta
          name="twitter:image"
          content="https://www.coastrepublic.com/og-products.jpg"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
      </Head>

      <Header />
      <div className="main-content">
        <div className="custom-container">
          <div className="container-center">
            <h5>Shop All</h5>

            {/* Filter bar */}
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
                <select
                  onChange={handleSortChange}
                  value={sort}
                  aria-label="Sort products"
                >
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
                    <button
                      type="button"
                      onClick={handleClearSearch}
                      aria-label="Remove search filter"
                    >
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
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={handleClearFilters}
                >
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
                      className={`product-card${
                        outOfStock ? " product-card--oos" : ""
                      }`}
                    >
                      <div className="product-card__media">
                        {product.images?.[0] && (
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            width={300}
                            height={300}
                          />
                        )}
                      </div>

                      <div className="product-card__info">
                        <p className="product-card__name">{product.name}</p>
                        <p className="product-card__price">
                          {formatMoney(product.price, product.currency)}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination">
                <button
                  type="button"
                  onClick={() => goToPage(safePage - 1)}
                  disabled={safePage === 1}
                >
                  Previous
                </button>

                {getPageWindow(safePage, totalPages).map((p, i) =>
                  p === "…" ? (
                    <span key={`ellipsis-${i}`} className="pagination__ellipsis">
                      …
                    </span>
                  ) : (
                    <button
                      key={p}
                      type="button"
                      className={
                        p === safePage
                          ? "pagination__btn pagination__btn--active"
                          : "pagination__btn"
                      }
                      onClick={() => goToPage(p)}
                    >
                      {p}
                    </button>
                  )
                )}

                <button
                  type="button"
                  onClick={() => goToPage(safePage + 1)}
                  disabled={safePage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <CoastApp />
      <Newsletter />
      <FootBottom />
    </>
  );
};

export default ProductsPage;