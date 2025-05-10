import Link from "next/link";
import { PaystackButton } from "react-paystack";
import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Head/Header";
import Toast from "@/components/Head/Toast";



import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cartItems, addItem, removeItem } = useCart();

  // Example item to add to cart
  const sampleItem = { id: 1, name: 'Sample Product', price: 29.99 };

  return (
        <>
      <Head>
        <title>Cart </title>
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta property="og:title" content="Coast Republic store." />
        <meta property="og:type" content="E-commerce website application" />
        <meta
          property="og:description"
          content="Coast Republic store. We sell t-shirts and hoodies"
        />
        <meta property="og:url" content="https://coast-republic.vercel.app" />
        <meta property="og:image" content="/crlogo2.png" />

        <meta name="description" content="Coast Republic  Store" />
        <meta
          name="keywords"
          content=" e-commerce, T-sirts , Ghana, Quality T-shirts, Clothing, Affordable clothing, crew neck, T-shirt print, store"
        />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="author" content="Coast Republic Inc" />
        <meta
          name="viewport"
          content="width=device-width,    initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="" />
        <meta
          name="google-site-verification"
          content="HIhs3rvT7a6WD274_Txl6lfu3opycY_McRAFvT2-oBw"
        />
      </Head>
      <main>
        <div className="sticky">
          <Toast />
          <Header />
        </div>
    <div style={{ padding: '20px' }}>
      <h1>Shopping Cart</h1>
      <button
        onClick={() => addItem(sampleItem)}
        style={{ marginBottom: '20px' }}
      >
        Add Sample Item
      </button>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} (Qty: {item.quantity})
              <button
                onClick={() => removeItem(item.id)}
                style={{ marginLeft: '10px' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
       
      </main>
    </>
  );
}