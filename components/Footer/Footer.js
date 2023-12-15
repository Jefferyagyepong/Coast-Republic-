import Link from "next/link.js";
import FootBottom from "./FootBottom";
import StayLoop from "./StayLoop";



export default function Footer() {
  return (
    <footer>
      <StayLoop />

      <div className="text-align-start">
        <h4 className="heading">Call us</h4>
        <br />
        <div className="space">
          <Link href="tel:+233244736420" className="black">
            (233) 244736420{" "}
          </Link>{" "}
          <Link href="mailto:jefferyagyepong05@gmail.com" className="black">
            | customercare@coastrepublic.com
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
        <nav>
          <ul>
            <Link href={"#"} className="black">
              {" "}
              <li>Track Order</li>
            </Link>
            <Link href={"/about"} className="black">
              {" "}
              <li>About</li>
            </Link>
            <Link href={"/contact"} className="black">
              {" "}
              <li>Contact Us</li>
            </Link>
            <Link href={"/delivery"} className="black">
              {" "}
              <li>Delivery</li>
            </Link>
            <Link href={"#"} className="black">
              {" "}
              <li>Returns</li>
            </Link>
            <Link href={"/privacy"} className="black">
              {" "}
              <li>Privacy Policy </li>
            </Link>
            <Link href={"/terms"} className="black">
              {" "}
              <li>T & C&apos;s</li>
            </Link>
            <Link href={"#"} className="black">
              {" "}
              <li>Gift Cards and Promos</li>
            </Link>
          </ul>
        </nav>
      </div>

      <hr className="full-width" />
      <FootBottom/>
    </footer>
  );
}
