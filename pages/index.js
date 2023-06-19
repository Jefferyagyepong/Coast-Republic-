import Head from 'next/head'
import { Inter } from 'next/font/google'
import Top from '../components/Top'
import Text from '../components/Text'        
import CategoryCard from '../components/ CategoryCard' 
import Integrity from '../components/Integrity'
import Show from '../components/Show'
import Header from '../components/Header'
import Collection from '../components/Collection'
import Tshirt from '../components/Tshirt'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Coast Republic | T-shirts and more</title>
                <link rel="apple-touch-icon" href="/favicon.ico"/>
        <meta property="og:title" content="Coast Republic store." />
        <meta property="og:type" content="E-commerce website application" />
        <meta property="og:description" content="Coast Republic store. We sell t-shirts and hoodies" />
<meta property="og:url" content="https://coast-republic.vercel.app" />
<meta property="og:image" content="/crlogo2.png" />

        <meta name="description" content="Coast Republic  Store" />
          <meta name="keywords" content=" e-commerce, T-sirts , Ghana, Quality T-shirts, Clothing, Affordable clothing, crew neck, T-shirt print, store" />
                <meta http-equiv="x-ua-compatible" content="ie=edge" />
             <meta name="author" content="Jeffery Agyepong" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="HIhs3rvT7a6WD274_Txl6lfu3opycY_McRAFvT2-oBw" />
      </Head>
      <main >
        <Top/>
        <Header />
        <Text/>
        <Collection/>
        <Show />
        <Integrity />
    
        <div className={styles.container}>
    <Tshirt/>
      <div className={styles.small}>
        <CategoryCard image="/blackHope.webp" name=" T-shirt - Black | 100% cotton" />
            <CategoryCard image="/Ash.webp" name=" T-shirt - Ash | 100% cotton" />
            <CategoryCard image="/000.webp" name="  T-shirt - Black | 100% cotton" />
                   <CategoryCard image="/asakaa.webp" name="Asakaa  T-shirt - Black | 100% cotton " />
     
      </div>
  
    
          
        </div>
   
        <Footer/>
      
      </main>
    </>
  )
}
