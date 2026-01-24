/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import Header from "@/components/Head/Header";
import Head from "next/head";

import Footer from "@/components/Footer/Footer";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log({ name, email, message });
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Coast Republic | T-shirts and more</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@coastrepublicgh" />
        <meta name="twitter:creator" content="@coastrepublicgh" />
        <meta name="twitter:title" content="Coast Republic inc" />
        <meta
          name="twitter:description"
          content="T-shirts, Sneakers & more.... "
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1622445272461-c6580cab8755?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <meta property="og:title" content="Coast Republic inc" />
        <meta
          property="og:description"
          content="T-shirts, Sneakers & more.... "
        />
        <meta property="og:url" content="https://coast-republic.vercel.app/" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1622445272461-c6580cab8755?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        <meta name="description" content="Coast Republic  Store" />
        <meta
          name="keywords"
          content=" e-commerce, T-sirts , Ghana, Quality T-shirts, Clothing, Affordable clothing, crew neck, T-shirt print, store"
        />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="author" content="Coast Republic Inc" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="/" />
        <meta
          name="google-site-verification"
          content="HIhs3rvT7a6WD274_Txl6lfu3opycY_McRAFvT2-oBw"
        />
      </Head>



      <Header />
<div className="main-content">



      <div className="contact-container">
        
          <h2 className="newsletter-title">Contact Us</h2>
          <p className="newsletter-description">
            Have any questions? We are here to help! Fill out the form below, and we will get back to you.
          </p>

          {submitted ? (
            
              <div>
              ✅ Your message has been sent. We will get back to you soon!
            </div>
          
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div>
           
                <input
                placeholder="Name"
                  type="text"
                  required
className="form-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div><br />
              <div>
             
                <input
                  type="email"
                  required
                   placeholder="Email"
className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div><br />
              <div className="inputGroup">
              
                <textarea
                  required
                  placeholder="Write your questions here"

                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
<br />
              <button
                type="submit"

              >
                Send
              </button>
            </form>
          )}

     
      
      </div>
           <div   className="location-container">
            <h6>IN STORE LOC. </h6>
            <span>📍 AK-7175846 Asafo Dadiesoaba</span>
            <span>📞 +233 244736420</span>
            <span>✉️ support@coastrepublic.com</span>
          </div>
      <Footer />
      </div>

    </>

  );
};

export default Contact;






