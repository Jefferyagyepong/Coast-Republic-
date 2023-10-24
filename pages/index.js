import Head from "next/head";
import { Inter } from "next/font/google";
import Integrity from "../components/Products/Integrity";
import Show from "../components/Products/Show";
import Thrifts from "../components/Products/Thrifts";
import New from "../components/Products/New";
import Header from "../components/Head/Header";
import Footer from "../components/Footer/Footer";
import Sale from "../components/Products/Sale";
import CategoryCard from "../components/Products/ CategoryCard";
import styles from "../sass/components/ShopPage.module.css";
import { getProducts } from "./api/products/index";

const inter = Inter({ subsets: ["latin"] });

const Home = ({ products }) => {
  return (
    <>
      <Head>
        <title>Coast Republic | T-shirts and more</title>
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta property="og:title" content="Coast Republic store." />
        <meta property="og:type" content="E-commerce website application" />
        <meta
          property="og:description"
          content="Coast Republic store. We sell t-shirts and hoodies"
        />
        <meta property="og:url" content="https://coast-republic.vercel.app" />
        <meta property="og:image" content="/crlogo2.png" />

        <meta name="description" content="Coast Republic  Store" />
        <meta
          name="keywords"
          content=" e-commerce, T-sirts , Ghana, Quality T-shirts, Clothing, Affordable clothing, crew neck, T-shirt print, store"
        />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="author" content="Coast Republic Inc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="HIhs3rvT7a6WD274_Txl6lfu3opycY_McRAFvT2-oBw"
        />
      </Head>
      <main>
        <Header />
        <Sale />
        <Thrifts />
        <New />
        <Show />
        <Integrity />

        <div className={styles.container}>
          <div className={styles.cards}>
            {products.map(product => (
              <CategoryCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};
export default Home;

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}
