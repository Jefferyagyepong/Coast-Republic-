import "/sass/main.scss";
config.autoAddCss = false;
import { Provider } from 'react-redux';
import { store } from '../store';


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;