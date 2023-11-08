import Navbar from "./Navbar";

export default function CartBasket() {
  const Header = () => {
    const cart = useSelector(state => state.cart);

    const getItemsCount = () => {
      return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
    };
  };

  return (
    <div  className="basket">
      <Navbar />
    </div>
  );
}
