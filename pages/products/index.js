import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Head/Header";
import Footer from "@/components/Footer/Footer";
import { getAllProducts } from "@/lib/products";

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

      <Footer />
    </>
  );
};

export default ProductsPage;

      




