/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
import Head from "next/head";
import Thrifts from "@/components/Parts/Thrifts";
import Header from "@/components/Head/Header";
import Footer from "@/components/Footer/Footer";

import Newsletter from "@/components/Footer/Newsletter";
import Collection from "@/components/Parts/Collection";

import Jeans from "@/components/Parts/Jeans";
import Sale from "@/components/Parts/Sale";






const Home = () => {
  const calvinKleinImages = [
    "/IMG_5438.webp",
    "/IMG_5482.webp",
    "/IMG_5452.webp",
    "/IMG_5459.webp",
    "/IMG_5422.webp",
      "/IMG_5433.webp",
        "/IMG_5443.webp",
          "/IMG_5436.webp",
            "GYAMFUA.svg",
    
 
    // Replace with real Calvin Klein / Walmart product image URLs
  ];


  return (
    <>
  <Head>
  <title>Coast Republic | Clothing & Shoes</title>
  <meta
    name="description"
    content="Coast Republic — Ghana's home for quality T-shirts, sneakers, jeans, and street-ready essentials. Shop the latest collection with fast nationwide delivery."
  />
  <meta name="keywords" content="ecommerce, t-shirts, Ghana, quality clothing, sneakers, jeans, crew neck, streetwear" />
  <meta name="author" content="Coast Republic Inc" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />
  <link rel="canonical" href="https://coast-republic.vercel.app/" />
  <link rel="icon" href="/coast.ico" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <meta name="google-site-verification" content="HIhs3rvT7a6WD274_Txl6lfu3opycY_McRAFvT2-oBw" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Coast Republic | Clothing & Shoes" />
  <meta
    property="og:description"
    content="Ghana's home for quality T-shirts, sneakers, jeans, and street-ready essentials."
  />
  <meta property="og:url" content="https://coast-republic.vercel.app/" />
  <meta property="og:site_name" content="Coast Republic" />
  <meta property="og:image" content="https://coast-republic.vercel.app/og-home.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
</Head>
  {/* Twitter */}
  

      <Header />
      <div className="main-content">
        <Thrifts />
        <Jeans />
        <div className="custom-container">
        
            <h5>
              Discover what just dropped
            </h5><br />
               </div>
              <div className="container-center">

            <Sale images={calvinKleinImages} autoPlayInterval={3500} />
       
        </div>
             <div className="custom-container">
        <h5>Crew Neck T shirts</h5>
          </div>
                        <Collection />
        <Newsletter />
        <Footer />
      </div>

    </>
  );
};
export default Home;