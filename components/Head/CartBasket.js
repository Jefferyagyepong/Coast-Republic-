import { useSelector } from "react-redux";
import Navbar from "./Navbar";

function CartBasket() {
  const Header = () => {
    const cart = useSelector(state => state.cart);

    const getItemsCount = () => {
      return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
    };
  };

  return(
  <div>
  <Navbar />
  </div>

  );

}
export default CartBasket;
