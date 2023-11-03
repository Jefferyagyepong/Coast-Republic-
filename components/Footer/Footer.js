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
          <Dropdown.Item as="a" href={"/delivery"}>
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
   
      <br />
      <br/>
      <div className="down">&copy; {new Date().getFullYear()} C-R Inc.</div>
    </footer>
  );
}
