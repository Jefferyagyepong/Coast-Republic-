import "/sass/main.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;


import { CartProvider } from "../context/cartContext";



function MyApp({ Component, pageProps }) {
  return (
     <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;

