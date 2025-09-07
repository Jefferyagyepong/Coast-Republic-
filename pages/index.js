/* eslint-disable react/react-in-jsx-scope */
import Head from "next/head";
import Thrifts from "@/components/Parts/Thrifts";
import New from "@/components/Parts/New";
import Header from "@/components/Head/Header";
import Footer from "@/components/Footer/Footer";
import Sale from "@/components/Parts/Sale";
import Newsletter from "@/components/Footer/Newsletter";
import Collection from "@/components/Parts/Collection";
import Toast from "@/components/Head/Toast";
import Jeans from "@/components/Parts/Jeans";



import Carousel from "@/components/Parts/Carousel";

const images = [
  "/GYAMFUA.svg",

  "/products/force1b.JPG",
  "/airjordan.svg",
  "/gyamfua black OLIVE.svg",
  "/wrangler.svg",
];

const Home = () => {
  return (
    <>
      <Head>
        <title>Coast Republic | Clothing & Shoes</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@coastrepublicgh" />
        <meta name="twitter:creator" content="@coastrepublicgh" />
        <meta name="twitter:title" content="Coast Republic inc" />
        <meta
          name="twitter:description"
          content=" Discover unique designs crafted for you..... "
        />
        <meta name="twitter:image" content="/backg.png" />
        <meta property="og:title" content="Coast Republic inc" />
        <meta
          property="og:description"
          content="T-shirts, Sneakers & more.... "
        />
        <meta property="og:url" content="https://coast-republic.vercel.app/" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1622445272461-c6580cab8755?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        <meta name="description" content="Coast Republic  Store" />
        <meta
          name="keywords"
          content=" e-commerce, T-sirts , Ghana, Quality T-shirts, Clothing, Affordable clothing, crew neck, T-shirt print, store"
        />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="author" content="Coast Republic Inc" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="/" />
        <meta
          name="google-site-verification"
          content="HIhs3rvT7a6WD274_Txl6lfu3opycY_McRAFvT2-oBw"
        />
      </Head>
      <main>
        <div className="sticky">
          <Toast />
          <Header />
        </div>
        <Sale />
        <Thrifts />
        <Jeans />
        <Carousel images={images} />
        <New />

        <Collection />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
};
export default Home;
