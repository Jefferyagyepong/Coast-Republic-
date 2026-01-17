/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState } from "react";
import Header from "@/components/Head/Header";
import Footer from "@/components/Footer/Footer";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import Head from "next/head";
import Newsletter from "@/components/Footer/Newsletter";


import ProductNav from "@/components/Parts/ProductNav";


export async function getStaticProps() {
  // Read the products JSON file from the public directory
  const filePath = path.join(process.cwd(), "public", "data", "products.json");
  const fileContents = fs.readFileSync(filePath, "utf8");

  // Parse the file content into a JavaScript object
  const products = JSON.parse(fileContents);

  return {
    props: { products }, // Pass products data to the page component
  };
}


const ProductList = ({ products }) => {
  
  
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("name-asc");

  // Get unique categories for filter dropdown
  const categories = [
    "All",
    ...new Set(products.map(product => product.category)),
  ];

  // Filter and sort products
  const filteredProducts = products
    .filter(product => filter === "All" || product.category === filter)
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "name-asc") return a.name.localeCompare(b.name);
      if (sort === "name-desc") return b.name.localeCompare(a.name);
      return 0;
    });
    
      const [page, setPage] = useState(1);   // ← this line was missing
  const totalPages = 42;  
    

  return (
    <>
      <Head>
        <title>Coast Republic | Our collection </title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@coastrepublicgh" />
        <meta name="twitter:creator" content="@coastrepublicgh" />
        <meta name="twitter:title" content="Coast Republic inc" />
        <meta
          name="twitter:description"
          content="T-shirts, Sneakers & more.... "
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1622445272461-c6580cab8755?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
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
        <link rel="apple-touch-icon" href="/coast.ico" />

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
    
    
          <Header />
        
        <div className="main-content">
     
          <h2>
            Featured Products
          </h2>
          <hr />
          <ProductNav />
          
<hr />
        <div className="controls">
          <label>
            Filter:
            <select
              onChange={e => setFilter(e.target.value)}
              value={filter}
              className="background-bg"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <label>
            Sort:
            <select
              onChange={e => setSort(e.target.value)}
              value={sort}
              className="background-bg"
            >
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
            </select>
          </label>
        </div>
<hr />
        <div className="product-container">
          {filteredProducts.map(product => (

            <div className="card" key={product.slug}>

              <div className="image-container">
                <Image
                  src={product.image}
                  fill
                  className="group image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={product.name}
                />
              </div>

              <div className="p-5">
                  <span className="price"> <sup><h6>GHS</h6></sup>{product.price.toFixed(2)}</span>
              
              </div>
              
              <div className="price-container">
                <h3>{product.description}</h3>
                <Link href={`/products/${product.slug}`}>
                  <button className="button">View Details</button>
                </Link>
                
              </div>
              <hr/>
                     </div>

              ))}

            </div>          
  
        <Newsletter />
        <Footer />
        </div>
    

      <style jsx global>{`
    
        .controls {
          display: flex;
          gap: 20px;
          padding-top:20px;
          padding-bottom:20px;
    
  
        }
        .controls label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
        }
        .controls select {
          padding: 8px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 4px;
          color:#000;
        }
          .product-container{ 
          width:100%;
          backgorund: red;
    
          margin: 0 auto;
          }

 
          }
          .viewButton{
    
          padding: 8px 15px:
          }
          hr{
       border: none;
  height: 1px;
  background: #e0e0e0;
  margin: 1.5rem 
          }
    
      `}</style>
    </>
  );
};

export default ProductList;