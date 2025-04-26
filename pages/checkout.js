import Head from "next/head";
import React, { useState } from "react";
import Header from "@/components/Head/Header";
import OrderSum from "@/components/Products/OrderSum";

import Footer from "@/components/Footer/Footer";
import PaystackPayment from "@/components/Products/PaystackPayment";

const checkout = () => {
  const email = "user@exaple.com";
  const amount = 1000;
  const reference = `ref_${new Date().getTime()}`;

//order

  const orderData = {
    items: [
      { name: 'Product 1', price: 29.99 },
      { name: 'Product 2', price: 49.99 },
    ],
    subtotal: 79.98,
    tax: 6.40,
    total: 86.38,
    };
  





  return (
    <>
      <Head>
        <title>Checkout | Coast Republic</title>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@coastrepublicgh" />
        <meta name="twitter:creator" content="@coastrepublicgh" />
        <meta name="twitter:title" content="Coast Republic inc" />
        <meta
          name="twitter:description"
          content="We deliver to all 16 regions in 🇬🇭 "
        />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/xCrTBdg7/coast.png"
        />
        <meta property="og:title" content="Coast republic" />
        <meta
          property="og:description"
          content="We deliver to all 16 regions in 🇬🇭"
        />
        <meta
          property="og:url"
          content="https://coast-republic.vercel.app/delivery"
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/xCrTBdg7/coast.png"
        />
        <meta
          name="keywords"
          content=" e-commerce, T-sirts , Ghana, Quality T-shirts, Clothing, Affordable clothing, crew neck, T-shirt print, store"
        />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="author" content="Jeffery Agyepong" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="" />
      </Head>
      <Header />
      <h3>SECURE CHECKOUT</h3>
    <OrderSum
        items={orderData.items}
        subtotal={orderData.subtotal}
        tax={orderData.tax}
        total={orderData.total}
        
      />
      <PaystackPayment email={email} amount={amount} reference={reference} />

      <Footer />
    </>
  );
};

export default checkout;







