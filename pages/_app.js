/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import  "../sass/main.scss";


import React from "react";
import Header from "@/components/Head/Navbar";

// pages/_app.js

import { CartProvider } from '@/context/CartContext';

import Header from '@/components/layout/Header';     // ← your header with cart icon

// import Footer from '@/components/layout/Footer'; // ← optional

import '../styles/globals.css';                      // ← your global styles (tailwind, etc.)

function MyApp({ Component, pageProps }) {

  return (
<CartProvider>
<div className="min-h-screen flex flex-col antialiased">
<Header />
<main className="flex-grow">
<Component {...pageProps} />
</main>

        {/* <Footer /> ← uncomment if you have a footer */}
</div>
</CartProvider>

  );

}

export default MyApp;
 