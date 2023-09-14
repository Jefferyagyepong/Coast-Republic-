
import '/sass/main.scss'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import store from '../redux/store';  
  import { Provider } from 'react-redux'; 







export default function App({ Component, pageProps }) {

  return <Provider store={store}>
    
  <Component {...pageProps} />
  </Provider>
}

