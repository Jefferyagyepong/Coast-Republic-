
import Head from "next/head";
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import Thrifts from "../components/Products/Thrifts";
import New from "../components/Products/New";
import Header from "../components/Head/Header";
import Footer from "../components/Footer/Footer";
import Sale from "../components/Products/Sale";
import Newsletter from "@/components/Footer/Newsletter";
import CoastApp from "@/components/Products/CoastApp";
import Brands from "@/components/Footer/Brands";
import Collection from "@/components/Products/Collection";
import Nav from "@/components/Head/Nav";
import Toast from "../components/Head/Toast";

export async function getStaticProps() {
  // Read the products JSON file from the public directory
  const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Parse the file content into a JavaScript object
  const products = JSON.parse(fileContents);

  return {
    props: { products }, // Pass products data to the page component
  };
}

const Home = ({ products }) => {   
     //const images = [
    //'https://images.unsplash.com/photo-1508507031248-e96f9cd82522?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //'https://images.unsplash.com/photo-1622445272461-c6580cab8755?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   // 'https://images.unsplash.com/photo-1704949841973-9db544ac35ec?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
 // ];
  return (
    <>
      <Head>
        <title>Coast Republic | T-shirts and more</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@coastrepublicgh" />
        <meta name="twitter:creator" content="@coastrepublicgh" />
        <meta name="twitter:title" content="Coast Republic inc" />
        <meta name="twitter:description" content="T-shirts, Sneakers & more.... "/>
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1622445272461-c6580cab8755?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <meta property="og:title" content="Coast Republic inc" />
        <meta property="og:description" content="T-shirts, Sneakers & more.... " />
        <meta property="og:url" content="https://coast-republic.vercel.app/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1622445272461-c6580cab8755?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
       <link rel="apple-touch-icon" href="/favicon.ico" />

        <meta name="description" content="Coast Republic  Store" />
        <meta name="keywords" content=" e-commerce, T-sirts , Ghana, Quality T-shirts, Clothing, Affordable clothing, crew neck, T-shirt print, store"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="author" content="Coast Republic Inc" />
        <meta  name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/" />
        <meta name="google-site-verification" content="HIhs3rvT7a6WD274_Txl6lfu3opycY_McRAFvT2-oBw"/>
      </Head>
      <main>
        <div className="sticky">
          <Toast />
          <Header />
        </div>
        <Nav />
        <Sale /> 
        <Thrifts />
        <New />
        <CoastApp />
        <hr />
        <Collection />
          <div className= "product-card">
        {products.map((product) => (              
          <span key={product.slug}>
          <Link href={`/products/${product.slug}`}>
          <Image
          src={product.image}
          height={100}
          width={90}
         alt=" product"
       
        />
          <h4>{product.name}</h4><br/>
      
            </Link>
            </span>
  
          
        ))}
      </div>
        
        <Newsletter />
        <Brands />
        <Footer />
      </main>
   </>
 );
};
export default Home;




 //images={images} interval={3000}
 


