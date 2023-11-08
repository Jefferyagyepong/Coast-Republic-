import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Head/Header";
import ProductCard from "../components/Products/ProductCard";
import styles from "../sass/components/ShopPage.module.css";
import { getProducts } from "./api/products/index";

const ShopPage = ({ products }) => {
  return (
    <>
      <Head>
        <title>Shop | Coast Republic</title>
        <link rel="apple-touch-icon" href="" />
        <meta property="og:title" content="Home | Coast Republic" />
        <meta property="og:type" content="" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />

        <meta name="description" content="Coast Republic  Store" />
        <meta
          name="keywords"
          content=" e-commerce, T-sirts , Ghana, Quality T-shirts, Clothing, Affordable clothing, crew neck, T-shirt print, store"
        />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="author" content="Jeffery Agyepong" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <div className={styles.container}>
          <h4 className={styles.title}>Whats new </h4>
          <p className={styles.para}>Tens of COAST REPUBLIC&apos;s latest arrivals and drops all in one place</p>
          <hr className="full-width" />
          <div className={styles.cards}>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
       

        <Footer />
      </main>
    </>
  );
};

export default ShopPage;

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}
