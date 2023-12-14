import Head from "next/head";
import { Inter } from "next/font/google";
import Top from "../components/Head/Top";
import Header from "../components/Head/Header";
import Privacy from "../components/Footer/Privacy";
import Footer from "../components/Footer/Footer";
import Mobile from "@/components/Head/Mobile";
import Header2 from "@/components/Head/Header2";
const inter = Inter({ subsets: ["latin"] });

export default function privacy() {
  return (
    <>
      <Head>
        <title>Delivery | Coast Republic</title>
        <link rel="apple-touch-icon" href="" />
        <meta property="og:title" content="Home | Coast Republic" />
        <meta property="og:type" content="" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />

        <meta name="description" content="Coast Republic  Store" />
        <meta
          name="keywords"
          content=" e-commerce, T-sirts , Ghana, Quality T-shirts, Clothing, Affordable clothing, crew neck, T-shirt print, store"
        />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="author" content="Jeffery Agyepong" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Mobile />
        <Header2/>
        <Privacy />
        <Footer />
      </main>
    </>
  );
}
