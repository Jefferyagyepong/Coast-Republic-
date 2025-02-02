const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl bg-white p-8 shadow-lg rounded-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Terms & Conditions</h1>

        <p className="text-gray-600 mb-4">
          Welcome to FashionStore! By using our website, you agree to the following terms and conditions.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. Introduction</h2>
        <p className="text-gray-700 mb-4">
          These Terms govern your use of our website and services. By accessing or purchasing from our store, 
          you accept these Terms in full.
        </p>

        <h2 className="text-xl font-semibold mt-6">2. Orders & Payments</h2>
        <p className="text-gray-700 mb-4">
          All orders are subject to availability and confirmation. Prices are subject to change without notice. 
          We accept various payment methods, and you agree to provide accurate billing information.
        </p>

        <h2 className="text-xl font-semibold mt-6">3. Shipping & Returns</h2>
        <p className="text-gray-700 mb-4">
          We offer worldwide shipping. Delivery times vary based on location. Returns and exchanges are accepted 
          within 14 days of delivery. Customers are responsible for return shipping costs unless the item is defective.
        </p>

        <h2 className="text-xl font-semibold mt-6">4. Privacy Policy</h2>
        <p className="text-gray-700 mb-4">
          Your personal data is protected and used according to our Privacy Policy. We do not share your 
          information with third parties without your consent.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Contact Information</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions, feel free to contact us at <strong>support@fashionstore.com</strong>.
        </p>

        <p className="text-gray-600 mt-6 text-center">
          Last updated: February 2025
        </p>
      </div>
    </div>
  );
};

export default Terms;
