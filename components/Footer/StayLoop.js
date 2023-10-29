import Link from "next/link";
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

export default function StayLoop() {
  return (
    <div className="background-gray">
      <h4 className="heading">STAY IN LOOP</h4>
      <br />
      <p>
        Stay in the loop with the latest style news when you subscribe to our
        emails. Learn more about our Privacy Policy{" "}
        <Link href={"/privacy"}> here. </Link>{" "}
        <Link href={"/terms"}> Terms and conditions</Link> apply.
      </p>
      <br />
      <br />
      <br />

      <form className="form-footer">
        <label htmlFor="Email">Email Address</label>
        <div>
          <input
            type="email"
            placeholder="your@address.com"
            className="form-input"
          />
        </div>
        <div>
          <button type="submit" className="footer-button">
            Submit
          </button>
        </div>
      </form>
      <hr />
      <ul className="footer-link">
        <li className="links">
          <Link
            href="https://twitter.com/coastrepublicgh"
            className="links"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} color="black" size="1x" />
          </Link>
        </li>

        <li className="links">
          {" "}
          <Link
            href="https://www.instagram.com/coast_republic/"
            className="links"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} color="black" size="1x" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
