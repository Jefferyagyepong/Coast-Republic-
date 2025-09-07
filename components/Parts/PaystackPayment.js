/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
// components/PaystackPayment.js
import { useEffect } from "react";

const PaystackPayment = ({ email, amount, reference }) => {
  useEffect(() => {
    // Dynamically load the Paystack script
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log("Paystack script loaded");
    };

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    const handler = window.PaystackPop.setup({
      key: "pk_live_1822c586aa820dc6fd4c93e5c31261eeb4c74cf7", // Paystack public key
      email: email,
      amount: amount * 100, // Convert amount to Kobo (i.e., 1 unit = 100 kobo)
      reference: reference,
      currency: "GHS", // Currency for Ghana
      callback: function (response) {
        // Handle payment success
        alert("Payment was successful, reference: " + response.reference);
      },
      onClose: function () {
        // Handle payment window closed without completing
        alert("Payment window closed");
      },
    });

    // Open the Paystack payment modal
    handler.openIframe();
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay with Paystack</button>
    </div>
  );
};

export default PaystackPayment;
