/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
import Head from "next/head";
import Thrifts from "@/components/Parts/Thrifts";
import Header from "@/components/Head/Header";
import Footer from "@/components/Footer/Footer";
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
        <title>Coast Collective | Clothing & Shoes</title>
        <meta
          name="description"
          content="Coast Collective — Ghana's home for quality T-shirts, sneakers, jeans, and street-ready essentials. Shop the latest collection with fast nationwide delivery."
        />
        <meta name="keywords" content="ecommerce, t-shirts, Ghana, quality clothing, sneakers, jeans, crew neck, streetwear" />
        <meta name="author" content="Coast collective Ghana" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="google-site-verification" content="HIhs3rvT7a6WD274_Txl6lfu3opycY_McRAFvT2-oBw" />

        {/* Open Graph */}
        <link rel="canonical" href="https://www.coast-collective.com/" />
        <meta property="og:url" content="https://www.coast-collective.com/" />
       
         <meta property="og:type" content="Online store" />
        <meta property="og:title" content="Coast Collective | Shop" />
        <meta property="og:description" content="Ghana's home for quality T-shirts, sneakers, jeans, and street-ready essentials."
        />
        
     
        <meta property="og:image" content="https://www.coast-collective.com/IMG_5722.jpeg" />
        

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | Coast Collective" />
        <meta
          name="twitter:description"
          content="Ghana's home for quality T-shirts, sneakers, jeans, and street-ready essentials."
        />
        <meta name="twitter:image" content="https://www.coast-collective.com/crlogo.svg" />
      </Head>
      {/* Twitter */}


      <Header />

      <div className="main-content">


        <main>
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
        </main>


      </div>



      <Footer />

    </>
  );
};
export default Home;
