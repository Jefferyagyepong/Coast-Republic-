
import { createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cart.slice';

const CartContext = createContext();

export function CartProvider({ children }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const addItem = (item) => {
    dispatch(addToCart(item));
  };

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);