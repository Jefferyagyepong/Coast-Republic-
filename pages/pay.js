/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

// pages/checkout.js
// pages/checkout.js
import dynamic from 'next/dynamic';

const PaystackForm = dynamic(() => import('@/components/Parts/PaystackForm'), {
  ssr: false,
});

export default function CheckoutPage() {
  return (
    <div>
      <h1>Checkout Page</h1>
      <PaystackForm />
    </div>
  );
}


