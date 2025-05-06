import Link from "next/link";
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";
import Header from "@/components/Head/Header";
import Toast from "@/components/Head/Toast";

// Importing action from  cart.slice.js
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "@/redux/cart.slice";
import styles from "@/sass/components/CartPage.module.scss";


const CartPage = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };


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
  
        <div className={styles.container}>
  
          {cart.length === 0 ? (
            <div className="cart-empty-container">
            <h1>Cart Empty!</h1>
            <p>Cart Empty</p>     
           <div className="forms-container sticky-div">
          <ul>
          <li>                  
          <Link className="view-cart-btn"href={"/products/"}>BACK TO SHOP</Link> 
          </li>
         </ul>       
          </div>    
          </div>
                       
          ) : (
            <>
                                            
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
             <p>{item.name}</p>        
             <p>Price: GHS {item.price.toFixed(2)}</p>
             <p>Quantity: {item.quantity}</p>
             

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

                        
                  <p>GHS {item.quantity * item.price.toFixed(2)}</p>

                </div>
              ))}
               <div className="order-summary">

                <h2>Order Summary</h2>
                <div className="order-items">
                 
                  <div className="order-item">
                  <span>Price: GHS {item.price.toFixed(2)}</span>
                  <span>{item.name}</span>      
                  <span>Quantity: {item.quantity}</span>
                  </div>
                 
                  </div>
                 
            <div className="order-details">       
                 
            <div className="order-detail">
              <span>Subtotal: <h2>GHS {getTotalPrice()}</h2></span>
              <span>Shipping: Free</span>
              </div>
                 
            <div className="order-detail">
              <span>Total: <h4>GHS {getTotalPrice().toFixed(2)}</h4></span>
            </div>
                 
              </div>
                 </div>
             
              <div className="forms-container sticky-div">
             <ul>
             <li>                  
            <Link className="view-cart-btn"href={"/checkout"}>SECURE CHECKOUT</Link> 
            </li>
            </ul>                    
          </div>     
      
            </>
          )}        
        </div>     
      </main>
    </>
  );
};

export default CartPage;





