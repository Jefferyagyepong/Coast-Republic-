import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "@/components/Head/Header";
import FootBottom from "@/components/Footer/FootBottom";
import { useCart } from "@/context/CartContext";

const formatMoney = (amount, currency) =>
  `${currency} ${Number(amount || 0).toFixed(2)}`;

// --- Store policy constants ---------------------------------------------
// Move to a shared config if delivery pricing/tax varies by region or
// comes from the backend.
const TAX_RATE = 0.075;
const DELIVERY_FEE = 15;
const FREE_DELIVERY_THRESHOLD = 200;
const PICKUP_LOCATION = "Coast Republic Store — Osu, Accra";
const SUBMIT_TIMEOUT_MS = 20000;
const DRAFT_STORAGE_KEY = "coast-republic-checkout-draft";

const GHANA_REGIONS = [
  "Greater Accra",
  "Ashanti",
  "Western",
  "Western North",
  "Central",
  "Eastern",
  "Volta",
  "Oti",
  "Northern",
  "North East",
  "Savannah",
  "Upper East",
  "Upper West",
  "Bono",
  "Bono East",
  "Ahafo",
];

// Heuristic only — MTN/Vodafone/AirtelTigo prefixes shift over time and
// with ported numbers, so this is a convenience default, not a source of
// truth. Always let the customer confirm/override the network.
const MOMO_NETWORK_PREFIXES = {
  MTN: ["024", "025", "053", "054", "055", "059"],
  "Vodafone Cash": ["020", "050"],
  AirtelTigo: ["026", "027", "056", "057"],
};

const detectMomoNetwork = (phone) => {
  const digits = phone.replace(/\D/g, "");
  const prefix = digits.slice(0, 3);
  const match = Object.entries(MOMO_NETWORK_PREFIXES).find(([, prefixes]) =>
    prefixes.includes(prefix)
  );
  return match ? match[0] : "";
};

const emptyForm = {
  fullName: "",
  phone: "",
  region: "",
  city: "",
  address: "",
  notes: "",
  deliveryMethod: "delivery", // "delivery" | "pickup"
  paymentMethod: "momo", // "momo" | "cod"
  momoNetwork: "",
  saveInfo: false,
  agreeTerms: false,
};

const validateField = (name, value, form) => {
  switch (name) {
    case "fullName":
      return value.trim().length >= 2 ? "" : "Enter your full name.";
    case "phone": {
      const digits = value.replace(/\D/g, "");
      return /^0[0-9]{9}$/.test(digits)
        ? ""
        : "Enter a valid 10-digit number, e.g. 0244123456.";
    }
    case "region":
      return form.deliveryMethod === "delivery" && !value
        ? "Select your region."
        : "";
    case "city":
      return form.deliveryMethod === "delivery" && !value.trim()
        ? "Enter your city or town."
        : "";
    case "address":
      return form.deliveryMethod === "delivery" && !value.trim()
        ? "Enter your delivery address."
        : "";
    case "agreeTerms":
      return value ? "" : "You must accept the terms to continue.";
    default:
      return "";
  }
};

const FIELDS_TO_VALIDATE = [
  "fullName",
  "phone",
  "region",
  "city",
  "address",
  "agreeTerms",
];

