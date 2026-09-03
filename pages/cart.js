import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Head/Header";
import Footer from "@/components/Footer/Footer";
import { useCart } from "@/context/CartContext";

const formatMoney = (amount, currency) =>
  `${currency} ${Number(amount || 0).toFixed(2)}`;

// --- Store policy constants -------------------------------------------
// Move these to a config/env file if they differ per region or need to
// come from the backend (e.g. shipping rules tied to warehouse location).
const FREE_SHIPPING_THRESHOLD = 75;
const FLAT_SHIPPING_RATE = 6.99;
const TAX_RATE = 0.075; // 7.5% - replace with real tax lookup at checkout
const UNDO_WINDOW_MS = 5000;
const MAX_QUANTITY = 20;

// Mock promo codes. In production this should be validated server-side
// against a coupons table/API so codes can't be guessed from the bundle.
const PROMO_CODES = {
  WELCOME10: { type: "percent", value: 10, label: "10% off" },
  SHIP5: { type: "flat", value: 5, label: "$5 off" },
};

const CartPage = () => {
  const {
    items,
    removeFromCart,
    updateQuantity,
    getCartCount,
    getCartTotal,
    currency,
    addToCart, // optional — guarded below in case CartContext doesn't expose it yet
  } = useCart();

  // ---- Local UI state ---------------------------------------------------
  const [savedForLater, setSavedForLater] = useState([]);
  const [pendingRemovals, setPendingRemovals] = useState({}); // cartKey -> item snapshot
  const [promoInput, setPromoInput] = useState("");
  const [promoError, setPromoError] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [qtyDrafts, setQtyDrafts] = useState({}); // cartKey -> string being typed
  const liveRegionRef = useRef(null);
  const timersRef = useRef({});

  useEffect(() => {
    // Clear any pending undo timers on unmount so we don't call setState
    // on an unmounted component or leave a removal half-finished.
    return () => {
      Object.values(timersRef.current).forEach(clearTimeout);
    };
  }, []);

  const cartCount = getCartCount();

  // Items still visibly in the list (i.e. not mid-removal).
  const visibleItems = useMemo(
    () => items.filter((item) => !pendingRemovals[item.cartKey]),
    [items, pendingRemovals]
  );

  // Compute totals from visibleItems directly rather than trusting
  // getCartTotal(), so a pending removal is reflected immediately in the
  // summary even before the underlying context state updates.
  const subtotal = useMemo(
    () => visibleItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [visibleItems]
  );

  const discount = useMemo(() => {
    if (!appliedPromo) return 0;
    if (appliedPromo.type === "percent") {
      return +(subtotal * (appliedPromo.value / 100)).toFixed(2);
    }
    return Math.min(appliedPromo.value, subtotal);
  }, [appliedPromo, subtotal]);

  const discountedSubtotal = Math.max(subtotal - discount, 0);
  const amountToFreeShipping = Math.max(
    FREE_SHIPPING_THRESHOLD - discountedSubtotal,
    0
  );
  const shipping =
    visibleItems.length === 0
      ? 0
      : amountToFreeShipping > 0
      ? FLAT_SHIPPING_RATE
      : 0;
  const tax = +(discountedSubtotal * TAX_RATE).toFixed(2);
  const total = +(discountedSubtotal + shipping + tax).toFixed(2);
  const freeShippingProgress = Math.min(
    (discountedSubtotal / FREE_SHIPPING_THRESHOLD) * 100,
    100
  );

  const announce = useCallback((message) => {
    if (liveRegionRef.current) liveRegionRef.current.textContent = message;
  }, []);

  // ---- Quantity handling --------------------------------------------
  const clampQty = (item, next) =>
    Math.max(1, Math.min(MAX_QUANTITY, item.stock ?? MAX_QUANTITY, next));

  const handleStep = (item, delta) => {
    const next = clampQty(item, item.quantity + delta);
    updateQuantity(item.cartKey, next);
    announce(`${item.name} quantity set to ${next}`);
  };

  const handleQtyInputChange = (cartKey, value) => {
    // Allow the field to be edited freely; only digits are kept.
    if (value === "" || /^[0-9]+$/.test(value)) {
      setQtyDrafts((prev) => ({ ...prev, [cartKey]: value }));
    }
  };

  const commitQtyInput = (item) => {
    const draft = qtyDrafts[item.cartKey];
    if (draft === undefined) return;
    const parsed = parseInt(draft, 10);
    const next = Number.isNaN(parsed) ? item.quantity : clampQty(item, parsed);
    updateQuantity(item.cartKey, next);
    setQtyDrafts((prev) => {
      const { [item.cartKey]: _drop, ...rest } = prev;
      return rest;
    });
    announce(`${item.name} quantity set to ${next}`);
  };

  // ---- Remove with undo ----------------------------------------------
  const handleRemove = (item) => {
    setPendingRemovals((prev) => ({ ...prev, [item.cartKey]: item }));
    announce(`${item.name} removed. Undo available for a few seconds.`);
    timersRef.current[item.cartKey] = setTimeout(() => {
      removeFromCart(item.cartKey);
      setPendingRemovals((prev) => {
        const { [item.cartKey]: _drop, ...rest } = prev;
        return rest;
      });
      delete timersRef.current[item.cartKey];
    }, UNDO_WINDOW_MS);
  };

  const handleUndoRemove = (cartKey) => {
    clearTimeout(timersRef.current[cartKey]);
    delete timersRef.current[cartKey];
    setPendingRemovals((prev) => {
      const { [cartKey]: _drop, ...rest } = prev;
      return rest;
    });
    announce("Item restored to your cart.");
  };

  // ---- Save for later ---------------------------------------------------
  const handleSaveForLater = (item) => {
    setSavedForLater((prev) => [...prev, item]);
    removeFromCart(item.cartKey);
    announce(`${item.name} moved to Saved for later.`);
  };

  const handleMoveToCart = (item) => {
    if (typeof addToCart === "function") {
      addToCart(item, item.quantity, { size: item.size, color: item.color });
    }
    setSavedForLater((prev) => prev.filter((saved) => saved.cartKey !== item.cartKey));
    announce(`${item.name} moved back to your cart.`);
  };

  const handleRemoveSaved = (cartKey) => {
    setSavedForLater((prev) => prev.filter((item) => item.cartKey !== cartKey));
  };

  // ---- Promo code ---------------------------------------------------
  const handleApplyPromo = (e) => {
    e.preventDefault();
    const code = promoInput.trim().toUpperCase();
    if (!code) return;
    const match = PROMO_CODES[code];
    if (!match) {
      setPromoError("That code isn't valid or has expired.");
      setAppliedPromo(null);
      return;
    }
    setAppliedPromo({ code, ...match });
    setPromoError("");
    announce(`Promo code ${code} applied.`);
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setPromoInput("");
    setPromoError("");
  };

  const isEmpty = visibleItems.length === 0;

  return (
    <>
  <Head>
  <title>Your Cart | Coast Republic</title>
  <meta
    name="description"
    content="Review the items in your Coast Republic cart before checkout."
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Don't index or surface this page — it's user-specific and has no
      canonical shareable content */}
  <meta name="robots" content="noindex, nofollow" />
</Head>

      <Header />
      <div className="main-content">
        <div className="custom-container">
          <div className="container-center cart-page">
            {/* Screen-reader-only live region for quantity/remove/undo feedback */}
            <p
              ref={liveRegionRef}
              className="sr-only"
              role="status"
              aria-live="polite"
            />

            <div className="cart-page__heading-row">
              <h1 className="heading-large">Shopping Cart</h1>
              {!isEmpty && (
                <Link href="/products" className="cart-continue-shopping">
                  ← Continue shopping
                </Link>
              )}
            </div>

            {isEmpty ? (
              <div className="cart-empty">
                <p className="cart-empty__title">Your cart is empty.</p>
                <p className="cart-empty__hint">
                  Items you add will show up here. Not sure where to start?
                </p>
                <Link href="/products" className="btn-primary">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <>
                <p className="cart-summary-line">
                  Total Items: {cartCount} &nbsp;|&nbsp; Total Price:{" "}
                  {formatMoney(subtotal, currency)}
                </p>

                {/* Free shipping progress */}
                <div className="cart-shipping-progress" aria-hidden={false}>
                  {amountToFreeShipping > 0 ? (
                    <p className="cart-shipping-progress__label">
                      Add {formatMoney(amountToFreeShipping, currency)} more for{" "}
                      <strong>free shipping</strong>
                    </p>
                  ) : (
                    <p className="cart-shipping-progress__label cart-shipping-progress__label--met">
                      You've unlocked free shipping 🎉
                    </p>
                  )}
                  <div
                    className="cart-shipping-progress__track"
                    role="progressbar"
                    aria-valuenow={Math.round(freeShippingProgress)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="cart-shipping-progress__fill"
                      style={{ width: `${freeShippingProgress}%` }}
                    />
                  </div>
                </div>

                <div className="cart-layout">
                  <ul className="cart-list">
                    {items.map((item) => {
                      const isPending = Boolean(pendingRemovals[item.cartKey]);
                      const draftValue =
                        qtyDrafts[item.cartKey] ?? String(item.quantity);
                      const lowStock =
                        typeof item.stock === "number" && item.stock <= 5;

                      if (isPending) {
                        return (
                          <li
                            key={item.cartKey}
                            className="cart-item cart-item--removing"
                          >
                            <p className="cart-item__removing-text">
                              {item.name} removed from cart.
                            </p>
                            <button
                              type="button"
                              className="cart-item__undo"
                              onClick={() => handleUndoRemove(item.cartKey)}
                            >
                              Undo
                            </button>
                          </li>
                        );
                      }

                      return (
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
                            {lowStock && (
                              <p className="cart-item__low-stock">
                                Only {item.stock} left in stock
                              </p>
                            )}
                            <div className="cart-item__actions">
                              <button
                                type="button"
                                className="cart-item__link-action"
                                onClick={() => handleSaveForLater(item)}
                              >
                                Save for later
                              </button>
                              <button
                                type="button"
                                className="cart-item__link-action cart-item__link-action--remove"
                                onClick={() => handleRemove(item)}
                                aria-label={`Remove ${item.name} from cart`}
                              >
                                Remove
                              </button>
                            </div>
                          </div>

                          <div className="cart-item__qty">
                            <button
                              type="button"
                              aria-label={`Decrease quantity of ${item.name}`}
                              disabled={item.quantity <= 1}
                              onClick={() => handleStep(item, -1)}
                            >
                              −
                            </button>
                            <input
                              type="text"
                              inputMode="numeric"
                              className="cart-item__qty-input"
                              aria-label={`Quantity of ${item.name}`}
                              value={draftValue}
                              onChange={(e) =>
                                handleQtyInputChange(item.cartKey, e.target.value)
                              }
                              onBlur={() => commitQtyInput(item)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.currentTarget.blur();
                                }
                              }}
                            />
                            <button
                              type="button"
                              aria-label={`Increase quantity of ${item.name}`}
                              disabled={
                                typeof item.stock === "number" &&
                                item.quantity >= item.stock
                              }
                              onClick={() => handleStep(item, 1)}
                            >
                              +
                            </button>
                          </div>

                          <p className="cart-item__line-total">
                            {formatMoney(item.price * item.quantity, currency)}
                          </p>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Sticky order summary */}
                  <aside className="cart-summary-card" aria-label="Order summary">
                    <h2 className="cart-summary-card__title">Order Summary</h2>

                    <form className="cart-promo" onSubmit={handleApplyPromo}>
                      <label htmlFor="promo-code" className="cart-promo__label">
                        Promo code
                      </label>
                      {appliedPromo ? (
                        <div className="cart-promo__applied">
                          <span>
                            {appliedPromo.code} applied ({appliedPromo.label})
                          </span>
                          <button type="button" onClick={handleRemovePromo}>
                            Remove
                          </button>
                        </div>
                      ) : (
                        <div className="cart-promo__row">
                          <input
                            id="promo-code"
                            type="text"
                            placeholder="Enter code"
                            value={promoInput}
                            onChange={(e) => {
                              setPromoInput(e.target.value);
                              setPromoError("");
                            }}
                          />
                          <button type="submit" className="btn-secondary">
                            Apply
                          </button>
                        </div>
                      )}
                      {promoError && (
                        <p className="cart-promo__error" role="alert">
                          {promoError}
                        </p>
                      )}
                    </form>

                    <dl className="cart-summary-card__rows">
                      <div className="cart-summary-card__row">
                        <dt>Subtotal</dt>
                        <dd>{formatMoney(subtotal, currency)}</dd>
                      </div>
                      {appliedPromo && (
                        <div className="cart-summary-card__row cart-summary-card__row--discount">
                          <dt>Discount ({appliedPromo.code})</dt>
                          <dd>−{formatMoney(discount, currency)}</dd>
                        </div>
                      )}
                      <div className="cart-summary-card__row">
                        <dt>Shipping</dt>
                        <dd>{shipping === 0 ? "Free" : formatMoney(shipping, currency)}</dd>
                      </div>
                      <div className="cart-summary-card__row">
                        <dt>Estimated tax</dt>
                        <dd>{formatMoney(tax, currency)}</dd>
                      </div>
                    </dl>

                    <div className="cart-summary-card__total">
                      <span>Total</span>
                      <strong>{formatMoney(total, currency)}</strong>
                    </div>

                    <Link href="/checkout" className="btn-primary btn-checkout">
                      Proceed to Checkout
                    </Link>

                    <p className="cart-summary-card__trust">
                      🔒 Secure checkout · Easy 30-day returns
                    </p>
                  </aside>
                </div>

                {savedForLater.length > 0 && (
                  <section className="cart-saved" aria-label="Saved for later">
                    <h2 className="cart-saved__title">
                      Saved for later ({savedForLater.length})
                    </h2>
                    <ul className="cart-saved__list">
                      {savedForLater.map((item) => (
                        <li key={item.cartKey} className="cart-saved__item">
                          {item.image && (
                            <div className="cart-item__image">
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={64}
                                height={64}
                              />
                            </div>
                          )}
                          <div className="cart-saved__details">
                            <p className="cart-item__name">{item.name}</p>
                            <p className="cart-item__price">
                              {formatMoney(item.price, currency)}
                            </p>
                          </div>
                          <div className="cart-saved__actions">
                            <button
                              type="button"
                              className="btn-secondary"
                              onClick={() => handleMoveToCart(item)}
                            >
                              Move to cart
                            </button>
                            <button
                              type="button"
                              className="cart-item__link-action cart-item__link-action--remove"
                              onClick={() => handleRemoveSaved(item.cartKey)}
                            >
                              Remove
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
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
