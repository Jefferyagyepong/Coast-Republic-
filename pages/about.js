import Toast from "@/components/Head/Toast";
import Header from "@/components/Head/Header";
import Head from "next/head";

export default function About() {
  return (
    <>

      <Head>
          <title>About Us - Coast Republic Inc.</title>

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
      <main >
              <div className="sticky">
         
             <Toast />
        <Header />
          
          </div>
     
        <h1 >About Us</h1>
        
        <section>
          <p>
            Welcome to Coast Republic , your go-to destination for high-quality products at unbeatable prices. We are dedicated to providing you with the best shopping experience, offering a wide range of products with excellent customer service.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            Our mission is to bring you top-quality products while ensuring an effortless and enjoyable shopping experience. We carefully select our products to ensure they meet the highest standards.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>💎 **Premium Quality Products** – We source only the best products.</li>
            <li>🚚 **Fast & Reliable Shipping** – Get your orders quickly and safely.</li>
            <li>💰 **Affordable Prices** – Enjoy competitive prices without compromising quality.</li>
            <li>📞 **Exceptional Customer Support** – We’re always here to assist you.</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            Have questions? We'd love to hear from you! Contact us at <a href="mailto:support@ecommerce.com" className="text-blue-600">support@ecommerce.com</a>.
          </p>
        </section>
      </main>
    </>
  );
}


