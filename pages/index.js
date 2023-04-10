import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Text from '../components/Text'
import Product from '../components/Product'
import Integrity from '../components/Integrity'
import Show from '../components/Show'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Coast Republic</title>
                <link rel="apple-touch-icon" href=""/>
        <meta property="og:title" content="Home | Coast Republic" />
<meta property="og:type" content="" />
<meta property="og:url" content="" />
<meta property="og:image" content="" />

        <meta name="description" content="Coast Republic  Store" />
          <meta name="keywords" content=" e-commerce, T-sirts , Ghana, Quality T-shirts, Clothing, Affordable clothing, crew neck, T-shirt print, store" />
                <meta http-equiv="x-ua-compatible" content="ie=edge" />
             <meta name="author" content="Jeffery Agyepong" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Header />
        <Text/>
        <Show />
        <Integrity />
        <Product/>
      
      </main>
    </>
  )
}
