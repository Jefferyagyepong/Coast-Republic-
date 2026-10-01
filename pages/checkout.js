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

// ── Styles (scoped via unique "co-" class names) ───────────────────────────
// Mobile-first: everything is a normal block. The summary only sits beside
// the form at >= 900px.
const checkoutCss = `
.co-page {
  display: block;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 2.5rem 1rem 6rem;
  box-sizing: border-box;
  color: #111;
  margin-top: 3rem;
}
.co-page *, .co-page *::before, .co-page *::after { box-sizing: inherit; }

.co-heading-row {
  display: block;
  margin-bottom: 1.25rem;
}
.co-heading-row h1 {
  display: block;
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
  line-height: 1.2;
}
.co-back {
  display: inline-block;
  font-size: 0.95rem;
}

.co-layout { display: block; }
.co-form, .co-summary { display: block; width: 100%; min-width: 0; }
.co-summary { margin-top: 1.5rem; }

.co-fieldset {
  display: block;
  width: 100%;
  min-width: 0;
  margin: 0 0 1rem;
  padding: 1rem;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  background: transparent;
}
.co-fieldset legend { padding: 0 0.25rem; font-weight: 600; }

.co-field { display: block; width: 100%; margin: 0 0 1rem; }
.co-field:last-child { margin-bottom: 0; }
.co-label {
  display: block;
  margin: 0 0 0.35rem;
  font-size: 0.95rem;
  font-weight: 500;
}

.co-form input[type="text"],
.co-form input[type="email"],
.co-form input[type="tel"],
.co-form select,
.co-form textarea {
  display: block;
  width: 100%;
  max-width: 100%;
  min-height: 44px;
  margin: 0;
  padding: 0.65rem 0.75rem;
  font: inherit;
  font-size: 16px;
  color: inherit;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
}
.co-form textarea { resize: vertical; }
.co-form input[aria-invalid="true"],
.co-form select[aria-invalid="true"] { border-color: #c0392b; }
.co-form input:focus-visible,
.co-form select:focus-visible,
.co-form textarea:focus-visible,
.co-form button:focus-visible {
  outline: 2px solid #111;
  outline-offset: 2px;
}

.co-hint, .co-trust, .co-count {
  display: block;
  margin: 0.35rem 0 0;
  font-size: 0.85rem;
  line-height: 1.4;
  color: #6b6b6b;
}
.co-count { text-align: right; }
.co-field-error {
  display: block;
  margin: 0.35rem 0 0;
  font-size: 0.85rem;
  color: #c0392b;
}
.co-error {
  display: block;
  margin: 0 0 1rem;
  padding: 0.75rem 1rem;
  color: #c0392b;
  background: #fdecea;
  border-radius: 8px;
}
.co-note {
  display: block;
  margin: 0 0 1rem;
  padding: 0.75rem 1rem;
  background: #f4f4f4;
  border-radius: 8px;
}

.co-toggle-group { display: block; margin: 0 0 1rem; }
.co-toggle {
  display: block;
  width: 100%;
  min-height: 44px;
  margin: 0 0 0.5rem;
  padding: 0.7rem 0.75rem;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  cursor: pointer;
}
.co-toggle:last-child { margin-bottom: 0; }
.co-toggle input,
.co-check input {
  display: inline-block;
  width: 1.1rem;
  height: 1.1rem;
  margin: 0 0.6rem 0 0;
  vertical-align: middle;
}
.co-toggle:has(input:checked) { border-color: #111; background: #f4f4f4; }

.co-check { display: block; margin: 0 0 0.75rem; line-height: 1.4; }
.co-check input { vertical-align: -0.15rem; }

.co-submit {
  display: block;
  width: 100%;
  min-height: 48px;
  margin: 1rem 0 0;
  white-space: normal;
}
.co-submit:disabled { opacity: 0.6; cursor: not-allowed; }
.co-trust { margin-top: 0.75rem; }

/* ── Order summary ── */
.co-summary {
  padding: 1rem;
  background: #f7f7f7;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
}
.co-summary h2 {
  display: block;
  margin: 0 0 0.75rem;
  font-size: 1.1rem;
}
.co-items { display: block; margin: 0 0 1rem; padding: 0; list-style: none; }
.co-item {
  display: block;
  margin: 0 0 0.75rem;
  padding: 0 0 0.75rem;
  border-bottom: 1px solid #e3e3e3;
}
.co-item:last-child { margin-bottom: 0; }
.co-item-name {
  display: block;
  overflow-wrap: anywhere;
  word-break: normal;
}
.co-item-meta {
  display: block;
  font-size: 0.85rem;
  color: #6b6b6b;
}
.co-item-price { display: block; margin-top: 0.25rem; font-weight: 600; }

.co-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 0.75rem;
  margin: 0 0 0.4rem;
}
.co-row span:last-child { white-space: nowrap; }
.co-total {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 0.75rem;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #d9d9d9;
  font-size: 1.1rem;
}

/* ── Sticky total bar (phones only) ── */
.co-sticky {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: center;
  padding: 0.75rem 1rem calc(0.75rem + env(safe-area-inset-bottom, 0px));
  font-weight: 600;
  background: #fff;
  border-top: 1px solid #d9d9d9;
}
.co-sticky-hint { font-weight: 400; font-size: 0.85rem; color: #6b6b6b; }

/* ── Tablet ── */
@media (min-width: 600px) {
  .co-page { padding-left: 1.5rem; padding-right: 1.5rem; }
  .co-fieldset { padding: 1.25rem; }
  .co-toggle-group { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; }
  .co-toggle { margin: 0; }
}

/* ── Wide: summary becomes a side column ── */
@media (min-width: 900px) {
  .co-page { padding-bottom: 3rem; }
  .co-heading-row { display: flex; justify-content: space-between; align-items: baseline; }
  .co-heading-row h1 { margin: 0; }
  .co-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(300px, 380px);
    gap: 2rem;
    align-items: start;
  }
  .co-summary { margin-top: 0; position: sticky; top: 6rem; }
  .co-sticky { display: none; }
}
`;

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
      form.paymentMethod === "paystack"
        ? "Redirecting to secure payment..."
        : "Placing your order..."
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

      // Cash on delivery — confirms immediately.
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

  const headTags = (
    <Head>
      <title>Checkout | Coast Collective</title>
      <meta
        name="description"
        content="Complete your Coast Collective order securely."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );

  // ── Empty cart state ─────────────────────────────────────────────────────
  if (items.length === 0) {
    return (
      <>
        {headTags}
        <Header />
        <style jsx global>{checkoutCss}</style>
        <main className="co-page">
          <h1 className="co-heading-row">Checkout</h1>
          <p>Your cart is empty — nothing to check out.</p>
          <Link href="/products" className="btn-primary">
            Browse products
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  // ── Main render ──────────────────────────────────────────────────────────
  return (
    <>
      {headTags}
      <Header />
      <style jsx global>{checkoutCss}</style>

      <main className="co-page">
        <div className="co-heading-row">
     
          <h1>Checkout</h1>
          <Link href="/cart" className="co-back">
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

        <div className="co-layout">
          {/* ── Form ── */}
          <form className="co-form" onSubmit={handleSubmit} noValidate>
            {/* Contact */}
            <fieldset className="co-fieldset">
              <legend>Contact</legend>

              <div className="co-field">
                <label className="co-label" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
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
                  <span id="err-fullName" className="co-field-error">
                    {fieldError("fullName")}
                  </span>
                )}
              </div>

              <div className="co-field">
                <label className="co-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
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
                <span id="hint-email" className="co-hint">
                  We&apos;ll send your order confirmation and receipt here.
                </span>
                {fieldError("email") && (
                  <span id="err-email" className="co-field-error">
                    {fieldError("email")}
                  </span>
                )}
              </div>

              <div className="co-field">
                <label className="co-label" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
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
                  <span id="err-phone" className="co-field-error">
                    {fieldError("phone")}
                  </span>
                )}
              </div>
            </fieldset>

            {/* Delivery */}
            <fieldset className="co-fieldset">
              <legend>Delivery</legend>

              <div
                className="co-toggle-group"
                role="radiogroup"
                aria-label="Delivery method"
              >
                <label className="co-toggle">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="delivery"
                    checked={form.deliveryMethod === "delivery"}
                    onChange={handleChange}
                  />
                  Deliver to me
                </label>
                <label className="co-toggle">
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
                <p className="co-note">
                  Pick up from <strong>{PICKUP_LOCATION}</strong>.
                  We&apos;ll text you when it&apos;s ready.
                </p>
              ) : (
                <>
                  <div className="co-field">
                    <label className="co-label" htmlFor="region">
                      Region
                    </label>
                    <select
                      id="region"
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
                      <span id="err-region" className="co-field-error">
                        {fieldError("region")}
                      </span>
                    )}
                  </div>

                  <div className="co-field">
                    <label className="co-label" htmlFor="city">
                      City / Town
                    </label>
                    <input
                      id="city"
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
                      <span id="err-city" className="co-field-error">
                        {fieldError("city")}
                      </span>
                    )}
                  </div>

                  <div className="co-field">
                    <label className="co-label" htmlFor="address">
                      Delivery Address
                    </label>
                    <input
                      id="address"
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
                      <span id="err-address" className="co-field-error">
                        {fieldError("address")}
                      </span>
                    )}
                  </div>
                </>
              )}

              <div className="co-field">
                <label className="co-label" htmlFor="notes">
                  Order Notes (optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  maxLength={300}
                  placeholder="Delivery instructions, landmark, gate code..."
                  value={form.notes}
                  onChange={handleChange}
                />
                <span className="co-count">{form.notes.length}/300</span>
              </div>
            </fieldset>

            {/* Payment */}
            <fieldset className="co-fieldset">
              <legend>Payment</legend>

              <div
                className="co-toggle-group"
                role="radiogroup"
                aria-label="Payment method"
              >
                <label className="co-toggle">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paystack"
                    checked={form.paymentMethod === "paystack"}
                    onChange={handleChange}
                  />
                  Card / Mobile Money
                </label>
                <label className="co-toggle">
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
                <p className="co-hint">
                  You&apos;ll be taken to Paystack&apos;s secure checkout to pay by
                  card or Mobile Money (MTN, Vodafone Cash, AirtelTigo).
                </p>
              )}

              {form.paymentMethod === "cod" && (
                <p className="co-hint">
                  Pay in cash when your order{" "}
                  {isPickup ? "is collected" : "arrives"}. Please have the
                  exact amount ready where possible.
                </p>
              )}
            </fieldset>

            {/* Preferences */}
            <label className="co-check">
              <input
                type="checkbox"
                name="saveInfo"
                checked={form.saveInfo}
                onChange={handleChange}
              />
              Save my details on this device for next time
            </label>

            <label className="co-check">
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
              <span id="err-agreeTerms" className="co-field-error">
                {fieldError("agreeTerms")}
              </span>
            )}

            {/* Submit error */}
            {status === "error" && (
              <p className="co-error" role="alert">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              className="btn-primary co-submit"
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

            <p className="co-trust">
              🔒 Card and Mobile Money payments are processed by Paystack.
              Your payment details are never stored on our servers.
            </p>
          </form>

          {/* ── Order summary (block on phones, side column on wide screens) ── */}
          <section className="co-summary" aria-label="Order summary">
            <h2>Order Summary</h2>

            <ul className="co-items">
              {items.map((item) => (
                <li key={item.cartKey} className="co-item">
                  <span className="co-item-name">
                    {item.name} × {item.quantity}
                  </span>
                  {(item.size || item.color) && (
                    <span className="co-item-meta">
                      {[item.color, item.size].filter(Boolean).join(" · ")}
                    </span>
                  )}
                  <span className="co-item-price">
                    {formatMoney(item.price * item.quantity, currency)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="co-row">
              <span>Subtotal</span>
              <span>{formatMoney(subtotal, currency)}</span>
            </div>
            <div className="co-row">
              <span>{isPickup ? "Pickup" : "Delivery"}</span>
              <span>
                {deliveryFee === 0 ? "Free" : formatMoney(deliveryFee, currency)}
              </span>
            </div>
            <div className="co-row">
              <span>Estimated tax</span>
              <span>{formatMoney(tax, currency)}</span>
            </div>

            <div className="co-total">
              <span>Total</span>
              <strong>{formatMoney(total, currency)}</strong>
            </div>

            {!isPickup && deliveryFee > 0 && (
              <p className="co-hint">
                Add {formatMoney(FREE_DELIVERY_THRESHOLD - subtotal, currency)}{" "}
                more for free delivery.
              </p>
            )}
          </section>
        </div>
      </main>

      {/* Sticky mobile total bar */}
      <div className="co-sticky" aria-hidden="true">
        <span>{formatMoney(total, currency)}</span>
        <span className="co-sticky-hint">
          {items.length} item{items.length !== 1 ? "s" : ""}
        </span>
      </div>

      <Footer />
    </>
  );
};

export default CheckoutPage;
