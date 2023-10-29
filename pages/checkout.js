import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useSelector, useDispatch } from "react-redux";



const App = () => {
    
  const publicKey = "pk_test_e44bf87ec09165000fabee1d8ea8df1ec5d27f04";
    const amount = 1;
    const currency = 'GHS';
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
        
      <div className="checkout">
        <div>

                <p>Fill the form to pay now</p>
        </div>

        <div className="row">
          <div className="col-75">
            <div className="contain">
              <form>
                <div className="row">
                  <div className="col-50">
                    <label>Name</label>
                    <input
                      type="text"
                      id="name"
                      onChange={e => setName(e.target.value)}
                    />
                    <label>Email</label>
                    <input
                      type="text"
                      id="email"
                      onChange={e => setEmail(e.target.value)}
                    />
                    <label>Phone</label>
                    <input
                      type="text"
                      id="phone"
                      onChange={e => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              </form>
              <div className="row">
                <div className="col-50">
                  <PaystackButton {...componentProps} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default App;