const CheckoutPage = () => {
  const router = useRouter();
  const { items, getCartTotal, currency, clearCart } = useCart();

  const [form, setForm] = useState(emptyForm);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | error
  const [errorMsg, setErrorMsg] = useState("");
  const liveRegionRef = useRef(null);
  const fieldRefs = useRef({});

  // ---- Restore / persist a draft so people don't retype everything
  // if they navigate away or their session drops. Guarded for SSR and
  // wrapped in try/catch since localStorage can throw in private mode.
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const saved = window.localStorage.getItem(DRAFT_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setForm((prev) => ({ ...prev, ...parsed, saveInfo: true }));
      }
    } catch {
      // Corrupt or inaccessible storage — just start with a blank form.
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (form.saveInfo) {
        const { agreeTerms, ...toSave } = form;
        window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(toSave));
      } else {
        window.localStorage.removeItem(DRAFT_STORAGE_KEY);
      }
    } catch {
      // Ignore storage failures — not critical to checkout succeeding.
    }
  }, [form]);

  const announce = useCallback((message) => {
    if (liveRegionRef.current) liveRegionRef.current.textContent = message;
  }, []);

  // ---- Totals -------------------------------------------------------
  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );
  const isPickup = form.deliveryMethod === "pickup";
  const deliveryFee = isPickup
    ? 0
    : subtotal >= FREE_DELIVERY_THRESHOLD
    ? 0
    : DELIVERY_FEE;
  const tax = +(subtotal * TAX_RATE).toFixed(2);
  const total = +(subtotal + deliveryFee + tax).toFixed(2);
  // Fall back to context's getCartTotal in case other pages rely on a
  // different calculation (e.g. an applied promo lives in CartContext).
  const contextTotal = getCartTotal();

  // ---- Field handling -------------------------------------------------
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const nextValue = type === "checkbox" ? checked : value;
    setForm((prev) => {
      const next = { ...prev, [name]: nextValue };
      if (name === "phone") {
        next.momoNetwork = detectMomoNetwork(value) || prev.momoNetwork;
      }
      return next;
    });
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const errors = useMemo(() => {
    const next = {};
    FIELDS_TO_VALIDATE.forEach((name) => {
      const err = validateField(name, form[name], form);
      if (err) next[name] = err;
    });
    return next;
  }, [form]);

  const fieldError = (name) => (touched[name] && errors[name]) || "";

  const registerRef = (name) => (el) => {
    fieldRefs.current[name] = el;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (items.length === 0) return;

    const allTouched = FIELDS_TO_VALIDATE.reduce(
      (acc, name) => ({ ...acc, [name]: true }),
      {}
    );
    setTouched(allTouched);

    const firstInvalid = FIELDS_TO_VALIDATE.find((name) => errors[name]);
    if (firstInvalid) {
      fieldRefs.current[firstInvalid]?.focus();
      announce("Please fix the highlighted fields before continuing.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");
    announce("Sending your order...");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          customer: {
            fullName: form.fullName,
            phone: form.phone,
            region: form.region,
            city: form.city,
            address: form.address,
            notes: form.notes,
          },
          delivery: {
            method: form.deliveryMethod,
            fee: deliveryFee,
            pickupLocation: isPickup ? PICKUP_LOCATION : undefined,
          },
          payment: {
            method: form.paymentMethod,
            momoNetwork: form.paymentMethod === "momo" ? form.momoNetwork : undefined,
          },
          items,
          subtotal,
          tax,
          total,
          currency,
        }),
      });
      clearTimeout(timeoutId);

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.message || "Payment could not be started.");
      }

      if (!form.saveInfo && typeof window !== "undefined") {
        try {
          window.localStorage.removeItem(DRAFT_STORAGE_KEY);
        } catch {
          /* ignore */
        }
      }

      clearCart();
      router.push(`/order-status?ref=${data.referenceId}`);
    } catch (err) {
      clearTimeout(timeoutId);
      setStatus("error");
      const message =
        err.name === "AbortError"
          ? "The request timed out. Check your connection and try again."
          : err.message || "Something went wrong. Please try again.";
      setErrorMsg(message);
      announce(message);
    }
  };

  if (items.length === 0) {
    return (
      <>
      <Head>
  <title>Checkout | Coast Republic</title>
  <meta
    name="description"
    content="Complete your Coast Republic order securely with MTN MoMo."
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* User-specific + collects PII (name, phone, address) — never index or preview */}
  <meta name="robots" content="noindex, nofollow" />
</Head>

        <Header />
        <div className="main-content">
          <div className="custom-container">
            <div className="container-center">
              <h1 className="heading-large">Checkout</h1>
              <p>Your cart is empty — nothing to check out.</p>
              <Link href="/products" className="btn-primary">
                Browse products
              </Link>
            </div>
          </div>
        </div>
        <FootBottom />
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
            <div className="checkout-page__heading-row">
              <h1 className="heading-large">Checkout</h1>
              <Link href="/cart" className="cart-continue-shopping">
                ← Back to cart
              </Link>
            </div>

            <p
              ref={liveRegionRef}
              className="sr-only"
              role="status"
              aria-live="polite"
            />

            <div className="checkout-layout">
              <form
                className="checkout-form"
                onSubmit={handleSubmit}
                noValidate
              >
                <fieldset className="checkout-fieldset">
                  <legend>Contact</legend>
                  <label>
                    Full Name
                    <input
                      type="text"
                      name="fullName"
                      required
                      ref={registerRef("fullName")}
                      value={form.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(fieldError("fullName"))}
                      aria-describedby={
                        fieldError("fullName") ? "err-fullName" : undefined
                      }
                    />
                    {fieldError("fullName") && (
                      <span id="err-fullName" className="checkout-field-error">
                        {fieldError("fullName")}
                      </span>
                    )}
                  </label>

                  <label>
                    Phone Number
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 0244123456"
                      ref={registerRef("phone")}
                      value={form.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(fieldError("phone"))}
                      aria-describedby={
                        fieldError("phone") ? "err-phone" : undefined
                      }
                    />
                    {fieldError("phone") && (
                      <span id="err-phone" className="checkout-field-error">
                        {fieldError("phone")}
                      </span>
                    )}
                  </label>
                </fieldset>

                <fieldset className="checkout-fieldset">
                  <legend>Delivery</legend>
                  <div
                    className="checkout-toggle-group"
                    role="radiogroup"
                    aria-label="Delivery method"
                  >
                    <label className="checkout-toggle">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value="delivery"
                        checked={form.deliveryMethod === "delivery"}
                        onChange={handleChange}
                      />
                      Deliver to me
                    </label>
                    <label className="checkout-toggle">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value="pickup"
                        checked={form.deliveryMethod === "pickup"}
                        onChange={handleChange}
                      />
                      Store pickup
                    </label>
                  </div>

                  {isPickup ? (
                    <p className="checkout-pickup-note">
                      Pick up your order from <strong>{PICKUP_LOCATION}</strong>.
                      We'll text you when it's ready.
                    </p>
                  ) : (
                    <>
                      <label>
                        Region
                        <select
                          name="region"
                          required
                          ref={registerRef("region")}
                          value={form.region}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-invalid={Boolean(fieldError("region"))}
                          aria-describedby={
                            fieldError("region") ? "err-region" : undefined
                          }
                        >
                          <option value="">Select region</option>
                          {GHANA_REGIONS.map((region) => (
                            <option key={region} value={region}>
                              {region}
                            </option>
                          ))}
                        </select>
                        {fieldError("region") && (
                          <span id="err-region" className="checkout-field-error">
                            {fieldError("region")}
                          </span>
                        )}
                      </label>

                      <label>
                        City / Town
                        <input
                          type="text"
                          name="city"
                          required
                          ref={registerRef("city")}
                          value={form.city}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-invalid={Boolean(fieldError("city"))}
                          aria-describedby={
                            fieldError("city") ? "err-city" : undefined
                          }
                        />
                        {fieldError("city") && (
                          <span id="err-city" className="checkout-field-error">
                            {fieldError("city")}
                          </span>
                        )}
                      </label>

                      <label>
                        Delivery Address
                        <input
                          type="text"
                          name="address"
                          required
                          ref={registerRef("address")}
                          value={form.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-invalid={Boolean(fieldError("address"))}
                          aria-describedby={
                            fieldError("address") ? "err-address" : undefined
                          }
                        />
                        {fieldError("address") && (
                          <span id="err-address" className="checkout-field-error">
                            {fieldError("address")}
                          </span>
                        )}
                      </label>
                    </>
                  )}

                  <label>
                    Order Notes (optional)
                    <textarea
                      name="notes"
                      rows={3}
                      maxLength={300}
                      placeholder="Delivery instructions, landmark, gate code..."
                      value={form.notes}
                      onChange={handleChange}
                    />
                    <span className="checkout-char-count">
                      {form.notes.length}/300
                    </span>
                  </label>
                </fieldset>

                <fieldset className="checkout-fieldset">
                  <legend>Payment</legend>
                  <div
                    className="checkout-toggle-group"
                    role="radiogroup"
                    aria-label="Payment method"
                  >
                    <label className="checkout-toggle">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="momo"
                        checked={form.paymentMethod === "momo"}
                        onChange={handleChange}
                      />
                      Mobile Money
                    </label>
                    <label className="checkout-toggle">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={form.paymentMethod === "cod"}
                        onChange={handleChange}
                      />
                      Cash on delivery
                    </label>
                  </div>

                  {form.paymentMethod === "momo" && (
                    <label>
                      Mobile Money Network
                      <select
                        name="momoNetwork"
                        value={form.momoNetwork}
                        onChange={handleChange}
                      >
                        <option value="">Select network</option>
                        {Object.keys(MOMO_NETWORK_PREFIXES).map((network) => (
                          <option key={network} value={network}>
                            {network}
                          </option>
                        ))}
                      </select>
                      {form.momoNetwork && (
                        <span className="checkout-hint">
                          Detected from your number — change it if that's wrong.
                        </span>
                      )}
                    </label>
                  )}

                  {form.paymentMethod === "cod" && (
                    <p className="checkout-hint">
                      Pay in cash when your order {isPickup ? "is collected" : "arrives"}.
                      Please have the exact amount ready where possible.
                    </p>
                  )}
                </fieldset>

                <label className="checkout-checkbox">
                  <input
                    type="checkbox"
                    name="saveInfo"
                    checked={form.saveInfo}
                    onChange={handleChange}
                  />
                  Save my details on this device for next time
                </label>

                <label className="checkout-checkbox">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    ref={registerRef("agreeTerms")}
                    checked={form.agreeTerms}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(fieldError("agreeTerms"))}
                    aria-describedby={
                      fieldError("agreeTerms") ? "err-agreeTerms" : undefined
                    }
                  />
                  I agree to the{" "}
                  <Link href="/terms" target="_blank">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/returns" target="_blank">
                    Return Policy
                  </Link>
                </label>
                {fieldError("agreeTerms") && (
                  <span id="err-agreeTerms" className="checkout-field-error">
                    {fieldError("agreeTerms")}
                  </span>
                )}

                {status === "error" && (
                  <p className="checkout-error" role="alert">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn-primary btn-checkout"
                  disabled={status === "submitting"}
                >
                  {status === "submitting"
                    ? form.paymentMethod === "momo"
                      ? "Sending MoMo prompt..."
                      : "Placing your order..."
                    : form.paymentMethod === "momo"
                    ? `Pay ${formatMoney(total, currency)} with Mobile Money`
                    : `Place order · ${formatMoney(total, currency)} on delivery`}
                </button>

                <p className="checkout-trust">
                  🔒 Your payment details are handled securely and never stored
                  on our servers.
                </p>
              </form>

              <aside className="checkout-summary" aria-label="Order summary">
                <h2>Order Summary</h2>
                <ul>
                  {items.map((item) => (
                    <li key={item.cartKey}>
                      <span className="checkout-summary__item-name">
                        {item.name} × {item.quantity}
                        {(item.size || item.color) && (
                          <span className="checkout-summary__item-meta">
                            {item.color && item.color}
                            {item.size && item.color && " · "}
                            {item.size && item.size}
                          </span>
                        )}
                      </span>
                      <span>{formatMoney(item.price * item.quantity, currency)}</span>
                    </li>
                  ))}
                </ul>

                <div className="checkout-summary__rows">
                  <div className="checkout-summary__row">
                    <span>Subtotal</span>
                    <span>{formatMoney(subtotal, currency)}</span>
                  </div>
                  <div className="checkout-summary__row">
                    <span>{isPickup ? "Pickup" : "Delivery"}</span>
                    <span>
                      {deliveryFee === 0 ? "Free" : formatMoney(deliveryFee, currency)}
                    </span>
                  </div>
                  <div className="checkout-summary__row">
                    <span>Estimated tax</span>
                    <span>{formatMoney(tax, currency)}</span>
                  </div>
                </div>

                <div className="checkout-summary__total">
                  <span>Total</span>
                  <strong>{formatMoney(total, currency)}</strong>
                </div>

                {!isPickup && deliveryFee > 0 && (
                  <p className="checkout-hint">
                    Add {formatMoney(FREE_DELIVERY_THRESHOLD - subtotal, currency)}{" "}
                    more for free delivery.
                  </p>
                )}
              </aside>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky mobile summary bar so the total/pay action stays visible
          while scrolling a long form on small screens. */}
      <div className="checkout-sticky-bar" aria-hidden="true">
        <span>{formatMoney(total, currency)}</span>
        <span className="checkout-sticky-bar__hint">
          {items.length} item{items.length !== 1 ? "s" : ""}
        </span>
      </div>
    </>
  );
};

export default CheckoutPage;
