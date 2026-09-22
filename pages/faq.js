/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import Header from "@/components/Head/Header";
import CoastApp from "@/components/Parts/CoastApp";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";

const FAQS = [
  {
    q: "What payment methods do you accept?",
    a: "We accept MTN Mobile Money, Telecel Cash, AirtelTigo Money, and Visa. All payments are processed securely at checkout — we never store your card details.",
  },
  {
    q: "How long does shipping take?",
    a: "Orders within Kumasi typically arrive in 1–2 business days. Other regions across Ghana usually take 2–5 business days. You'll receive a confirmation once your order ships. See our Delivery page for full details.",
  },
  {
    q: "Can I return a product?",
    a: "Yes. Unworn items in original condition with tags attached can be returned within 7 days of delivery. Visit our Refunds & Returns page for the full policy and how to start a return.",
  },
  {
    q: "Do you offer international shipping?",
    a: "At the moment we ship within Ghana only. We're working on expanding delivery beyond our borders — follow us or subscribe to our newsletter for updates.",
  },
  {
    q: "How do I know my size will fit?",
    a: "Each product page includes a size guide with measurements. If you're between sizes or unsure, message us on the Contact page before ordering and we'll help you choose.",
  },
  {
    q: "How can I track my order?",
    a: "Once your order ships, you'll receive a confirmation with delivery details. If you haven't heard from us within the expected window, reach out via the Contact page with your order number.",
  },
  {
    q: "Can I change or cancel my order after placing it?",
    a: "If your order hasn't been processed for delivery yet, contact us as soon as possible at customercare@coast-collective.com or +233 244 736 420 and we'll do our best to accommodate changes.",
  },
  {
    q: "Are your products authentic and true to description?",
    a: "Yes. Every product listing reflects the actual item you'll receive, including material, fit, and color. Photos may vary slightly from screen to screen due to lighting and display settings.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <>
      <Head>
        <title>FAQ | Coast Collective</title>
        <meta
          name="description"
          content="Answers to common questions about payment, shipping, sizing, and returns at Coast Republic."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.coast-collective.com/faq" />

    <meta name="keywords" content="ecommerce, t-shirts, Ghana, quality clothing, sneakers, jeans, crew neck, streetwear" />
        <meta name="author" content="Coast collective Ghana" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="canonical" href="https://www.coast-collective.com/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

   
     
        
   {/* Open Graph */}
        <link rel="canonical" href="https://www.coast-collective.com/" />
        <meta property="og:url" content="https://www.coast-collective.com/" />
       
         <meta property="og:type" content="Online store" />
    <meta property="og:title" content="Delivery Information | Coast Collective" />
        <meta
          property="og:description"
          content="Delivery times, fees, and coverage areas for Coast Republic orders across Ghana."
        />
      
        <meta property="og:image" content="https://www.coast-collective.com/IMG_5722.jpeg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ | Coast Collective" />
        <meta
          name="twitter:description"
          content="Answers to common questions about payment, shipping, sizing, and returns at Coast Collective."
        />
        <meta name="twitter:image" content="https://www.coast-collective.com/IMG_5722.jpeg" />

        <meta name="robots" content="index, follow" />
      </Head>



      <Header />
      <div className="layout">
        <div className="main-content">
          <div className="custom-container">
            <div className="container-center">
              <main>
                <article>
                  <h4>Frequently Asked Questions</h4>
                  <p>
                    Everything you need to know before you shop. Can&apos;t find your
                    answer? <a href="/contact">Contact us</a> — we reply fast.
                  </p>

                  <div className="list">
                    {FAQS.map((item, i) => (
                      <div className="item" key={i}>
                        <button
                          className="question"
                          onClick={() => setOpen(open === i ? null : i)}
                          aria-expanded={open === i}
                        >
                          <span>{item.q}</span>
                          <span className="chevron">{open === i ? "−" : "+"}</span>
                        </button>
                        {open === i && <p className="answer">{item.a}</p>}
                      </div>
                    ))}
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>
      </div>
      <CoastApp />
      <Footer />



      <style jsx>{`
        .faq {
          max-width: 760px;
          margin: 0 auto;
          padding: 48px 20px 80px;
          font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
          color: #1b2430;
        }
        h1 {
          font-size: 2rem;
          color: #0a2540;
          margin-bottom: 10px;
        }
        .intro {
          color: #5b6b7a;
          margin-bottom: 32px;
        }
        .intro a {
          color: #0a2540;
          font-weight: 600;
        }
        .list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .item {
          border: 1px solid #e6e9ed;
          border-radius: 10px;
          overflow: hidden;
        }
        .question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f7f9fb;
          border: none;
          padding: 16px 18px;
          text-align: left;
          font-size: 1rem;
          font-weight: 600;
          color: #0a2540;
          cursor: pointer;
        }
        .chevron {
          font-size: 1.2rem;
          color: #5b6b7a;
        }
        .answer {
          padding: 14px 18px 18px;
          margin: 0;
          color: #45525f;
          line-height: 1.6;
          font-size: 0.95rem;
        }
        .question {
  background: #ffffff;
  border: none;
  padding: 18px 20px;
  font-size: 1.05rem;
  font-weight: 600;
  color: #0a2540;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.2s ease;
}
.question:hover {
  background: #f0f4f8;
}
.item {
  border: 1px solid #e6e9ed;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}
.answer {
  background: #f9fafb;
  padding: 16px 20px;
  font-size: 0.95rem;
  color: #45525f;
  border-top: 1px solid #e6e9ed;
}

      `}</style>
    </>
  );
}
