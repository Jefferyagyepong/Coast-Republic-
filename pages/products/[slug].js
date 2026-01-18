"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Head/Header";
import Faq from "@/components/Footer/Faq";
import ItemsLike from "@/components/Parts/ItemsLike";
import { useCart } from "@/context/CartContext";

export const ProductPage = ({ product }) => {
  const { addToCart } = useCart();
  const [current, setCurrent] = useState(0);

  // Handle swipe
  const [touchStartX, setTouchStartX] = useState(null);

  const goTo = (index) => {
    setCurrent((prev) => Math.max(0, Math.min(index, product.images.length - 1)));
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  // Touch event for swiping
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    setTouchStartX(null);
  };

  // Keyboard navigate
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [current]);

  // Render not found or spinner if no product exists
  if (!product || !product.images || !product.images.length) {
    return <div>No product data or images to display</div>;
  }

  return (
    <>
      <Head>
        <title>{product.name || "Product Page"} - Coast Republic</title>
        <meta name="description" content={product.description || "Product details"} />
      </Head>
      <Header />
      <div className="main-content">
        <div className="product-container">
          {/* Main Image Slider */}
          <div
            className="slider-container relative bg-gray-100"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              src={product.images[current]}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            {product.images.length > 1 && (
              <>
                <button onClick={prev} className="absolute left-2">⟨</button>
                <button onClick={next} className="absolute right-2">⟩</button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          <div className="thumbnails my-4 flex gap-2">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                className={`w-16 h-16 rounded-md border ${
                  idx === current ? "border-blue-500" : "border-gray-300"
                }`}
                onClick={() => goTo(idx)}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx}`}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Product Info */}
          <div className="product-info text-center">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <p className="mt-2 text-lg font-semibold">Price: GH₵ {product.price}</p>
            <button
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-full"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <Faq />
        <ItemsLike />
      </div>
    </>
  );
};

export default ProductPage;