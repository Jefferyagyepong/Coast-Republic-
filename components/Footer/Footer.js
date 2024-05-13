import Image from "next/image";
import FootBottom from "./FootBottom";
import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <Link href={"./"}>
        <Image
          src={"/crlogo.svg"}
          width={77}
          height={70}
          alt="logo"
          className="logo"
        />
      </Link>
      <h5>Your destination quality clothing and shoes</h5>
      <br />
      <hr className="short-width" />
      <br />
      <h4>Company</h4>
      <br />

      <Link href={"/"} className="footer-link-item">
        {" "}
        Home
      </Link>
      <Link href={"/about"} className="footer-link-item">
        {" "}
        About
      </Link>
      <Link href={"/shop"} className="footer-link-item">
        {" "}
        Product
      </Link>
      <Link href={"/contact"} className="footer-link-item">
        {" "}
        Contact
      </Link>
      <hr className="short-width" />
      <br />

      <h4>Information</h4>
      <br />

      <Link href={"/help"} className="footer-link-item">
        {" "}
        Help Center
      </Link>
      <Link href={"/"} className="footer-link-item">
        {" "}
        Payment Methods
      </Link>
      <Link href={"/"} className="footer-link-item">
        {" "}
        Return & Refund
      </Link>
      <Link href={"/privacy"} className="footer-link-item">
        {" "}
        Privacy Policy
      </Link>
      <Link href={"/terms"} className="footer-link-item">
        {" "}
        T & C&apos;s
      </Link>
      <hr className="short-width" />
      <br />

      <h4>Contact</h4>
      <br />

      <div className="footer-flex">
        <Image src={"/call.svg"} width={15} height={20} alt="call" />
        <Link href={"tel: +233 240 000000"}  className="footer-link-item">
          {" "}
          +233 240 000000
        </Link>
      </div>
      <div className="footer-flex">
        <Image src={"/mail.svg"} width={15} height={20} alt="mail" />
        <Link href={"mailto:contact@coastrepublic.com"}  className="footer-link-item">
          {" "}
          contact@coastrepublic.com
        </Link>
      </div>

      <br />
      <hr className="short-width" />
      <br />
      <h6>
        Coast Republic 🇬🇭 &copy; {new Date().getFullYear()} All Rights Reserved
      </h6>
      <br />
      <FootBottom />
    </footer>
  );
}
