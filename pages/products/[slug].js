/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
"use client";


import { useState, useEffect } from 'react';
import Header from "@/components/Head/Header";

import ItemsLike from "@/components/Parts/ItemsLike";
import Head from "next/head";
import Faq from "@/components/Footer/Faq";
import React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
// This function generates the paths for each product based on the slugs.
export async function getStaticPaths() {
  // Read the products JSON file from the public directory
  const filePath = path.join(process.cwd(), "public", "data", "products.json");
  const fileContents = fs.readFileSync(filePath, "utf8");

  // Parse the file content into a JavaScript object
  const products = JSON.parse(fileContents);

  // Generate the paths for each product by slug
  const paths = products.map(product => ({
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
  const filePath = path.join(process.cwd(), "public", "data", "products.json");
  const fileContents = fs.readFileSync(filePath, "utf8");

  // Parse the file content into a JavaScript object
  const products = JSON.parse(fileContents);

  // Find the product by slug
  const product = products.find(product => product.slug === slug);

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
   const { addToCart } = useCart();
  
  
  
  
    const [current, setCurrent] = useState(0)
  const [touchStartX, setTouchStartX] = useState(null)

  if (!products?.length) {
    return (
      <div className="aspect-square w-full bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
        No images available
      </div>
    )
  }

  const goTo = (index) => {
    setCurrent(Math.max(0, Math.min(index, images.length - 1)))
  }

  const next = () => goTo(current + 1)
  const prev = () => goTo(current - 1)

  // Swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return
    const diff = touchStartX - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) next()
      else prev()
    }
    setTouchStartX(null)
  }

  // Keyboard arrows
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [current])

  return (
    <>
      <Head>
        <title>Coast Republic | Product details</title>
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

        <div className="slug-container">
          <div class="slider">
            <Link href="#slide-1">1</Link>
            <Link href="#slide-2">2</Link>
            <Link href="#slide-3">3</Link>
            <Link href="#slide-4">4</Link>
            <Link href="#slide-5">5</Link>

            <div class="slides">
              <div id="slide-1">
                <Image
                  src={product.image}
                  height={400}
                  width={400}
                  alt=" product"
                />
              </div>
              <div id="slide-2">
                <Image
                  src={product.image}
                  height={400}
                  width={400}
                  alt=" product"
                />
              </div>
              <div id="slide-3">
                <Image
                  src={product.image}
                  height={400}
                  width={400}
                  alt=" product"
                />
              </div>
              <div id="slide-4">
                <Image
                  src={product.image}
                  height={400}
                  width={400}
                  alt=" product"
                />
              </div>
              <div id="slide-5">
                <Image
                  src={product.image}
                  height={400}
                  width={400}
                  alt=" product"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="slug-content-text">
          <h4>Name: {product.name}</h4>
          <p>Description:{product.description}</p>
          <p>{product.description}</p>
          <p>{product.description}</p>
          <p>{product.description}</p>
          <p>Price: GH₵ {product.price}</p>
        </div>
        
        
        
        
        <div className={`w-full ${className}`}>
      {/* Main image */}
      <div
        className="relative aspect-square overflow-hidden rounded-xl bg-gray-50 shadow-sm"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={product[current].image}
          alt={images[current].alt}
          fill
          priority={priority && current === 0}
          quality={82}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
          className="object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-md transition hover:scale-110"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-md transition hover:scale-110"
              aria-label="Next image"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-4">
          <div className="flex gap-2.5 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {products.map((img, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`
                  flex-shrink-0 w-20 sm:w-24 aspect-square rounded-lg overflow-hidden border-2 transition-all snap-start
                  ${idx === current
                    ? 'border-blue-600 scale-105 shadow-md'
                    : 'border-transparent hover:border-gray-300 opacity-80 hover:opacity-100'}
                `}
                aria-label={`Image ${idx + 1}`}
                aria-current={idx === current ? 'true' : 'false'}
              >
                <Image
                  src={product.image}
                  alt={img.alt}
                  fill
                  sizes="96px"
                  className="object-cover"
                  quality={75}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
        
        
        
        <Faq />

        <ItemsLike />
    
        <div>
          <button
          
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
     </div>
    </>
  );
};

export default ProductPage;
