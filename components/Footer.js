
import Link from "next/link.js";
import Image from "next/image";
import { faCartShopping, faEnvelope, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCcMastercard, faCcPaypal, faCcVisa, faInstagram, faPinterest, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import SearchInput from "./SearchInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
 


    return (
     
      <footer className="">
        
        <div className="col">

          <div className="same">
               <h4>Contact</h4>
        <p><strong>Address: </strong> 10th Ave, McCarthy Hill, Accra</p>
        <p><strong>Phone: </strong> +233 244736420</p>
        <p><strong>Hours: </strong> 8:00 -18:00, Mon - sat</p>
          </div>
       
     

       
    
      <div class="same">
        <h4>Sign up for Newsletters</h4>
        <p>
          Get e-mail updates, our latest collection  and Gift promotion
      
            </p>
            
                <input type="email" placeholder="enter e-mail address" className="newsletter-mail" required/>
        <button id="newsletter">Sign Up</button>
      </div>
     
    


      <div className="same">
        <h4>About</h4>
        <Link href="/#" className="footer-nav"> Company</Link>
        <Link href="/shipping.html"  className="footer-nav"> Delivery</Link>
        <Link href="/privacy.html"  className="footer-nav"> Privacy Policy</Link>
        <Link href="/terms.html"  className="footer-nav"> Terms & conditions</Link>
        <Link href="/contact.html"  className="footer-nav"> Contact Us</Link>
      </div>

             <div className="same">
          <h4>Payment methods available</h4>
          <div className="icon">
            <Link
              href=""
           className="icon"
              target="_blank"
            ><FontAwesomeIcon icon={faCcVisa} width={30} height={30}/></Link>
            <Link
              href=""
            className="icon"
              target="_blank"
            ><FontAwesomeIcon icon={faCcMastercard} width={30} height={30}/></Link>
            <Link
              href=""
               className="icon"
              target="_blank"
            ><FontAwesomeIcon icon={faCcPaypal} width={30} height={30}/></Link>
          
</div>
       </div>   </div>
      

        <div className="coast">

             <div className="follow">
          <h4>Follow us</h4>
          <div className="icon">
            <Link
              href="https://twitter.com/coastrepublic"
           className="icon"
              target="_blank"
            ><FontAwesomeIcon icon={faTwitter} width={10} height={10}/></Link>
            <Link
              href="support@coastrepublic.com"
            className="icon"
              target="_blank"
            ><FontAwesomeIcon icon={faEnvelope} width={10} height={10}/></Link>
            <Link
              href="https://www.youtube.com/coastrepublic"
               className="icon"
              target="_blank"
            ><FontAwesomeIcon icon={faYoutube} width={10} height={10}/></Link>
            <Link
              href="https://www.instagram.com/coastrepublic/"
        className="icon"
              target="_blank"
            ><FontAwesomeIcon icon={faInstagram} width={10} height={10}/></Link>
          </div>
        </div>
        copyright   <p>Coast Republic {' '}   &copy;   {new Date().getFullYear()}</p>


      </div>
    </footer>
   
   
  );
}
