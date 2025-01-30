import Image from "next/image";
import FootBottom from "./FootBottom";
import Link from "next/link";
function Footer() {
  return (
    <footer>
      
      <div className="footer-align-left">
 
        <ul>
        <li>
                <Link href={"/"} className="footer-tag">
            {" "}
            Home
          </Link>
           </li>
         <li>
               <Link href={"/about"} className="footer-tag">
            {" "}
            About
          </Link>
           </li>
         <li> 
               <Link href={"/products"} className="footer-tag">
            {" "}
            shop
          </Link>
          </li>
         <li> 
               <Link href={"/contact"} className="footer-tag">
            {" "}
            Contact
          </Link>
          </li>
         <li> 
             <Link href={"/delivery"} className="footer-tag">
            {" "}
            Delivery & Refunds
          </Link>
          </li>
        </ul><br/>
                 
      </div>

        <div className="footer-align-left"> 
        <h4>GET THE COAST REPUBLIC APP </h4><br/>
        <p>
      Download and enjoy our app anytime, anywhere for IOS and Android devices.
        </p><br/>

        <div className="ibrid-flex">
          <Image src={"/apple.svg"} alt="apple" width={40} height={30} />
          <Image src={"/android.svg"} alt="android" width={40} height={30} />
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