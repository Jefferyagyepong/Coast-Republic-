import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Top from '../components/Top'
import Text from '../components/Text'        
import CategoryCard from '../components/ CategoryCard' 
import Integrity from '../components/Integrity'
import Show from '../components/Show'
import Header from '../components/Header'
import Collection from '../components/Collection'
import Footer from '../components/Footer'

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
        <Top/>
        <Header />
        <Text/>
        <Collection/>
        <Show />
        <Integrity />
   
      <div className='small'>
        <CategoryCard image="/public/azumah-black.svg" name="Azumah Nelson T-shirt Black" />
        <CategoryCard image="/public/azumah-white.svg" name="Azumah Nelson T-shirt white" />
        <CategoryCard image="https://imgur.com/Dm212HS.png" name="Switch" />
      </div>
      <div className='large'>
        <CategoryCard image="/azumah-black.svg" name="PC" />
        <CategoryCard
          image="/azumah-black.svg"
          name="Accessories"
        />
      </div>
    
        <Footer/>
      
      </main>
    </>
  )
}
