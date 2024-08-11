import Head from "next/head";
import Header from "../components/Head/Header";
import ProductCard from "../components/Products/ProductCard";
import styles from "../sass/components/ShopPage.module.scss";
import { getProducts } from "./api/products/index";
import Newsletter from "@/components/Footer/Newsletter";
import FootBottom from "@/components/Footer/FootBottom";
import Nav from "@/components/Head/Nav";

const ShopPage = ({ products }) => {
  return (
    <>
      <Head>
        <title>Shop | Coast Republic</title>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@coastrepublicgh" />
        <meta name="twitter:creator" content="@coastrepublicgh" />
        <meta name="twitter:title" content="Coast Republic inc" />
        <meta name="twitter:description" content="T-shirt, shoes and more..." />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/hjRpfKgJ/crlogo-1.png"
        />
        <meta property="og:title" content="Coast Republic inc" />
        <meta property="og:description" content="T-shirt, shoes and more..." />
        <meta
          property="og:url"
          content="https://coast-republic.vercel.app/shop"
        />
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
        <meta name="viewport" content="width=device-width,     initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover" />
        <link rel="icon" href="" />
      </Head>

      <main>
        <Header />
        <Nav/>

        <div className={styles.container}>
          <h3>Whats new </h3>
          
          <p>
            Tens of COAST REPUBLIC&apos;s latest arrivals and drops all in one
            place
          </p>
          
          <hr className="full-width" />
          <div className={styles.cards}>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

 
        <FootBottom/>
      </main>
    </>
  );
};

export default ShopPage;

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}
