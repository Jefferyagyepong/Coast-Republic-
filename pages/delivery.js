
import Toast from "../components/Head/Toast";
import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "../components/Head/Header";
import Delivery from "../components/Footer/Delivery";
import Newsletter from "@/components/Footer/Newsletter";
import FootBottom from "@/components/Footer/FootBottom";
import Nav from "@/components/Head/Nav";

const inter = Inter({ subsets: ["latin"] });
export default function delivery() {
  return (
    <>
      <Head>
        <title>Delivery | Coast Republic</title>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@coastrepublicgh" />
        <meta name="twitter:creator" content="@coastrepublicgh" />
        <meta name="twitter:title" content="Coast Republic inc" />
        <meta
          name="twitter:description"
          content="We deliver to all 16 regions in 🇬🇭 "
        />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/xCrTBdg7/coast.png"
        />
        <meta property="og:title" content="Coast republic" />
        <meta
          property="og:description"
          content="We deliver to all 16 regions in 🇬🇭"
        />
        <meta
          property="og:url"
          content="https://coast-republic.vercel.app/delivery"
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/xCrTBdg7/coast.png"
        />
        <meta
          name="keywords"
          content=" e-commerce, T-sirts , Ghana, Quality T-shirts, Clothing, Affordable clothing, crew neck, T-shirt print, store"
        />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="author" content="Jeffery Agyepong" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover" />
        <link rel="icon" href="" />
      </Head>
      <main>
        <div className="sticky">
             <Toast />
        <Header />
          </div>
     
        <Nav/>
        <Delivery />
        <Newsletter />
        <FootBottom />
      </main>
    </>
  );
}
