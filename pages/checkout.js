import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import FootBottom from "../components/Footer/FootBottom";


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
    text: "Proceed to Pay",
    onSuccess: () =>
      alert("Order Succesfully placed "),
    onClose: () => alert("Wait! Don't leave :("),
  };




  return (
    <main>
      <div className="text-align">
        <p>You&apos;re about to pay for items added to shopping bag</p>
        <br />
     
      </div>
      <form>
        <h4>Fill in the form to verify your payment credentials</h4><br/>
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
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
        </section>
      </form>
      <FootBottom />
    </main>
  );
};

export default App;
