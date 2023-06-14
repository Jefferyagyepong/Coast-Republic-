
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { PaystackButton } from 'react-paystack'
import React, { useState } from "react"



const checkout = () => {
  const publicKey = "pk_test_e44bf87ec09165000fabee1d8ea8df1ec5d27f04"
  const amount = 1000000
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState("")
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState("")
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [phone, setPhone] = useState("")

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  }





    return (
      <>
     
        <main >
  
          <div className="App">
            <div className="container-app">
              <div className="item">
                <div className="overlay-effect"></div>
                <Image
                  className="item-image"
                  src=""
                  alt="product"
                />
                <div className="item-details">
                  <p className="item-details__title">Coconut Oil</p>
                  <p className="item-details__amount">NGN{amount / 100}</p>
                </div>
              </div>
            
              <div className="checkout-form">
                <div className="checkout-field">
                  <label>Name</label>
                  <input
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="checkout-field">
                  <label>Email</label>
                  <input
                    type="text"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="checkout-field">
                  <label>Phone</label>
                  <input
                    type="text"
                    id="phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <PaystackButton className="paystack-button" {...componentProps} />
              </div>
            </div>
          </div>
      
        </main>
      </>
    )
  }
export default checkout

