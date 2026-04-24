// pages/_app.js

import '../styles/globals.css'; // or '../sass/main.scss' — pick one

import React from 'react';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/layout/Header';
// import Footer from '@/components/layout/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        {/* <Footer /> */}
      </div>
    </CartProvider>
  );
}

export default MyApp;