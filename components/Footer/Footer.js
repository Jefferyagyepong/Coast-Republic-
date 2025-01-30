import Image from "next/image";
import FootBottom from "./FootBottom";
import Link from "next/link";
function Footer() {
  return (
    <footer>
      <br/>  <br/>
      <div className="footer-align-left">
 
        <b>
          <Link href={"/"} className="footer-tag">
            {" "}
            Home
          </Link><br/>  <br/>

          <Link href={"/about"} className="footer-tag">
            {" "}
            About
          </Link><br/>  <br/>

          <Link href={"/products"} className="footer-tag">
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
           <div> 
        <h3>GET THE COAST REPUBLIC APP </h3>
        <p>
      Download and enjoy our app anytime, anywhere for IOS and Android devices.
        </p><br/>

        <div className="ibrid-flex">
          <Image src={"/apple.svg"} alt="apple" width={170} height={100} />
          <Image src={"/android.svg"} alt="android" width={170} height={100} />
        </div>
      </div>

      <FootBottom />
      <h5>COAST REPUBLIC ACCEPTS </h5>
      <div className="payment-container">
            
               <Image
          src={"/telecel.JPG"}
          height={30}
          width={35}
          alt="momo logo"
          className="footer-tag"
        /> 
      
        
               <Image
          src={"/momo.jpg"}
          height={30}
          width={35}
          alt="momo logo"
          className="footer-tag"
        /> 
              
              <Image
          src={"/Visa.png"}
          height={30}
          width={36}
          alt="momo logo"
          className="footer-tag"
        />  
                <Image
          src={"/Airtel-Money-logo.jpg"}
          height={30}
          width={36}
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