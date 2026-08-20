import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Head/Header";
import Footer from "@/components/Footer/Footer";
import { useCart } from "@/context/CartContext";

const formatMoney = (amount, currency) =>
  `${currency} ${Number(amount).toFixed(2)}`;

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, getCartCount, getCartTotal, currency } =
    useCart();

  const cartCount = getCartCount();
  const cartTotal = getCartTotal();

  return (
    <>
      <Head>
        <title>Your Cart | Coast Republic</title>
      </Head>
      <Header />

      <div className="main-content">
        <div className="custom-container">
          <div className="container-center cart-page">
            <h1 className="heading-large">Shopping Cart</h1>

            {items.length === 0 ? (
              <div className="cart-empty">
                <p>Your cart is empty.</p>
                <Link href="/products" className="btn-primary">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <>
                <p className="cart-summary-line">
                  Total Items: {cartCount} &nbsp;|&nbsp; Total Price:{" "}
                  {formatMoney(cartTotal, currency)}
                </p>

                <ul className="cart-list">
                  {items.map((item) => (
                    <li key={item.cartKey} className="cart-item">
                      {item.image && (
                        <div className="cart-item__image">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={80}
                            height={80}
                          />
                        </div>
                      )}

                      <div className="cart-item__details">
                        <p className="cart-item__name">{item.name}</p>
                        {(item.size || item.color) && (
                          <p className="cart-item__meta">
                            {item.color && `Color: ${item.color}`}
                            {item.size && item.color && " · "}
                            {item.size && `Size: ${item.size}`}
                          </p>
                        )}
                        <p className="cart-item__price">
                          {formatMoney(item.price, currency)} x {item.quantity}
                        </p>
                      </div>

                      <div className="cart-item__qty">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${item.name}`}
                          onClick={() =>
                            updateQuantity(item.cartKey, item.quantity - 1)
                          }
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          aria-label={`Increase quantity of ${item.name}`}
                          onClick={() =>
                            updateQuantity(item.cartKey, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>

                      <p className="cart-item__line-total">
                        {formatMoney(item.price * item.quantity, currency)}
                      </p>

                      <button
                        type="button"
                        className="cart-item__remove"
                        aria-label={`Remove ${item.name} from cart`}
                        onClick={() => removeFromCart(item.cartKey)}
                      >
                        Remove ×
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="cart-footer">
                  <div className="cart-footer__total">
                    <span>Total</span>
                    <strong>{formatMoney(cartTotal, currency)}</strong>
                  </div>
                  <Link href="/checkout" className="btn-primary btn-checkout">
                    Proceed to Checkout
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CartPage;
