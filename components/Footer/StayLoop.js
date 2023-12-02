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
import { useForm, ValidationError } from "@formspree/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function StayLoop() {
   const [state, handleSubmit] = useForm("maygvdqr");
   if (state.succeeded) {
     return <p>Thanks for joining!</p>;
   }
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

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" className="form-footer"  required/>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="button-submit"
        >
          Submit
        </button>
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
