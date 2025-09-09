// components/PaystackCheckout.js
import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const PaystackCheckout = ({ email, amount }) => {
  const router = useRouter();

  const payWithPaystack = () => {
    const handler = window.PaystackPop.setup({
      key: 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxx', // Replace with your public key
      email: email,
      amount: amount * 100,
      currency: 'GHS',
      callback: function (response) {
        console.log('Payment successful. Reference:', response.reference);
        router.push('/success');
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

// ✅ PropTypes validation
PaystackCheckout.propTypes = {
  email: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default PaystackCheckout;
