import Link from "next/link";
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import FootBottom from "../components/Footer/FootBottom";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";
import Header from "@/components/Head/Header";
import Toast from "../components/Head/Toast";
// Importing actions from  cart.slice.js
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cart.slice";
import styles from "../sass/components/CartPage.module.scss";
import Nav from "@/components/Head/Nav";

const CartPage = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };
  const publicKey = "pk_test_e44bf87ec09165000fabee1d8ea8df1ec5d27f04";
  const amount = 400000;
  const currency = "GHS";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [check, setCheck] = useState("");

  const componentProps = {
    email,
    amount,
    currency,
    metadata: {
      name,
      phone,
      check,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => alert("Order Succesfully placed "),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <>
      <Head>
        <title>Cart Page | T-shirts and more</title>
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
        <Nav />

        <div className={styles.container}>
          {cart.length === 0 ? (
            <div>
              <h3>Your Cart is Empty!</h3>
              <Link href={"/shop"}>Back to store and add products to cart</Link>
            </div>
          ) : (
            <>
              <hr />
              <div className={styles.head}>
                <div>Product</div>
                <div>Name</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Actions</div>
                <div>Total Price</div>
              </div>
              <hr />
              {cart.map(item => (
                // eslint-disable-next-line react/jsx-key
                <div className={styles.body}>
                  <div className={styles.image}>
                    <Image
                      src={item.image}
                      height="110"
                      width="90"
                      alt="product image"
                    />
                  </div>
                
                    <p>{item.product}</p>
                    <p>$ {item.price}</p>
                    <p>{item.quantity}</p>
             

                  <div className={styles.buttons}>
                    <button
                      type="button"
                      onClick={() => dispatch(incrementQuantity(item.id))}
                      className="buttons-cart"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => dispatch(decrementQuantity(item.id))}
                      className="buttons-cart"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="buttons-cart"
                    >
                      x
                    </button>
                  </div>
                  <p>$ {item.quantity * item.price}</p>
                </div>
              ))}
              <h2>Grand Total: $ {getTotalPrice()}</h2>
            </>
          )}
          <hr />
          <div className="form-container">
            <form>
              <h4>Fill in the form to verify your payment credentials</h4>
              <input
                type="text"
                id="name"
                onChange={e => setName(e.target.value)}
                placeholder="full name"
              />
              <input
                type="text"
                id="email"
                onChange={e => setEmail(e.target.value)}
                placeholder="email"
              />
              <input
                type="text"
                id="phone"
                onChange={e => setPhone(e.target.value)}
                placeholder="Phone number"
              />

              <div>
                <input
                  type="checkbox"
                  id="check"
                  onChange={e => setCheck(e.target.value)}
                />{" "}
                I Agree Terms & Conditions
              </div>

              <PaystackButton className="button-link" {...componentProps} />
            </form>
          </div>
        </div>
        <FootBottom />
      </main>
    </>
  );
};

export default CartPage;
