/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import "@/sass/main.scss";
import { CartProvider } from "@/context/CartContext";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";

const GA_TRACKING_ID = "G-1RJFQ3KLLY";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", GA_TRACKING_ID, {
          page_path: url,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <CartProvider>
      {/* Google Analytics Scripts */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
