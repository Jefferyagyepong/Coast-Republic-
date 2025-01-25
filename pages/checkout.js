 import Head from "next/head";
 import React, { useState } from "react";
 import PaystackPop from '@paystack/inline-js';

 const PaystackPayment = () => {
   const [loading, setLoading] = useState(false);

   // Function to handle payment
  const handlePayment = () => {
     setLoading(true);

     // Replace with your Paystack public key
     const paystackPublicKey = process.env.paystackPublicKey;

     // Replace with your server's API endpoint to create a payment session
    const paymentData = {
       email: "customer@example.com", // Customer email
       amount: 1000, // Amount to pay (in the smallest unit, e.g., kobo or pesewa)
       currency: "GHS", // Currency (Ghanaian Cedi)
     };

     // Make a request to your backend to initialize the payment
     fetch("./api/pay.js", {
      method: "POST",
       headers: {
        "Content-Type": "application/json",
       },
       body: JSON.stringify(paymentData),
     })
       .then(response => response.json())
       .then(data => {
         const { paymentLink } = data; // Assuming your server sends back a payment link or reference

        // Initiating Paystack inline popup
         const handler = typeof window.PaystackPop.setup({
           key: paystackPublicKey,
           email: paymentData.email,
          amount: paymentData.amount * 100, // Convert to kobo or pesewa
           ref: paymentLink, // Reference from your backend
           onClose: () => {
             alert("Payment closed!");
           },
          callback: function (response) {
             if (response.status === "success") {
               // Handle success, send response.ref to your backend for verification
              alert(`Payment successful! Reference: ${response.reference}`);
            }
           },
         });

         handler.openIframe();
       })
       .catch(err => {
         console.error("Error initializing payment", err);
         setLoading(false);
         alert("An error occurred while processing your payment");
       });
   };

   return (
     <>
       <Head>
         <title>Checkout | Coast Republic</title>

         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:site" content="@coastrepublicgh" />
         <meta name="twitter:creator" content="@coastrepublicgh" />
         <meta name="twitter:title" content="Coast Republic inc" />
         <meta
          name="twitter:description"
           content="We deliver to all 16 regions in 🇬🇭 "
         />
         <meta
           name="twitter:image"
           content="https://i.postimg.cc/xCrTBdg7/coast.png"
         />
         <meta property="og:title" content="Coast republic" />
         <meta
           property="og:description"
          content="We deliver to all 16 regions in 🇬🇭"
         />
         <meta
           property="og:url"
           content="https://coast-republic.vercel.app/delivery"
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
         <meta
           name="viewport"
           content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
         />
         <link rel="icon" href="" />
       </Head>
       <form action="#" method="POST">
         <input type="hidden" name="user_email" />
         <input type="hidden" name="amount" />
         <input type="hidden" name="cartid" />
         <button onClick={handlePayment} disabled={loading}>
           {loading ? "Processing..." : "Pay with Paystack"}
         </button>
       </form>
     </>
   );
 };

 export default PaystackPayment;
