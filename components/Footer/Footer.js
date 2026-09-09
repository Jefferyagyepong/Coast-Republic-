/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Info */}
        <div className="footer-section brand-info">
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
            <li><Link href="/about">About Us</Link></li><br/>
            <li><Link href="/delivery">Delivery</Link></li><br/>
            <li><Link href="/return">Refunds &Returns</Link></li><br/>
            <li><Link href="/contact">Contact Us</Link></li><br/>
            <li><Link href="/terms">Terms and Conditions </Link></li><br/>
            <li><Link href="/privacy">Privacy Policy </Link></li><br/>
          </ul>
        </div>

        {/* Social Media Section */}
      </div>

      <div className="flex-inline">
        <p>Accepted Payment Methods</p>
      </div>

      <div className="payment-container">
        <Image
          src={"/telecel.JPG"}
          height={20}
          width={25}
          alt="Telecel Cash logo"
          className="footer-tag"
        />
        <Image
          src={"/momo.jpg"}
          height={20}
          width={25}
          alt="MTN Mobile Money logo"
          className="footer-tag"
        />
        <Image
          src={"/Visa.png"}
          height={20}
          width={25}
          alt="Visa logo"
          className="footer-tag"
        />
        <Image
          src={"/Airtel-Money-logo.jpg"}
          height={20}
          width={25}
          alt="AirtelTigo Money logo"
          className="footer-tag"
        />
      </div>

      <Image
        src={"/signature.png"} // ← confirm this file exists in /public, or swap in the real filename
        height={30}
        width={130}
        alt="Coast Republic signature"
        className="signature"
      />

      {/* Copyright */}
      <div className="flex-inline">
        <p>
          © {new Date().getFullYear()} All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
