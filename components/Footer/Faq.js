/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import Head from "next/head";


const faqData = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept  Mobile Money, and Visa.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping usually takes 5-7 business days, depending on your location.",
  },
  {
    question: "Can I return a product?",
    answer: "Yes, we have a 30-day return policy. Please check our Return Policy page for more details.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship across West Africa . Shipping rates vary by country.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>FAQ - Your Store</title>
        <meta name="description" content="Frequently Asked Questions about our products and services." />
      </Head>
      <div className="faq-container">
        <div className="faqList">
          {faqData.map((item, index) => (
            <div key={index} className="faqItem">
              <button onClick={() => toggleFAQ(index)} className="question">
                {item.question}
                <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && <p className="answer">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
