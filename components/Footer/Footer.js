import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Categories Section */}
        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li>
              <Link href="/products/" className="footer-link">
                Tees
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service Section */}
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>
              <Link href={"/contact"} className="footer-link">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href={"/delivery"} className="footer-link">
                Delivery Info
              </Link>
            </li>
            <li>
              <Link href={"/return"} className="footer-link">
                Returns & Refunds
              </Link>
            </li>
            <li>
              <Link href={"/faq"} className="footer-link">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>
              <Link href={"/terms"}>Terms & Conditions</Link>
            </li>
            <li>
              <Link href={"/privacy"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"/cookies"}>Cookie Policy</Link>
            </li>
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
