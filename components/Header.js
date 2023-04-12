
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link.js";
import Image from "next/image";
import { faInstagram, faPinterest, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import SearchInput from "./SearchInput";
import Navbar from "./Navbar";



export default function Header() {
  
    const Header = () => {

        
        const cart = useSelector((state) => state.cart);

      
        const getItemsCount = () => {
            return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
        };
    }


    return (
     

        <div className="Header">
               
           
            <Image src='/crlogo.svg' width={80} height={50} alt="Coast-Republic logo" /> 
             
           
                         
                <form action="" className="search-form">
               
  <SearchInput/>
        
        </form>
            
       
         
       
           
            
         <ul className="">
                           <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">&#9776;</label> 
                <li className=""><a href="#"  className="salmon">T-shirts</a></li>
                <li className=""><a href="# "  className="salmon">Delivery</a></li>
                <li className=""><a href="#"  className="salmon">Contact Us</a></li>
                   <li className=""><a href="#"  className="salmon" >About Us</a></li>
            </ul>
     
         
      
      
      
            <div className="cart-wrapper">
          <Navbar/>
         
                <div className="socials">
                    <Link href=''    className="icon-black"> <FontAwesomeIcon icon={faTwitter} width={10} height={10} /></Link>
                    <Link href=''   className="icon-black">  <FontAwesomeIcon icon={faInstagram} width={10} height={10} /></Link>
                    <Link href=''  className="icon-black"> <FontAwesomeIcon icon={faPinterest} width={10} height={10}   /></Link>
                    <Link href=''   className="icon-black"> <FontAwesomeIcon icon={faYoutube} width={10} height={10} /></Link>
                    
         
        
                   
                               
                </div>
                
            </div>
            <div>

                   
 
            </div>
    
  <input type="checkbox" id="checkbox_toggle"/>
  <label for="checkbox_toggle" class="hamburger">
      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
   </label>
  <nav>
    <ul>
    <li><a href="#">Link One</a></li>
    <li><a href="#">Link Two</a></li>
    <li><a href="#">Link Three</a></li>
    <li><a href="#">Link Four</a></li>
  </ul>
    </nav>

            
         
      </div>
   
   
  );
}





