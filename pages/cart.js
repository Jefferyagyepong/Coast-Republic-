import Checkout from '../components/Checkout'  
import Link from 'next/link'; 
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
// Importing actions from  cart.slice.js
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';
import styles from '../styles/CartPage.module.css';


const CartPage = () => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <div>
           <h1>Your Cart is Empty!</h1>
        <Link  href={"/shop"}>
        <p>Back to store</p>
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
          {cart.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <div className={styles.body}>
              <div className={styles.image}>
                <Image src={item.image} height="90" width="65" alt='' />
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
      <Checkout/>
    </div>
  );
};

export default CartPage;


