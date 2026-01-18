"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Head/Header";
import Faq from "@/components/Footer/Faq";
import ItemsLike from "@/components/Parts/ItemsLike";
import { useCart } from "@/context/CartContext";
import path from "path";
import fs from "fs";

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "public", "data", "products.json");
  const fileContents = fs.readFileSync(filePath, "utf8");

  const products = JSON.parse(fileContents);
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "public", "data", "products.json");
  const fileContents = fs.readFileSync(filePath, "utf8");

  const products = JSON.parse(fileContents);
  const product = products.find((product) => product.slug === slug);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: { product },
  };
}

export default function ProductPage({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
        < div   className="main-content">
      <Head>
        <title>{product.name} | Coast Republic</title>
        <meta name="description" content={product.description} />
      </Head>
  
      <Header />
      <div className="product-detail">
        <div className="product-image">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
          />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>
          <button onClick={handleAddToCart} className="add-to-cart">
            Add to Cart
          </button>
        </div>
      </div>
      <ItemsLike />
      <Faq />
      </div>
    </>
  );
}