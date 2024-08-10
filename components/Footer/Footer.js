import Image from "next/image";
import FootBottom from "./FootBottom";
import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <Link href={"./"}>
        <h2>Coast Republic Inc.</h2>
        <br />
      </Link>
      <p>Your destination quality clothing and shoes</p>

      <ul>
        <li>
          {" "}
          <Link href={"/"}   classsName="footer-tag"> Home</Link>
        </li>
        <li>
          {" "}
          <Link href={"/about"} classsName="footer-tag"  > About</Link>
        </li>
        <li>
          {" "}
          <Link href={"/shop"} classsName="footer-tag" > shop</Link>
        </li>
        <li>
          {" "}
          <Link href={"/contact"} classsName="footer-tag"  > Contact</Link>
        </li>
        <li>
          <Link href={"/privacy"}  classsName="footer-tag" > Privacy Policy</Link>
        </li>
        <li>
          {" "}
          <Link href={"/terms"} classsName="footer-tag"  > T & C&apos;s</Link>
        </li>
      
      </ul>

      <div className="footer-flex-contact">
        <Image src={"/call.svg"} width={15} height={20} alt="call svg" />
        <Link href={"tel: +233 240 000000"}> +233 240 000000</Link>
      </div>
    

      <hr className="short-width" />

      <FootBottom />
      <h6>
        &copy; {new Date().getFullYear()} Coast Republic All rights Reserved
      </h6>
    </footer>
  );
}
