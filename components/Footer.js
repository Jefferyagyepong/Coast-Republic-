
import Link from "next/link.js";
import Image from "next/image";
import { faCartShopping, faEnvelope, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCcMastercard, faCcPaypal, faCcVisa, faInstagram, faPinterest, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import SearchInput from "./SearchInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
 


    return (
     

    <footer>
      <div className="footer-category">
       <div className="footer-nav">
        <div className="container">
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">About</h2>
                </li>
                <li className="footer-nav-item">
       <Link href="#" className="footer-nav-link"> Company</Link>
            </li>

            <li className="footer-nav-item">
   <Link href="/delivery"  className="footer-nav-link"> Delivery</Link>
            </li>

            <li className="footer-nav-item">
                  
        <Link href="/privacy" className="footer-nav-link" > Privacy Policy</Link>
            </li>

            <li className="footer-nav-item">
                <Link href="/terms"  className="footer-nav-link"> Terms & conditions</Link>
            </li>

                   <li classNamw="footer-nav-item">
    <Link href="/contact"  className="footer-nav-link"> Contact Us</Link>
            </li>
          
          </ul>
     <ul className="footer-nav-list">
            <li clasName="footer-nav-item">
              <h2 className="nav-title">Follow us</h2>
            </li>

            <li className="footer-nav-item">
                   <Link
              href="https://twitter.com/coastrepublic"
           className="icon"
              target="_blank"
            ><FontAwesomeIcon icon={faTwitter} width={10} height={10}/></Link>
            </li>

            <li className="footer-nav-item">
         <Link
              href="support@coastrepublic.com"
            className="icon"
              target="_blank"
            ><FontAwesomeIcon icon={faEnvelope} width={10} height={10}/></Link>
            </li>

            <li className="footer-nav-item">
            <Link
              href="https://www.youtube.com/coastrepublic"
               className="icon"
              target="_blank"
            ><FontAwesomeIcon icon={faYoutube} width={10} height={10}/></Link>
            </li>

            <li className="footer-nav-item">
           
            <Link
              href="https://www.instagram.com/coastrepublic/"
        className="icon"
              target="_blank"
            ><FontAwesomeIcon icon={faInstagram} width={10} height={10}/></Link>
            </li>
                </ul>
              
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Contact</h2>
            </li>

            <li className="footer-nav-item flex">
              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <address className="content">   
                10th Avenue Mccarthy Hill, Greater Accra, GH
              </address>
            </li>
            <li className="footer-nav-item flex">
              <div className="icon-box">
                <ion-icon name="call-outline"></ion-icon>
              </div>
              <a href="tel:+233244736420" className="footer-nav-link"
                >(233) 244736420</a
              >
            </li>

            <li className="footer-nav-item flex">
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <a href="mailto:example@gmail.com" class="footer-nav-link"
                >Support@coastrepublic.com</a
              >
            </li>
              </ul>
              <form className="footer-form">
                
        <p className="form-info">
          Get e-mail updates, our latest collection  and Gift promotion
      
            </p>
            
                <input type="email" placeholder="enter e-mail address" className="newsletter-mail" required/>
        <button id="newsletter">Sign Up</button>
              </form>
  </div>
      </div>

         
          <div class="footer-bottom">
         
            
            <p class="copyright">
                 <div>
                 <FontAwesomeIcon icon={faCcVisa} width={15} height={15} className="paymment-icon" />
            <FontAwesomeIcon icon={faCcMastercard} width={15} height={15}  className="paymment-icon" />
            <FontAwesomeIcon icon={faCcPaypal} width={15} height={15}  className="paymment-icon" />
            </div><br/>
            Copyright Coast Republic all rights reserved {' '}   &copy;   {new Date().getFullYear()}
          </p>
  
          </div>
          </div>
    </footer>
   
   
  );
}
