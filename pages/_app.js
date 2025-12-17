/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */


import "./sass/main.scss";

import { CartProvider } from "../context/CartContext";
import ProductList from "@/components/Product";
import Cart from "@/components/Cart";
import CartOverlay from "@/components/CartOverlay";

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
      <Cart />
      <CartOverlay />
      <ProductList />
    </CartProvider>
  );
}