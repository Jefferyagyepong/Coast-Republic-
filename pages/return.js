/* eslint-disable react/react-in-jsx-scope */
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Head/Header";
import Head from "next/head";


const ReturnPolicy = () => {
  return (
    <>
      <Head>
        <title>Return Policy - Your Store</title>
        <meta
          name="description"
          content="Read our return policy before making a purchase."
        />
      </Head>
      <Header />
      <div className="container">
        <h1>Return & Refund Policy</h1>
        <p>Last updated: January 30, 2025</p>

        <h2>Returns</h2>
        <p>
          We have a **30-day return policy**, which means you have 30 days after
          receiving your item to request a return.
        </p>
        <p>To be eligible for a return, your item must be:</p>
        <ul>
          <li>Unused and in the same condition that you received it</li>
          <li>In its original packaging</li>
          <li>Accompanied by a receipt or proof of purchase</li>
        </ul>

        <h2>Refunds</h2>
        <p>
          Once we receive your return, we will inspect it and notify you of the
          status. If approved, your refund will be processed within **5-7
          business days** to your original payment method.
        </p>

        <h2>Exchanges</h2>
        <p>
          If you received a defective or damaged item, we will replace it free
          of charge. Please contact us at
          <strong> support@coastrepublic.com </strong> for further assistance.
        </p>

        <h2>Non-Returnable Items</h2>
        <p>Some items cannot be returned, including:</p>
        <ul>
          <li>Gift cards</li>
          <li>Personalized or custom-made items</li>
          <li>Perishable goods (food, flowers, etc.)</li>
        </ul>

        <h2>How to Initiate a Return</h2>
        <p>
          To start a return, contact us at{" "}
          <strong>returns@coastrepublic.com</strong>. We’ll provide a return
          shipping label and instructions.
        </p>

        <p>
          If you have any questions, feel free to reach out at{" "}
          <strong>support@yourstore.com</strong>.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ReturnPolicy;
