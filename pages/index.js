/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
import Head from "next/head";
import Thrifts from "@/components/Parts/Thrifts";
import New from "@/components/Parts/New";
import Header from "@/components/Head/Header";
import Footer from "@/components/Footer/Footer";

import Newsletter from "@/components/Footer/Newsletter";
import Collection from "@/components/Parts/Collection";

import Jeans from "@/components/Parts/Jeans";






const Home = () => {
   const calvinKleinImages = [
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=1200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&auto=format&fit=crop&q=80",
    // Replace with real Calvin Klein / Walmart product image URLs
  ];

 
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
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1622445272461-c6580cab8755?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
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
        <link rel="icon" href="/coast.ico" />
        <meta
          name="google-site-verification"
          content="HIhs3rvT7a6WD274_Txl6lfu3opycY_McRAFvT2-oBw"
        />
      </Head>
      

      <Header />
      <div  className="main-content">
        <Thrifts />
        <Jeans />
         <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
          Calvin Klein Collection
        </h1>

        <AutoImageSlider images={calvinKleinImages} autoPlayInterval={3500} />
      </div>
    </div>
       
        <New />

        <Collection />
        <Newsletter />
        <Footer/>
        </div>
  
    </>
  );
};
export default Home;
