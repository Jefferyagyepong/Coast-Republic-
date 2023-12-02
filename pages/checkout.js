import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const publicKey = "pk_test_e44bf87ec09165000fabee1d8ea8df1ec5d27f04";
  const amount = 1;
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
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <main>
     <form>
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
          <div className="send-container">
            <PaystackButton {...componentProps} />
          </div>
        </section>
      </form>
      <Footer/>
    </main>
 
   
 
  );
};

export default App;
