import Head from "next/head";
import { Inter } from "next/font/google";
import About from "../components/About";
import Header from "../components/Head/Header";
import Newsletter from "@/components/Footer/Newsletter";
import FootBottom from "@/components/Footer/FootBottom";
import Nav from "@/components/Head/Nav";
import Toast from "../components/Head/Toast";

const inter = Inter({ subsets: ["latin"] });

export default function about() {
  return (
    <>
      <Head>
        <title>About us | Coast Republic</title>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@coastrepublicgh" />
        <meta name="twitter:creator" content="@coastrepublicgh" />
        <meta name="twitter:title" content="Coast Republic inc" />
        <meta name="twitter:description" content="our story" />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/xCrTBdg7/coast.png"
        />
        <meta property="og:title" content="Coast Republic inc" />
        <meta property="og:description" content="our story" />
        <meta
          property="og:url"
          content="https://coast-republic.vercel.app/about"
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
        <meta name="viewport" content="width=device-width,  initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover" />
        <link rel="icon" href="" />
      </Head>
      <main>
        <Toast />
        <Header />
        <Nav/>

        <About />

        <Newsletter />
        <FootBottom />
      </main>
    </>
  );
}
