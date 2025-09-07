/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";

const Delivery = () => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("standard");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Delivery to: ${address}, ${city}, ${zip} via ${deliveryOption}`);
  };

  return (
    <div>
      <div>
        <h1>Delivery Information</h1>

        {/* Delivery Options */}
        <div>
          <h2>Select Delivery Option</h2>
          <select
          
            value={deliveryOption}
            onChange={(e) => setDeliveryOption(e.target.value)}
          >
            <option value="standard">Standard (5-7 Days) - Free</option>
            <option value="express">Express (2-3 Days) - $5.99</option>
            <option value="overnight">Overnight (1 Day) - $9.99</option>
          </select>
        </div>

        {/* Address Form */}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Address</label>
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <label>ZIP Code</label>
            <input
              type="text"
              required
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>

          <button
            type="submit"
          >
            Confirm Delivery
          </button>
        </form>
      </div>
    </div>
  );
};

export default Delivery;
