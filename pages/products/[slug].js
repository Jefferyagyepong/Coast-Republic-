import Header from "@/components/Head/Header";
import Toast from "@/components/Head/Toast";
import Newsletter from "@/components/Footer/Newsletter";
import Head from "next/head";
import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
// This function generates the paths for each product based on the slugs.
export async function getStaticPaths() {
  // Read the products JSON file from the public directory
  const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Parse the file content into a JavaScript object
  const products = JSON.parse(fileContents);

  // Generate the paths for each product by slug
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: false, // If a slug is not found, it will show a 404 page
  };
}

// This function fetches product data for each slug
export async function getStaticProps({ params }) {
  const { slug } = params;

  // Read the products JSON file from the public directory
  const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Parse the file content into a JavaScript object
  const products = JSON.parse(fileContents);

  // Find the product by slug
  const product = products.find((product) => product.slug === slug);

  // If no product is found, return a 404 page
  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product }, // Pass the product data to the page
  };
}

const ProductPage = ({ product }) => {
    const dispatch = useDispatch();
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
        </div><br/> <hr/>
    <div>
                     <Image
          src={product.image}
          height={100}
          width={90}
          alt=" product"
       
        /><br/>
      <h1>{product.name}</h1><br/>
      <p>{product.description}</p><br/>
      <p>Price: ${product.price}</p><br/>
      <Link href="/products">
        <a>Back to product list</a>
      </Link>
        <button
        onClick={() => dispatch(addToCart(product))}
        className="add-to-cart"
      >
        Add to Bag
      </button>
    </div>
    <br/> <hr/>
        <Newsletter />
    
    </main>
    </>
  );
};

export default ProductPage;















