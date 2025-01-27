import Image from "next/image";
import FootBottom from "./FootBottom";
import Link from "next/link";
function Footer() {
  return (
    <footer>
      <br/>  <br/>
      <div className="footer-align-left">
        <em>
          <Link href={"./"}>
            <h2 className="footer-tag">Coast Republic Inc.</h2>
          </Link>
          <address className="footer-tag">
            <h6> AK-717-5846 Minetti ST, Asokwa 🇬🇭</h6><br/>
            <h6>info@coastrepublic.com</h6><br/>
            <div className="footer-flex-contact">
              <Image src={"/call.svg"} width={15} height={20} alt="call svg" />
              <Link href={"tel: +233 240 000000"} className="footer-tag">
                {" "}
                +233 240 000000
              </Link>
            </div>
          </address>
        </em><br/>  <br/>
        <b>
          <Link href={"/"} className="footer-tag">
            {" "}
            Home
          </Link><br/>  <br/>

          <Link href={"/about"} className="footer-tag">
            {" "}
            About
          </Link><br/>  <br/>

          <Link href={"/products/"} className="footer-tag">
            {" "}
            shop
          </Link><br/>  <br/>

          <Link href={"/contact"} className="footer-tag">
            {" "}
            Contact
          </Link><br/>  <br/>

          <Link href={"/delivery"} className="footer-tag">
            {" "}
            Delivery & Refunds
          </Link><br/>  <br/>
        </b>
      </div>

      <hr className="short-width" />

      <FootBottom />
      <div className="payment-container">
      
        
               <Image
          src={"/momo.jpg"}
          height={17}
          width={29}
          alt="momo logo"
          className="footer-tag"
        /> |
              
              <Image
          src={"/Visa.png"}
          height={25}
          width={39}
          alt="momo logo"
          className="footer-tag"
        />  
     <br/>
      </div> <br/>
      <h6 className="footer-tag">
        &copy; {new Date().getFullYear()} Coast Republic All rights Reserved
      </h6> <br/>
    </footer>
  );
}
export default Footer;
