import Image from "next/image";
import FootBottom from "./FootBottom";
import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <h2 className="footer-heading">COAST REPUBLIC</h2>
      <p className="footer-text">Your destination quality clothing and shoes</p>
      <h4 className="footer-sub-heading">Company</h4>
      <ul>
        <Link href={"/"} className="footer-link">
          {" "}
          <li>Home</li>
        </Link>
        <Link href={"/about"} className="footer-link">
          {" "}
          <li>About</li>
        </Link>
        <Link href={"/shop"} className="footer-link">
          {" "}
          <li>Product</li>
        </Link>
        <Link href={"/contact"} className="footer-link">
          {" "}
          <li>Contact</li>
        </Link>
      </ul>
      <h4 className="footer-sub-heading">Information</h4>
      <ul>
        <Link href={"/help"} className="footer-link">
          {" "}
          <li>Help Center</li>
        </Link>
        <Link href={"/"} className="footer-link">
          {" "}
          <li>Payment Methods</li>
        </Link>
        <Link href={"/refund"} className="footer-link">
          {" "}
          <li>Return & Refund</li>
        </Link>
        <Link href={"/privacy"} className="footer-link">
          {" "}
          <li>Privacy Policy</li>
        </Link>
      </ul>
      <h4 className="footer-sub-heading">Contact</h4>
      <ul>
        <div className="footer-flex">
          <Image src={"/call.svg"} width={30} height={40} alt="call" />
          <Link href={"tel: +233 240 000000"} className="footer-link">
            {" "}
            <li>+233 240 000000</li>
          </Link>
        </div>
        <div className="footer-flex">
          <Image src={"/mail.svg"} width={30} height={40} alt="mail" />
          <Link
            href={"mailto:contact@ibridenterprise.com"}
            className="footer-link"
          >
            {" "}
            <li>contact@ibridenterprise.com</li>
          </Link>
        </div>
      </ul>
      <br />
      <hr />
      <br />
      <p className="copyright">
        Coast Republic Store 🇬🇭 &copy; {new Date().getFullYear()} All Rights Reserved
      </p>
      <br />
      <FootBottom/>
    </footer>
  );
}
