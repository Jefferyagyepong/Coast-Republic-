import { createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity } from '../store/cartSlice';

const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const addItem = (item) => dispatch(addToCart(item));
  const removeItem = (id) => dispatch(removeFromCart(id));
  const updateItemQuantity = (id, quantity) =>
    dispatch(updateQuantity({ id, quantity }));

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, removeItem, updateItemQuantity, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(cartContext);