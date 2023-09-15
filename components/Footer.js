import Link from "next/link.js";

import { faAnglesRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="footer-col">
          <div className="align-center">
            <FontAwesomeIcon icon={faAnglesRight} /> <h3>Quick Links</h3>
          </div>

          <ul className="footer-link">
            <li>
              <Link href="/delivery" className="links">
                {" "}
                Delivery
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="links">
                {" "}
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="links">
                {" "}
                Terms & conditions
              </Link>
            </li>
            <li>
              <Link href="/contact" className="links">
                {" "}
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="align-center">
            <FontAwesomeIcon icon={faAnglesRight} /> <h3>Follow us</h3>
          </div>

          <ul className="footer-link">
            <li className="links">
              <Link
                href="https://twitter.com/coastrepublicgh"
                className="links"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} size="1x" />
              </Link>
            </li>

            <li className="links">
              {" "}
              <Link
                href="https://www.instagram.com/coast_republic/"
                className="links"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} size="1x" />
              </Link>
            </li>
          </ul>
        </div>
        <span className="rights">
          &copy; {new Date().getFullYear()} C / R INC.
        </span>
      </div>
    </footer>
  );
}
