import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "../components/Head/Header";
import Terms from "../components/Footer/Terms";
import Footer from "../components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function terms() {
  return (
    <>
      <Head>
        <title>Terms| Coast Republic</title>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@coastrepublicgh" />
        <meta name="twitter:creator" content="@coastrepublicgh" />
        <meta name="twitter:title" content="Clothing Store" />
        <meta name="twitter:description" content="We sell thrifts " />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/hjRpfKgJ/crlogo-1.png"
        />
        <meta property="og:title" content="Clothing Store" />
        <meta property="og:description" content="We sell tshirts and shoes" />
        <meta property="og:url" content="https://coast-republic.vercel.app/" />
        <meta
          property="og:image"
          content="https://i.postimg.cc/hjRpfKgJ/crlogo-1.png"
        />
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

        <Terms />

        <Footer />
      </main>
    </>
  );
}
