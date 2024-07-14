import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Head/Header";
import ProductCard from "../components/Products/ProductCard";
import styles from "../sass/components/ShopPage.module.scss";
import { getProducts } from "./api/products/index";

const ShopPage = ({ products }) => {
  return (
    <>
      <Head>
        <title>Shop | Coast Republic</title>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@coastrepublicgh" />
        <meta name="twitter:creator" content="@coastrepublicgh" />
        <meta name="twitter:title" content="Clothing Store" />
        <meta name="twitter:description" content="We sell thrifts " />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/hjRpfKgJ/crlogo-1.png"
        />
        <meta property="og:title" content="Clothing Store" />
        <meta property="og:description" content="We sell tshirts and shoes" />
        <meta property="og:url" content="https://coast-republic.vercel.app/" />
        <meta
          property="og:image"
          content="https://i.postimg.cc/hjRpfKgJ/crlogo-1.png"
        />
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
          <h4 className={styles.text}>Whats new </h4>
          <br />
          <p className={styles.text}>
            Tens of COAST REPUBLIC&apos;s latest arrivals and drops all in one
            place
          </p>
          <br />
          <br />
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
