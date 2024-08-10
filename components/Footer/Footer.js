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
          <Link href={"/"}> Home</Link>
        </li>
        <li>
          {" "}
          <Link href={"/about"}> About</Link>
        </li>
        <li>
          {" "}
          <Link href={"/shop"}> shop</Link>
        </li>
        <li>
          {" "}
          <Link href={"/contact"}> Contact</Link>
        </li>
        <li>
          <Link href={"/privacy"}> Privacy Policy</Link>
        </li>
        <li>
          {" "}
          <Link href={"/terms"}> T & C&apos;s</Link>
        </li>
      
      </ul>

      <h4>Contact</h4>
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
