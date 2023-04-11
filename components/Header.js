
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { slide as Menu } from 'react-burger-menu'
import SideBarMobile from "./SidebarMobile";
import Link from "next/link.js";
import Image from "next/image";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faPinterest, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import SearchInput from "./SearchInput";

export default function Header() {
 


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
            <li id="shopping-cart"> <Link href="">
                <Image src='/cart.svg' width={20} height={20} alt="cart" />
            </Link> <p>Cart</p>

                </li>
         
                <div className="socials">
                    <Link href=''    className="icon-black"> <FontAwesomeIcon icon={faTwitter} width={10} height={10} /></Link>
                    <Link href=''   className="icon-black">  <FontAwesomeIcon icon={faInstagram} width={10} height={10} /></Link>
                    <Link href=''  className="icon-black"> <FontAwesomeIcon icon={faPinterest} width={10} height={10}   /></Link>
                    <Link href=''   className="icon-black"> <FontAwesomeIcon icon={faYoutube} width={10} height={10} /></Link>
                    
         
        
                   
                               
                </div>
                
            </div>
            <div>

                   
 
            </div>

            
         
      </div>
   
   
  );
}
