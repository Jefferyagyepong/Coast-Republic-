import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "@/components/Head/Header";
import Footer from "@/components/Footer/Footer";
import { useCart } from "@/context/CartContext";

const formatMoney = (amount, currency) =>
  `${currency} ${Number(amount).toFixed(2)}`;

const CheckoutPage = () => {
  const router = useRouter();
  const { items, getCartTotal, currency, clearCart } = useCart();
  const cartTotal = getCartTotal();

  const [form, setForm] = useState({
    fullName: "",
    phone: "", // MoMo-registered number, e.g. 0244xxxxxx
    address: "",
    city: "",
    notes: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (items.length === 0) return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: form,
          items,
          total: cartTotal,
          currency,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Payment could not be started.");
      }

      clearCart();
      router.push(`/order-status?ref=${data.referenceId}`);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  if (items.length === 0) {
    return (
      <>
        <Header />
        <div className="main-content">
          <div className="custom-container">
            <div className="container-center">
              <h1 className="heading-large">Checkout</h1>
              <p>Your cart is empty — nothing to check out.</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Checkout | Coast Republic</title>
      </Head>
      <Header />

      <div className="main-content">
        <div className="custom-container">
          <div className="container-center checkout-page">
            <h1 className="heading-large">Checkout</h1>

            <div className="checkout-layout">
              <form className="checkout-form" onSubmit={handleSubmit}>
                <label>
                  Full Name
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  MoMo Phone Number
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. 0244123456"
                    pattern="0[0-9]{9}"
                    title="Enter a valid 10-digit Ghanaian number, e.g. 0244123456"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Delivery Address
                  <input
                    type="text"
                    name="address"
                    required
                    value={form.address}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  City / Town
                  <input
                    type="text"
                    name="city"
                    required
                    value={form.city}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Order Notes (optional)
                  <textarea
                    name="notes"
                    rows={3}
                    value={form.notes}
                    onChange={handleChange}
                  />
                </label>

                {status === "error" && (
                  <p className="checkout-error">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  className="btn-primary btn-checkout"
                  disabled={status === "submitting"}
                >
                  {status === "submitting"
                    ? "Sending MoMo prompt..."
                    : `Pay ${formatMoney(cartTotal, currency)} with MTN MoMo`}
                </button>
              </form>

              <aside className="checkout-summary">
                <h2>Order Summary</h2>
                <ul>
                  {items.map((item) => (
                    <li key={item.cartKey}>
                      <span>
                        {item.name} × {item.quantity}
                      </span>
                      <span>
                        {formatMoney(item.price * item.quantity, currency)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="checkout-summary__total">
                  <span>Total</span>
                  <strong>{formatMoney(cartTotal, currency)}</strong>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CheckoutPage;
