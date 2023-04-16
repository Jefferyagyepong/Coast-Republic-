
import '../styles/_Header.css'
import '../styles/globals.css'
import '../styles/responsive.css'
import '../styles/_Burger.css'
import '../styles/_Show.css'
import '../styles/_Integrity.css'
import '../styles/_Product.css'
import '../styles/_Text.css'
import '../styles/_Top.scss'
import '../styles/_Collection.scss'
import '../styles/_Footer.css'
import '../styles/_Delivery.css'
import '../styles/_Contact.css'
import store from '../redux/store';  
  import { Provider } from 'react-redux'; 







export default function App({ Component, pageProps }) {

  return <Provider store={store}>
    
  <Component {...pageProps} />
  </Provider>
}

