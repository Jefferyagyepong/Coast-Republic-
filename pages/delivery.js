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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Delivery Information</h1>
        
        {/* Delivery Options */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Select Delivery Option</h2>
          <select
            className="w-full p-2 border rounded-md"
            value={deliveryOption}
            onChange={(e) => setDeliveryOption(e.target.value)}
          >
            <option value="standard">Standard (5-7 Days) - Free</option>
            <option value="express">Express (2-3 Days) - $5.99</option>
            <option value="overnight">Overnight (1 Day) - $9.99</option>
          </select>
        </div>

        {/* Address Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Address</label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded-md"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold">City</label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded-md"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold">ZIP Code</label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded-md"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
          >
            Confirm Delivery
          </button>
        </form>
      </div>
    </div>
  );
};

export default Delivery;
