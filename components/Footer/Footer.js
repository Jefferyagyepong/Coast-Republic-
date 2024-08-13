import Image from "next/image";
import FootBottom from "./FootBottom";
import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <div className="footer-align-left">
        <Link href={"./"}>
          <h2 className="footer-tag">Coast Republic Inc.</h2>
        </Link>
        <address className="footer-tag">7 Minetti ST, Asokwa-Kumasi <br/>
          info@coastrepublic.com
          </address>

        <Link href={"/"} className="footer-tag">
          {" "}
          Home
        </Link>

        <Link href={"/about"} className="footer-tag">
          {" "}
          About
        </Link>

        <Link href={"/shop"} className="footer-tag">
          {" "}
          shop
        </Link>

        <Link href={"/contact"} className="footer-tag">
          {" "}
          Contact
        </Link>

        <Link href={"/privacy"} className="footer-tag">
          {" "}
          Privacy Policy
        </Link>

        <Link href={"/terms"} className="footer-tag">
          {" "}
          T & C&apos;s
        </Link>
          <Link href={"/delivery"} className="footer-tag">
          {" "}
          Delivery & Refunds
        </Link>

        <div className="footer-flex-contact">
          <Image src={"/call.svg"} width={15} height={20} alt="call svg" />
          <Link href={"tel: +233 240 000000"} className="footer-tag">
            {" "}
            +233 240 000000
          </Link>
        </div>
      </div>

      <hr className="short-width" />

      <FootBottom />
      <h6 className="footer-tag">
        &copy; {new Date().getFullYear()} Coast Republic All rights Reserved
      </h6>
    </footer>
  );
}
