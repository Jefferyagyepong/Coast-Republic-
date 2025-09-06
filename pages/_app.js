import "/sass/main.scss";
import { CartProvider } from "../context/CartContext";
import SlugPage from "./products/[slug]";
import Cart from "@/cart/Cart";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
   <SlugPage />
      <Cart />
    </CartProvider>
  );
}
