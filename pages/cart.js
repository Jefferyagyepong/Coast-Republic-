import Link from "next/link";
import Image from "next/image";
import Proceed from "@/components/Products/Proceed";
import Header from "@/components/Head/Header";
import Footer from "@/components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
// Importing actions from  cart.slice.js
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cart.slice";
import styles from "../sass/components/CartPage.module.css";

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
    <main>
      <Header />
      <div className={styles.container}>
        {cart.length === 0 ? (
          <div>
            <h1>Your Cart is Empty!</h1>
            <Link href={"/shop"}>
              <br />
              <br />
              <p>Back to shop</p>
            </Link>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <div>Image</div>
              <div>Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Actions</div>
              <div>Total Price</div>
            </div>
            {cart.map(item => (
              // eslint-disable-next-line react/jsx-key
              <div className={styles.body}>
                <div className={styles.image}>
                  <Image src={item.image} height="90" width="65" alt="" />
                </div>
                <p>{item.product}</p>
                <p>$ {item.price}</p>
                <p>{item.quantity}</p>
                <div className={styles.buttons}>
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>
                    +
                  </button>
                  <button onClick={() => dispatch(decrementQuantity(item.id))}>
                    -
                  </button>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    x
                  </button>
                </div>
                <p>&#8373; {item.quantity * item.price}</p>
              </div>
            ))}
            <h2>Grand Total: &#8373; {getTotalPrice()}</h2>
          </>
        )}
        <br />
        <br />
        <Proceed />
      </div>
      <Footer />
    </main>
  );
};

export default CartPage;
