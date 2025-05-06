import "/sass/main.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Provider } from 'react-redux';
import { store } from '../redux';
import { CartProvider } from '../context/CartContext';


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </Provider>
  );
}

export default MyApp;