
// components/PaystackForm.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const PaystackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = (e) => {
    e.preventDefault();

    const { email, amount } = formData;

    if (!email || !amount) {
      alert('Please fill in all required fields.');
      return;
    }

    const handler = window.PaystackPop.setup({
      key: 'pk_live_1822c586aa820dc6fd4c93e5c31261eeb4c74cf7', // Replace with your public key
      email,
      amount: parseFloat(amount) * 100, // Convert to kobo
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
    <form onSubmit={handlePayment} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Pay with Paystack</h2>
      <div>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Amount (GHS)</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Pay Now
      </button>
    </form>
  );
};

export default PaystackForm;
