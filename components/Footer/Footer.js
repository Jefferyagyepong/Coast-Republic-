import Image from "next/image";
import FootBottom from "./FootBottom";
import Link from "next/link";
export default function Footer() {
  return (
    <footer>
<<<<<<< HEAD
      <div className="flex-align-right">
        {" "}
        <Link href={"./"}>
          <h2>Coast Republic Inc.</h2>
=======
      <Link href={"./"}>
        <h2>Coast Republic Inc.</h2><br/>
      </Link>
      <p>Your destination quality clothing and shoes</p>
      <br />

      <hr className="short-width" />
      <br />
      <h4>Company</h4>
      <div className="footer-flex">
        <Link href={"/"}> Home</Link>
        <Link href={"/about"}> About</Link>
        <Link href={"/shop"}> shop</Link>
        <Link href={"/contact"}> Contact</Link>
      </div>

      <hr className="short-width" />
      <br />
      <h4>Information</h4>
      <div className="footer-flex">
        <Link href={"/"}> Payment Methods</Link>
        <Link href={"/"}> Return & Refund</Link>
        <Link href={"/privacy"}> Privacy Policy</Link>
        <Link href={"/terms"}> T & C&apos;s</Link>
      </div>

      <hr className="short-width" />
      <br />
      <h4>Contact</h4>
      <div className="footer-flex-contact">
        <Image src={"/call.svg"} width={15} height={20} alt="call svg" />
        <Link href={"tel: +233 240 000000"}> +233 240 000000</Link>
      </div>
      <div className="footer-flex-contact">
        <Image src={"/mail.svg"} width={15} height={20} alt="envelope svg" />
        <Link href={"mailto:contact@coastrepublic.com"}>
          {" "}
          contact@coastrepublic.com
>>>>>>> 20cc8ea130ef6db92257bb93363448d75f0f8535
        </Link>
        <p>Your destination quality clothing and shoes</p>
        <ul>
          <li>
            <Link href={"/"}> Home</Link>
          </li>
          <li>
            <Link href={"/about"}> About</Link>
          </li>
          <li>
            {" "}
            <Link href={"/shop"}> Shop</Link>
          </li>
          <li>
            {" "}
            <Link href={"/contact"}> Contact</Link>
          </li>
    
          <li>
            {" "}
            <Link href={"/privacy"}> Privacy Policy</Link>
          </li>
          <li>
            {" "}
            <Link href={"/terms"}> T & C&apos;s</Link>
          </li>
        </ul>
        <h4>Customer support</h4>
        <div className="footer-flex-contact">
          <Image src={"/call.svg"} width={15} height={20} alt="call svg" />
          <Link href={"tel: +233 240 000000"}> +233 240 000000</Link>
        </div>
        <div className="footer-flex-contact">
          <Image src={"/mail.svg"} width={15} height={20} alt="envelope svg" />
          <Link href={"mailto:contact@coastrepublic.com"}>
            {" "}
            contact@coastrepublic.com
          </Link>
        </div>
      </div>

      <hr className="short-width" />

      <FootBottom />
      <h6>
        &copy; {new Date().getFullYear()} Coast Republic All rights Reserved
      </h6>
    </footer>
  );
}
