import "/sass/main.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

<<<<<<< HEAD
import { CartProvider } from "@/context/CartContext";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
=======
import store from "../redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
>>>>>>> 0e36f048fa4763fea18f3576d321091242c36645
      <Component {...pageProps} />
    </Provider>
  );
}
<<<<<<< HEAD

export default MyApp;
=======
>>>>>>> 0e36f048fa4763fea18f3576d321091242c36645
