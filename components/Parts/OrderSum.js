/* eslint-disable react/react-in-jsx-scope */
// app/components/OrderSummary.jsx
export default function OrderSummary({ items, subtotal, tax, total }) {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <div className="order-items">
        {items.map((item, index) => (
          <div key={index} className="order-item">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="order-details">
        <div className="order-detail">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="order-detail">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="order-detail total">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
