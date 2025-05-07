import Link from "next/link";
import { useCart } from '../context/CartContext';
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Head/Header";
import Toast from "@/components/Head/Toast";

const products = [
{
    "_id": 1,
    "slug": "Air Force 1 07 black",
    "name": "Air Force 1 07 black",       
    "image": "/products/force1c.JPG",
    "category": "Sneaker",
    "description": "Lorem ipsum dalot gunt Dreh",
    "price": 1109.99

  },
  {
    "_id": 2,
    "slug": "Reebok classics",
    "name": "Reebok classics",     
    "image": "/products/reebook1c.JPG",
    "category": "Sneaker",
    "description": "Lorem ipsum dalot gunt Dreh",
    "price": 1109.99

  },
  {
    "_id": 3,
    "slug": "Air Force 1 07 high black",
    "name": "Air Force 1 07 high black",
    "image": "/products/force3a.JPG",
     "category": "Sneaker",
    "description": "Lorem ipsum dalot gunt Dreh",
    "price": 1130.00

  },
  {
    "_id": 4,
    "slug": " Adidas Campus",
    "name": " Adidas Campus",
    "image": "/products/campus1a.JPG",
    "category": "Sneaker",
    "description": "Lorem ipsum dalot gunt Dreh",
    "price": 1185.00
 
  },
  {
    "_id": 5,
    "slug": "Converse Chuck Taylor",
    "name": "Converse Chuck Taylor",
    "image": "/products/chuck1a.JPG",
    "category": "Sneaker",
    "description": "Lorem ipsum dalot gunt Dreh",
    "price": 750.00

  },
  {
    "_id": 6,
    "slug": "Timberland Boots",
    "name": "Timberland Boots",
    "image": "/products/tims1a.JPG",
    "category": "Sneaker",
    "description": "Lorem ipsum dalot gunt Dreh",
    "price": 375.00

  },
  {
    "_id": 7,
    "slug": "Vans Ski Low",
    "name": "Vans Ski Low",
    "image": "/products/vans1a.WEBP",
    "category": "Sneaker",
    "description": "Lorem ipsum dalot gunt Dreh",
    "price": 700.00

  },
  {
    "_id": 8,
    "slug": "Reebok",
    "name": "Reebok",
    "image": "/products/reebook1b.WEBP",
    "category": "Sneaker",
    "description": "Lorem ipsum dalot gunt Dreh",
    "price": 600.00

  };
]



const CartPage = () => {

  const { cartItems, addItem, removeItem } = useCart();

  return (
    <>
      <Head>
        <title>Cart </title>
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta property="og:title" content="Coast Republic store." />
        <meta property="og:type" content="E-commerce website application" />
        <meta
          property="og:description"
          content="Coast Republic store. We sell t-shirts and hoodies"
        />
        <meta property="og:url" content="https://coast-republic.vercel.app" />
        <meta property="og:image" content="/crlogo2.png" />

        <meta name="description" content="Coast Republic  Store" />
        <meta
          name="keywords"
          content=" e-commerce, T-sirts , Ghana, Quality T-shirts, Clothing, Affordable clothing, crew neck, T-shirt print, store"
        />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="author" content="Coast Republic Inc" />
        <meta
          name="viewport"
          content="width=device-width,    initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="" />
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
    <div>
      <h1>Shopping Cart</h1>
      <button
        onClick={() => addItem(products)}
  
      >
        Add Sample Item
      </button>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} (Qty: {item.quantity})
              <button
                onClick={() => removeItem(item.id)}
             
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
      </main>
    </>
  );
};

export default CartPage;






