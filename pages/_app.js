import "/sass/main.scss";
config.autoAddCss = false;
import { Provider } from 'react-redux';
import { store } from '../store';
import { CartProvider } from '../context/cartContext';


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