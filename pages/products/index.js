import Header from "@/components/Head/Header";
import Footer from "@/components/Footer/Footer";
import Toast from "@/components/Head/Toast";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import Head from "next/head";
import Newsletter from "@/components/Footer/Newsletter";

import BackTo from "@/components/Products/BackTo";

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

  const [data, setData] = useState(products);
  const [filterCategory, setFilterCategory] = useState('');
  const [sortOrder, setSortOrder] = useState(''); // 'lowToHigh' or empty

  // Handle filtering by category
  const handleFilter = (e) => {
    const category = e.target.value.toLowerCase();
    setFilterCategory(category);
    let filteredProducts = data;

    if (category) {
      filteredProducts = data.filter((product) =>
        product.category.toLowerCase().includes(category)
      );
    }

    // Apply sorting after filtering
    if (sortOrder === 'lowToHigh') {
      filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    }

    setProducts(filteredProducts);
  };

  // Handle sorting by price (low to high)
  const handleSort = () => {
    const sortedProducts = [...data].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
    setSortOrder('lowToHigh');
  };
const ProductList = ({ products }) => {

  
  return (
    <>
      <Head>
        <title>Shop our products. </title>
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
        <div className="product-container">
          <h4>Shop Tees</h4>
                <div className="filter">
        <label htmlFor="category">Filter by Category: </label>
        <input
          type="text"
          id="category"
          value={filterCategory}
          onChange={handleFilter}
          placeholder="e.g., T-shirts, Sneakers"
        />
      </div>

      {/* Sort Button */}
      <button onClick={handleSort}>Sort by Price: Low to High</button>
          
          <ul className="product-card">
            {products.length > 0 ? (
            {products.map(product => (
              <li key={product.slug}>
                
                 <Image
                    src={product.image}
                    height={150}
                    width={210}
                    alt=" product"
                  />
                
                <Link href={`/products/${product.slug}`}>
           
                  <h5>{product.name}</h5>
                  <p>{product.description}</p>
                  <p>{product.description}</p>
                  <h3> GH₵ { product.price.toFixed(2)}</h3>
                  
                </Link>
              </li>
            ))
           ):(
         <p> No products found</p>
            )}
          </ul>
        </div>                   
        <BackTo />                              
        <Newsletter />
        <Footer />
      </main>
    </>
  );
};

export default ProductList;
