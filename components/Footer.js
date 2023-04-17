
import Link from "next/link.js";

import {  faEnvelope  } from "@fortawesome/free-solid-svg-icons";
import { faCcMastercard, faCcPaypal, faCcVisa, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
 


    return (

      
      <footer className="footer">
          <div className="container-footer">
            <div className="row">
              <div className="footer-col">
                <h4>Company</h4>
                <ul>
              
                       <li>   <Link href="/delivery"  > Delivery</Link></li>
                       <li> <Link href="/privacy"  > Privacy Policy</Link></li>
                       <li> <Link href="/terms" > Terms & conditions</Link></li>
                       <li>    <Link href="/contact"  className="footer-nav-link"> Contact Us</Link></li>
                    
                </ul>
                
              </div>
               <div className="footer-col">
                <h4>Follow us</h4>
                <ul>
                  <li></li>
                       <li>            <Link
              href="https://twitter.com/coastrepublicgh"
           className="icon"
              target="_blank"
            ><FontAwesomeIcon icon={faTwitter} width={10} height={10}/></Link></li>
                       <li>          <Link
              href="support@coastrepublic.com"
            className="icon"
              target="_blank"
            ><FontAwesomeIcon icon={faEnvelope} width={10} height={10}/></Link></li>
  
                       <li>  <Link
              href="https://www.youtube.com/coastrepublic"
               className="icon"
              target="_blank"
            ><FontAwesomeIcon icon={faYoutube} width={10} height={10}/></Link></li>
                  <li> <Link
              href="https://www.instagram.com/coast_republic/"
        className="icon"
              target="_blank"
            ><FontAwesomeIcon icon={faInstagram} width={10} height={10}/></Link></li>
                </ul>
                
              </div>
              <div className="footer-col">
                        <h4>Contact</h4>
                   <address>   
                10th Avenue Mccarthy Hill, Greater Accra, GH
              </address>
                <Link  href="tel:+233244736420" className="white">(233) 244736420</Link><br/>
                   <Link  href="mailto:support@coastrepublic.com"  className="white">support@coastrepublic.com</Link>
              </div>
                <form className="footer-form">
                
            <p className="form-info">
          Get e-mail updates, our latest collection  and Gift promotion
      
            </p>
            
                <input type="email" placeholder="enter e-mail address"  className="newsletter-mail" required/>
        <button id="newsletter">Sign Up</button>
              </form>
              
            </div>
            
          </div>
        <div className="footer-bottom">
           <div>
                 <FontAwesomeIcon icon={faCcVisa} width={15} height={15} />
            <FontAwesomeIcon icon={faCcMastercard} width={15} height={15}  />
            <FontAwesomeIcon icon={faCcPaypal} width={15} height={15}   />
            </div><br/>
            <p   className="copyright">
                
            Copyright Coast Republic all rights reserved {' '}   &copy;   {new Date().getFullYear()}
          </p>
  
          </div>
          
      </footer>
   
   
   
  );
}

