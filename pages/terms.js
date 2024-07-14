import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "../components/Head/Header";
import Terms from "../components/Footer/Terms";
import Newsletter from "@/components/Footer/Newsletter";
import FootBottom from "@/components/Footer/FootBottom";

const inter = Inter({ subsets: ["latin"] });

export default function terms() {
  return (
    <>
      <Head>
        <title>Terms| Coast Republic</title>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@coastrepublicgh" />
        <meta name="twitter:creator" content="@coastrepublicgh" />
        <meta name="twitter:title" content="Coast Republic inc" />
        <meta name="twitter:description" content="terms and condition " />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/hjRpfKgJ/crlogo-1.png"
        />
        <meta property="og:title" content="Coast Republic inc" />
        <meta property="og:description" content="terms and condition " />
        <meta property="og:url" content="https://coast-republic.vercel.app/terms" />
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

        <Newsletter />
        <FootBottom/>
      </main>
    </>
  );
}
