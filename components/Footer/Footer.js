import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Info */}
        <div className="footer-section brand-info">
          <h2 className="footer-logo">Coast Repubpic</h2>
          <p>Elevate your style with the latest fashion trends. Discover unique designs crafted for you.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li><Link href="/category/women">Women</Link></li>
            <li><Link href="/category/men">Men</Link></li>
            <li><Link href="/category/accessories">Accessories</Link></li>
            <li><Link href="/category/sale">Sale</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/shipping">Shipping</Link></li>
            <li><Link href="/returns">Returns</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li>
              <Link
                href={"https://facebook.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href={"https://twitter.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href={"https://instagram.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <h5>WE ACCEPT THE FOLLOWING PAYMENT METHODS </h5>
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
        <p>
          © {new Date().getFullYear()} Coast Republic Store. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
