import "/sass/main.scss";
import { CartProvider } from "../context/CartContext";
import ProdPage from "@/components/Products/ProductPage";
import Cart from "@/cart/Cart";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
      <ProdPage />
      <Cart />
    </CartProvider>
  );
}
