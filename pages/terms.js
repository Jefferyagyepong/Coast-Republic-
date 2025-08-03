import Footer from "@/components/Footer/Footer";
import Header from "@/components/Head/Header";

const Terms = () => {
  return (
    <>
      <Header />
      <div className="footer-align-left">
        <div>
          <h1>Terms & Conditions</h1>

          <p>
            Welcome to Coast Republic Store! By using our website, you agree to
            the following terms and conditions.
          </p>

          <h2>1. Introduction</h2>
          <p>
            These Terms govern your use of our website and services. By
            accessing or purchasing from our store, you accept these Terms in
            full.
          </p>

          <h2>2. Orders & Payments</h2>
          <p>
            All orders are subject to availability and confirmation. Prices are
            subject to change without notice. We accept various payment methods,
            and you agree to provide accurate billing information.
          </p>

          <h2>3. Shipping & Returns</h2>
          <p>
            We offer worldwide shipping. Delivery times vary based on location.
            Returns and exchanges are accepted within 14 days of delivery.
            Customers are responsible for return shipping costs unless the item
            is defective.
          </p>

          <h2>4. Privacy Policy</h2>
          <p>
            Your personal data is protected and used according to our Privacy
            Policy. We do not share your information with third parties without
            your consent.
          </p>

          <h2>5. Contact Information</h2>
          <p>
            If you have any questions, feel free to contact us at{" "}
            <strong>support@coastrepubublicstore.com</strong>.
          </p>

          <p>Last updated: February 2025</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
