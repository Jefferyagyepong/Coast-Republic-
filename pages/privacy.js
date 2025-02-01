
import Head from "next/head";

import Header from "@/components/Head/Header";
import Privacy from "@/components/Footer/Privacy";
import Nav from "@/components/Head/Nav";
import Toast from "@/components/Head/Toast";


export default function privacy() {
  return (
    <>
      <Head>
        <title>Delivery | Coast Republic</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@coastrepublicgh" />
        <meta name="twitter:creator" content="@coastrepublicgh" />
        <meta name="twitter:title" content="Coast Republic inc" />
        <meta name="twitter:description" content="our privacy" />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/xCrTBdg7/coast.png"
        />
        <meta property="og:title" content="Coast Republic inc" />
        <meta property="og:description" content="our privacy" />
        <meta
          property="og:url"
          content="https://coast-republic.vercel.app/privacy"
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
          <div className="sticky">
              <Toast />
        <Header />
            </div>
      
      
      
        <Nav/>
        <Privacy />
        
      </main>
    </>
  );
}
