/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
import Link from "next/link";

const shopLinks = [
  { label: "Men", href: "/products?category=men" },
  { label: "Women", href: "/products?category=women" },
  { label: "New Arrivals", href: "/products?sort=newest" },
  { label: "Best Sellers", href: "/products?sort=popular" },
];

const helpLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Delivery Information", href: "/delivery" },
  { label: "Returns & Refunds", href: "/return" },
  { label: "Contact Us", href: "/contact" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Brand section */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo-link">
              <Image
                src="/IMG_5658.jpeg"
                width={120}
                height={45}
                alt="Your store logo"
                className="footer-logo"
              />
            </Link>

            <p className="footer-description">
              Elevate your style with carefully selected fashion pieces,
              quality designs, and a shopping experience made for you.
            </p>

            <div className="footer-contact">
              <a href="tel:+233000000000">+233 00 000 0000</a>
              <a href="mailto:support@example.com">
                support@example.com
              </a>
            </div>
          </div>

          {/* Shop links */}
          <nav className="footer-section" aria-labelledby="shop-heading">
            <h2 id="shop-heading">Shop</h2>

            <ul>
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Help links */}
          <nav className="footer-section" aria-labelledby="help-heading">
            <h2 id="help-heading">Help & Support</h2>

            <ul>
              {helpLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company links */}
          <nav className="footer-section" aria-labelledby="company-heading">
            <h2 id="company-heading">Company</h2>

            <ul>
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-middle">
          <div>
            <h2>Stay in the know</h2>
            <p>Subscribe for new arrivals, exclusive offers, and updates.</p>
          </div>

          <form className="newsletter-form">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>

            <input
              id="footer-email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />

            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-bottom">
          <div className="payment-methods">
            <p>Secure payments with</p>

            <div className="payment-icons">
              <Image
                src="/telecel.JPG"
                width={44}
                height={28}
                alt="Telecel Cash"
              />

              <Image
                src="/momo.jpg"
                width={44}
                height={28}
                alt="MTN Mobile Money"
              />

              <Image
                src="/Visa.png"
                width={44}
                height={28}
                alt="Visa"
              />

              <Image
                src="/Airtel-Money-logo.jpg"
                width={44}
                height={28}
                alt="AirtelTigo Money"
              />
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit us on Instagram"
            >
              Instagram
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit us on Facebook"
            >
              Facebook
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit us on TikTok"
            >
              TikTok
            </a>
          </div>
        </div>

        <div className="footer-copyright">
          <p>
            © {new Date().getFullYear()} Coast Republic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
