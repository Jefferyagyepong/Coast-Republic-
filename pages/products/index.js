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

      




