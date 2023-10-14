import Link from "next/link.js";
import { Dropdown } from "rsuite";
import Image from "next/image";

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
      <div className="background-gray">
        <h4 className="heading">STAY IN LOOP</h4>
        <br />
        <p>
          Stay in the loop with the latest style news when you subscribe to our
          emails. Learn more about our Privacy Policy{" "}
          <Link href={"/privacy"}> here. </Link>{" "}
          <Link href={"/terms"}> Terms and conditions</Link> apply.
        </p>

        <form className="form-footer">
          <label for="Email">Email Address</label>
          <input
            type="email"
            placeholder="your@address.com"
            className="form-input"
          />
          <button type="submit" className="footer-button">
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
      <div className="text-align-start">
        <h4 className="heading">Call us</h4>
        <br />
        <div className="space">
          <Link href="tel:+233244736420" className="black">
            (233) 244736420{" "}
          </Link>{" "}
          |
          <Link href="mailto:jefferyagyepong05@gmail.com" className="black">
            customercare@gcoastrepublic.com
          </Link>
        </div>
      </div>
      <div className="text-align-start">
        <h4 className="heading">Change location</h4>
        <br />
        🇬🇭{" "}
        <Link href={"#"} className="text-underline">
          Ghana
        </Link>
      </div>
      <hr className="full-width" />
      <div className="text-align-start-wide">
        Customer Care{" "}
        <Dropdown titile="Customer Care">
          <Dropdown.Item as="a" href={"#"}>
            Track An Order
          </Dropdown.Item>
          <Dropdown.Item as="a" href={"#"}>
            Create A Return Order
          </Dropdown.Item>
          <Dropdown.Item as="a" href={"#"}>
            Contact Us
          </Dropdown.Item>
          <Dropdown.Item as="a" href={"#"}>
            FAQs
          </Dropdown.Item>
          <Dropdown.Item as="a" href={"#"}>
            Delivery
          </Dropdown.Item>
          <Dropdown.Item as="a" href={"/terms"}>
            Terms & Conditions
          </Dropdown.Item>
          <Dropdown.Item as="a" href={"#"}>
            Privacy Policy
          </Dropdown.Item>
          <Dropdown.Item as="a" href={"#"}>
            Cookie Policy
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div className="text-align-start-wide">
        About Us{" "}
        <Dropdown titile="About Us">
          <Dropdown.Item as="a" href={"#"}>
            Discover Coast Republic
          </Dropdown.Item>
          <Dropdown.Item as="a" href={"#"}>
            Our Pledge
          </Dropdown.Item>
          <Dropdown.Item as="a" href={"#"}>
            Coast Republic Rewards
          </Dropdown.Item>
          <Dropdown.Item as="a" href={"#"}>
            careers
          </Dropdown.Item>
        </Dropdown>
      </div>
      <hr className="full-width" />
      <div className="text-align-start">
        <h4 className="heading">COAST REPUBLIC ACCEPTS</h4>
        <br />
        <br />
        <Image
          src={"/momo.png"}
          height={50}
          width={60}
          alt="momo logo"
          className="momo"
        />
      </div>
      <hr className="full-width" />
      <br />
      <br />
      &copy; {new Date().getFullYear()} C-R Inc.
    </footer>
  );
}
