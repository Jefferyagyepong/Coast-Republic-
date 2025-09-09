/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

// pages/checkout.js
import dynamic from 'next/dynamic';

const PaystackCheckout = dynamic(() => import('@/components/PaystackCheckout'), {
  ssr: false, // Paystack uses window object, so disable SSR
});

export default function CheckoutPage() {
  const customerEmail = 'customer@example.com';
  const totalAmount = 150; // GHS

  return (
    <div>
      <h1>Checkout</h1>
      <PaystackCheckout email={customerEmail} amount={totalAmount} />
    </div>
  );
}

