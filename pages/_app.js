/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import "@/sass/main.scss"; // adjust to match your actual global stylesheet import
import { CartProvider } from "@/context/CartContext";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
