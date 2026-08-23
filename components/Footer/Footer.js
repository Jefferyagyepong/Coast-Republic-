/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Info */}
        <div className="footer-section brand-info">
          <h4 className="footer-logo">Coast Republic</h4>
          <p>Elevate your style with the latest fashion trends. Discover unique designs crafted for you.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h5>Shop</h5>
          <ul>

            <li><Link href="/products/">Men</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>Help</h5>
          <ul>
            <li><Link href="/faq">FAQ</Link></li><br/>
            <li><Link href="/contact">About Us</Link></li><br/>
            <li><Link href="/delivery">Delivery</Link></li><br/>
            <li><Link href="/returns">Refunds &Returns</Link></li><br/>
            <li><Link href="/contact">Contact Us</Link></li><br/>
            <li><Link href="/terms">Terms & Conditions </Link></li><br/>
          </ul>
        </div>

        {/* Social Media Section */}

      </div>

      <h6 className="text-align-center">Accepted Payment Methods</h6>
      <div className="payment-container">
        <Image
          src={"/telecel.JPG"}
          height={30}
          width={35}
          alt="momo logo"
          className="footer-tag"
        />
        <Image
          src={"/momo.jpg"}
          height={30}
          width={35}
          alt="momo logo"
          className="footer-tag"
        />

        <Image
          src={"/Visa.png"}
          height={30}
          width={36}
          alt="momo logo"
          className="footer-tag"
        />
        <Image
          src={"/Airtel-Money-logo.jpg"}
          height={30}
          width={36}
          alt="momo logo"
          className="footer-tag"
        />
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p className="text-align-center">
          © {new Date().getFullYear()} Coast Republic Store. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;