/* eslint-disable react/react-in-jsx-scope */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <script>"https://js.paystack.co/v1/inline.js"</script>
      </Head>
       
        
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
