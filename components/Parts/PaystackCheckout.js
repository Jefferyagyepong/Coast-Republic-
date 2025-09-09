// components/PaystackCheckout.js
import React from 'react';
import { useRouter } from 'next/router';

const PaystackCheckout = ({ email, amount }) => {
  const router = useRouter();

  const payWithPaystack = () => {
    const handler = window.PaystackPop.setup({
      key: 'pk_live_1822c586aa820dc6fd4c93e5c31261eeb4c74cf7', // Replace with your public key
      email: email,
      amount: amount * 100, // Paystack expects amount in kobo
      currency: 'GHS',
      callback: function (response) {
        console.log('Payment successful. Reference:', response.reference);
        router.push('/success'); // Redirect after payment
      },
      onClose: function () {
        alert('Transaction was not completed, window closed.');
      },
    });

    handler.openIframe();
  };

  return (
    <button onClick={payWithPaystack} className="btn btn-primary">
      Pay Now
    </button>
  );
};

export default PaystackCheckout;
