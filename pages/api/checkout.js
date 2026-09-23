// pages/checkout.js
import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "@/components/Head/Header";
import Footer from "@/components/Footer/Footer";
import { useCart } from "@/context/CartContext";

const formatMoney = (amount, currency) =>
  `${currency} ${Number(amount || 0).toFixed(2)}`;

// ── Store policy constants ─────────────────────────────────────────────────
const TAX_RATE = 0.075;
const DELIVERY_FEE = 15;
const FREE_DELIVERY_THRESHOLD = 200;
const PICKUP_LOCATION = "Coast Collective Store — Osu, Accra";
const SUBMIT_TIMEOUT_MS = 20000;
const DRAFT_STORAGE_KEY = "coast-collective-checkout-draft";

const GHANA_REGIONS = [
  "Greater Accra", "Ashanti", "Western", "Western North", "Central",
  "Eastern", "Volta", "Oti", "Northern", "North East", "Savannah",
  "Upper East", "Upper West", "Bono", "Bono East", "Ahafo",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ── Form defaults ──────────────────────────────────────────────────────────
const emptyForm = {
  fullName: "",
  email: "",
  phone: "",
  region: "",
  city: "",
  address: "",
  notes: "",
  deliveryMethod: "delivery",
  paymentMethod: "paystack", // "paystack" | "cod"
  saveInfo: false,
  agreeTerms: false,
};

// ── Validation ─────────────────────────────────────────────────────────────
const validateField = (name, value, form) => {
  switch (name) {
    case "fullName":
      return value.trim().length >= 2 ? "" : "Enter your full name.";
    case "email":
      return EMAIL_REGEX.test(value.trim())
        ? ""
        : "Enter a valid email, e.g. name@example.com.";
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
  "fullName", "email", "phone", "region", "city", "address", "agreeTerms",
];

// ── Component ──────────────────────────────────────────────────────────────
const CheckoutPage = () => {
  const router = useRouter();
  const { items, currency, clearCart } = useCart();

  const [form, setForm] = useState(emptyForm);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | error
  const [errorMsg, setErrorMsg] = useState("");
  const liveRegionRef = useRef(null);
  const fieldRefs = useRef({});

  // ── Restore draft ────────────────────────────────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const saved = window.localStorage.getItem(DRAFT_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setForm((prev) => ({ ...prev, ...parsed, saveInfo: true }));
      }
    } catch {
      // Corrupt storage — start blank
    }
  }, []);

  // ── Persist draft ────────────────────────────────────────────────────────
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
      // Ignore — not critical
    }
  }, [form]);

  const announce = useCallback((message) => {
    if (liveRegionRef.current) liveRegionRef.current.textContent = message;
  }, []);

  // ── Totals ───────────────────────────────────────────────────────────────
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

  // ── Field handlers ───────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const nextValue = type === "checkbox" ? checked : value;
    setForm((prev) => ({ ...prev, [name]: nextValue }));
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

  // ── Submit ───────────────────────────────────────────────────────────────
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
    announce(
      form.paymentMethod === "paystack" ? "Redirecting to secure payment..." : "Placing your order..."
    );

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS);

    const payload = {
      customer: {
        fullName: form.fullName,
        email: form.email.trim().toLowerCase(),
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
      items,
      subtotal,
      tax,
      total,
      currency,
    };

    try {
      if (form.paymentMethod === "paystack") {
        const res = await fetch("/api/payments/paystack/initialize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
          body: JSON.stringify(payload),
        });
        clearTimeout(timeoutId);

        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          throw new Error(data.message || "Payment could not be started.");
        }

        // Full-page redirect to Paystack's hosted checkout — the order is
        // already saved as PENDING; nothing here marks it paid. Only the
        // server-side webhook does that once Paystack confirms payment.
        window.location.href = data.authorization_url;
        return;
      }

      // Cash on delivery — unchanged flow, confirms immediately.
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          ...payload,
          payment: { method: "cod" },
        }),
      });
      clearTimeout(timeoutId);

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.message || "Order could not be placed.");
      }

      if (!form.saveInfo && typeof window !== "undefined") {
        try {
          window.localStorage.removeItem(DRAFT_STORAGE_KEY);
        } catch { /* ignore */ }
      }

      clearCart();
      router.push(`/order-confirmation/${data.referenceId}`);
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

  // ── Empty cart state ─────────────────────────────────────────────────────
  if (items.length === 0) {
    return (
      <>
        <Head>
          <title>Checkout | Coast Collective</title>
          <meta
            name="description"
            content="Complete your Coast Collective order securely."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <Header />
        <div className="main-content">
          <div className="custom-container">
            <div className="container-center">
              <main>
                <h6 className="heading-large">Checkout</h6>
                <p>Your cart is empty — nothing to check out.</p>
                <Link href="/products" className="btn-primary">
                  Browse products
                </Link>
              </main>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // ── Main render ──────────────────────────────────────────────────────────
  return (
    <>
      <Head>
        <title>Checkout | Coast Collective</title>
        <meta
          name="description"
          content="Complete your Coast Collective order securely."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Header />
      <br /><br /><br /><br /><br />

      <div className="main-content">
        <div className="custom-container">
          <div className="container-center">

            <div className="checkout-page__heading-row">
              <h4 className="heading-large">Checkout</h4>
              <Link href="/cart" className="cart-continue-shopping">
                ← Back to cart
              </Link>
            </div>

            {/* Screen-reader live region */}
            <p
              ref={liveRegionRef}
              className="sr-only"
              role="status"
              aria-live="polite"
            />

            <div className="checkout-layout">

              {/* ── Form ── */}
              <form className="checkout-form" onSubmit={handleSubmit} noValidate>

                {/* Contact */}
                <fieldset className="checkout-fieldset">
                  <legend>Contact</legend>

                  <label>
                    Full Name
                    <input
                      type="text"
                      name="fullName"
                      required
                      autoComplete="name"
                      ref={registerRef("fullName")}
                      value={form.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(fieldError("fullName"))}
                      aria-describedby={fieldError("fullName") ? "err-fullName" : undefined}
                    />
                    {fieldError("fullName") && (
                      <span id="err-fullName" className="checkout-field-error">
                        {fieldError("fullName")}
                      </span>
                    )}
                  </label>

                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      autoComplete="email"
                      inputMode="email"
                      ref={registerRef("email")}
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(fieldError("email"))}
                      aria-describedby={fieldError("email") ? "err-email" : "hint-email"}
                    />
                    <span id="hint-email" className="checkout-hint">
                      We&apos;ll send your order confirmation and receipt here.
                    </span>
                    {fieldError("email") && (
                      <span id="err-email" className="checkout-field-error">
                        {fieldError("email")}
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
                      autoComplete="tel"
                      ref={registerRef("phone")}
                      value={form.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(fieldError("phone"))}
                      aria-describedby={fieldError("phone") ? "err-phone" : undefined}
                    />
                    {fieldError("phone") && (
                      <span id="err-phone" className="checkout-field-error">
                        {fieldError("phone")}
                      </span>
                    )}
                  </label>
                </fieldset>

                {/* Delivery */}
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
                      Pick up from <strong>{PICKUP_LOCATION}</strong>.
                      We&apos;ll text you when it&apos;s ready.
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
                          aria-describedby={fieldError("region") ? "err-region" : undefined}
                        >
                          <option value="">Select region</option>
                          {GHANA_REGIONS.map((r) => (
                            <option key={r} value={r}>{r}</option>
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
                          autoComplete="address-level2"
                          ref={registerRef("city")}
                          value={form.city}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-invalid={Boolean(fieldError("city"))}
                          aria-describedby={fieldError("city") ? "err-city" : undefined}
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
                          autoComplete="street-address"
                          ref={registerRef("address")}
                          value={form.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-invalid={Boolean(fieldError("address"))}
                          aria-describedby={fieldError("address") ? "err-address" : undefined}
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

                {/* Payment */}
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
                        value="paystack"
                        checked={form.paymentMethod === "paystack"}
                        onChange={handleChange}
                      />
                      Card / Mobile Money
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

                  {form.paymentMethod === "paystack" && (
                    <p className="checkout-hint">
                      You&apos;ll be taken to Paystack&apos;s secure checkout to pay by
                      card or Mobile Money (MTN, Vodafone Cash, AirtelTigo).
                    </p>
                  )}

                  {form.paymentMethod === "cod" && (
                    <p className="checkout-hint">
                      Pay in cash when your order{" "}
                      {isPickup ? "is collected" : "arrives"}. Please have the
                      exact amount ready where possible.
                    </p>
                  )}
                </fieldset>

                {/* Preferences */}
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
                  <Link href="/terms" target="_blank">Terms of Service</Link>
                  {" "}and{" "}
                  <Link href="/returns" target="_blank">Return Policy</Link>
                </label>
                {fieldError("agreeTerms") && (
                  <span id="err-agreeTerms" className="checkout-field-error">
                    {fieldError("agreeTerms")}
                  </span>
                )}

                {/* Submit error */}
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
                    ? form.paymentMethod === "paystack"
                      ? "Redirecting to payment..."
                      : "Placing your order..."
                    : form.paymentMethod === "paystack"
                    ? `Pay ${formatMoney(total, currency)} securely`
                    : `Place order · ${formatMoney(total, currency)} on delivery`}
                </button>

                <p className="checkout-trust">
                  🔒 Card and Mobile Money payments are processed by Paystack.
                  Your payment details are never stored on our servers.
                </p>
              </form>

              {/* ── Order summary sidebar ── */}
              <aside className="checkout-summary" aria-label="Order summary">
                <h6>Order Summary</h6>
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
                      {deliveryFee === 0
                        ? "Free"
                        : formatMoney(deliveryFee, currency)}
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
                    Add{" "}
                    {formatMoney(FREE_DELIVERY_THRESHOLD - subtotal, currency)}{" "}
                    more for free delivery.
                  </p>
                )}
              </aside>
            </div>

          </div>
        </div>
      </div>

      {/* Sticky mobile total bar */}
      <div className="checkout-sticky-bar" aria-hidden="true">
        <span>{formatMoney(total, currency)}</span>
        <span className="checkout-sticky-bar__hint">
          {items.length} item{items.length !== 1 ? "s" : ""}
        </span>
      </div>

      <Footer />
    </>
  );
};

export default CheckoutPage;
