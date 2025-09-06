import "/sass/main.scss";
<<<<<<< HEAD
import { CartProvider } from "../context/CartContext";
=======
import { CartProvider } from "./context/CartContext";
>>>>>>> c3ed66749d08c68bf268d195df8159c31767cf64


export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
