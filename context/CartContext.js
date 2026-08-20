import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext(undefined);
const STORAGE_KEY = "coast-republic-cart";
const CURRENCY = "GHS";

function cartReducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return action.payload || state;

    case "ADD_ITEM": {
      const { product, quantity = 1 } = action.payload;
      // Two lines are the "same" cart item only if id AND size AND color match
      const key = (p) => `${p.id}__${p.size || ""}__${p.color || ""}`;
      const existing = state.items.find((i) => key(i) === key(product));

      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            key(i) === key(product)
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
            price: Number(product.price) || 0, // always a plain number
            image: product.image,
            size: product.size || null,
            color: product.color || null,
            quantity,
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

const initialState = { items: [] };

// Tag every stored item with a stable cartKey (id+size+color) for lookups
function withCartKeys(state) {
  return {
    ...state,
    items: state.items.map((i) => ({
      ...i,
      cartKey: `${i.id}__${i.size || ""}__${i.color || ""}`,
    })),
  };
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "HYDRATE", payload: JSON.parse(raw) });
    } catch (err) {
      console.error("Failed to load cart:", err);
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      console.error("Failed to save cart:", err);
    }
  }, [state]);

  const taggedState = withCartKeys(state);

  const addToCart = (product, quantity = 1) =>
    dispatch({ type: "ADD_ITEM", payload: { product, quantity } });

  const removeFromCart = (cartKey) =>
    dispatch({ type: "REMOVE_ITEM", payload: { cartKey } });

  const updateQuantity = (cartKey, quantity) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { cartKey, quantity } });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const getCartCount = () =>
    taggedState.items.reduce((sum, i) => sum + i.quantity, 0);

  const getCartTotal = () =>
    taggedState.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const value = {
    items: taggedState.items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartCount,
    getCartTotal,
    currency: CURRENCY,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (ctx === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
