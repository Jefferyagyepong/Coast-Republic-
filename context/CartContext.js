// context/CartContext.js
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useMemo,
  useCallback,
} from "react";

const CartContext = createContext(undefined);
const STORAGE_KEY = "coast-republic-cart";
const CURRENCY = "GHS";

// ── Cart key ───────────────────────────────────────────────────────────────

const getCartKey = (item) =>
  `${item.id}__${item.size ?? ""}__${item.color ?? ""}`;

// ── Reducer ────────────────────────────────────────────────────────────────

function cartReducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return action.payload ?? state;

    case "ADD_ITEM": {
      const { product, quantity = 1 } = action.payload;
      const newKey = getCartKey(product);
      const exists = state.items.some((i) => i.cartKey === newKey);

      if (exists) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.cartKey === newKey
              ? { ...i, quantity: i.quantity + quantity }
              : i
          ),
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            id: product.id,
            name: product.name,
            price: Number(product.price) || 0,
            image: product.image ?? null,
            size: product.size ?? null,
            color: product.color ?? null,
            quantity,
            cartKey: newKey,
          },
        ],
      };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((i) => i.cartKey !== action.payload.cartKey),
      };

    case "UPDATE_QUANTITY": {
      const { cartKey, quantity } = action.payload;
      if (quantity < 1) {
        return {
          ...state,
          items: state.items.filter((i) => i.cartKey !== cartKey),
        };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.cartKey === cartKey ? { ...i, quantity } : i
        ),
      };
    }

    case "CLEAR_CART":
      return { ...state, items: [] };

    default:
      return state;
  }
}

// ── Initial state ──────────────────────────────────────────────────────────

const initialState = { items: [] };

// ── SSR-safe localStorage ──────────────────────────────────────────────────

const storage = {
  get: (key) => {
    if (typeof window === "undefined") return null;
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },
  set: (key, value) => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error("Failed to save cart:", err);
    }
  },
};

// ── Provider ───────────────────────────────────────────────────────────────

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Hydrate from localStorage on mount
  useEffect(() => {
    const saved = storage.get(STORAGE_KEY);
    if (saved) dispatch({ type: "HYDRATE", payload: saved });
  }, []);

  // Persist on every state change
  useEffect(() => {
    storage.set(STORAGE_KEY, state);
  }, [state]);

  // ── Actions ──────────────────────────────────────────────────────────────

  const addToCart = useCallback(
    (product, quantity = 1) =>
      dispatch({ type: "ADD_ITEM", payload: { product, quantity } }),
    []
  );

  const removeFromCart = useCallback(
    (cartKey) => dispatch({ type: "REMOVE_ITEM", payload: { cartKey } }),
    []
  );

  const updateQuantity = useCallback(
    (cartKey, quantity) =>
      dispatch({ type: "UPDATE_QUANTITY", payload: { cartKey, quantity } }),
    []
  );

  const clearCart = useCallback(
    () => dispatch({ type: "CLEAR_CART" }),
    []
  );

  // ── Derived values ───────────────────────────────────────────────────────

  const cartCount = useMemo(
    () => state.items.reduce((sum, i) => sum + i.quantity, 0),
    [state.items]
  );

  const cartTotal = useMemo(
    () =>
      Number(
        state.items
          .reduce((sum, i) => sum + i.price * i.quantity, 0)
          .toFixed(2)
      ),
    [state.items]
  );

  // ── Context value ─────────────────────────────────────────────────────────

  const value = useMemo(
    () => ({
      items: state.items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartCount,            // ✅ primary name — used in CartPage + Navbar
      cartTotal,            // ✅ primary name — used in CartPage summary
      totalItems: cartCount, // aliases for any older code
      totalPrice: cartTotal,
      currency: CURRENCY,
    }),
    [
      state.items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartCount,
      cartTotal,
    ]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// ── Hook ──────────────────────────────────────────────────────────────────

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}