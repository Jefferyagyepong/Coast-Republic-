import Link from "next/link.js";
import { Dropdown } from "rsuite";
import Image from "next/image";
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
        <label for="">
          <select>
            <option value="">Customer Care</option>
            
            <option value="">Track Order</option>
            <option value="">Contact Us</option>
            <option value="">Returns</option>
          </select>
        </label>
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

      <br />
      <br />
      <div className="down">
        &copy; {new Date().getFullYear()}
        <abbr title="Coast Reppublic"> C-R Inc.</abbr>
      </div>
    </footer>
  );
}
