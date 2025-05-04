import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Info */}
        <div className="footer-section brand-info">
          <h3 className="footer-logo">Coast Republic</h3>
          <p>Elevate your style with the latest fashion trends. Discover unique designs crafted for you.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
              
            <li><Link href="/shop">Men</Link></li>       
          </ul>
        </div>

        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/delivery">Shipping</Link></li>
            <li><Link href="/returns">Returns</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Social Media Section */}
 
      </div>

      <h5 className ="text-align-center">WE ACCEPT THE FOLLOWING PAYMENT METHODS </h5>
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
        <p className ="text-align-center">
          © {new Date().getFullYear()} Coast Republic Store. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
