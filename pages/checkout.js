import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import FootBottom from "../components/Footer/FootBottom";
import Image from "next/image";
import Link from "next/link.js";
import { useSelector, useDispatch } from "react-redux";



const App = () => {
    
  const publicKey = "pk_test_e44bf87ec09165000fabee1d8ea8df1ec5d27f04";
  const amount = 400000;
  const currency = "GHS";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    currency,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Order Succesfully placed "),
    onClose: () => alert("Wait! Don't leave :("),
  };
   const cart = useSelector(state => state.cart);
   const dispatch = useDispatch();
    const getTotalPrice = () => {
      return cart.reduce(
        (accumulator, item) => accumulator + item.quantity * item.price,
        0
      );
    };




  return (
    <main>
      <div className="integrity">
        <Link href={"./"}>
          <Image
            src={"/coast.svg"}
            width={77}
            height={70}
            alt="logo"
            className="logo"
          />
        </Link>
      </div>

      <div className="text-align">
        <h4>You&apos;re about to pay for items added to shopping bag</h4>
        <br />
        <h2>Grand Total: &#8373; {getTotalPrice()}</h2>
      </div>
      <form>
        <h4>Fill in the form to verify your payment credentials</h4>
        <br />
        <section className="left">
          <div className="input-container">
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <br />
          <div className="send-container">
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
        </section>
        <div>
          <h6>Powered by Paystack</h6>
        </div>
      </form>
      <FootBottom />
    </main>
  );
};

export default App;
