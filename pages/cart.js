import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../redux/cartSlice";
import { useRouter } from "next/router";

const CartPage = () => {
  const { cartItems, totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCheckout = () => {
    alert("Proceeding to checkout!");
    dispatch(clearCart());
    router.push("/checkout");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
                      style={{ width: "50px" }}
                    />
                  </td>
                  <td>${item.totalPrice}</td>
                  <td>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total Items: {totalQuantity}</h3>
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
