

import "/sass/main.scss";
<<<<<<< HEAD
=======
import { CartProvider } from "../context/CartContext";

>>>>>>> 8853806281a0784b8a14fc28f4507d4811bc784b

import { CartProvider } from "../context/CartContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}