// pages/_app.js

import '../styles/globals.css';

import React from 'react';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Head/Navbar';
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