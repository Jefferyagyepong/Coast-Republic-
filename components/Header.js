
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { slide as Menu } from 'react-burger-menu'
import SideBarMobile from "./SidebarMobile";
import Image from "next/image";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header (){
    return (
     

        <div className="Header">
           
           
           <Image src='/crlogo.svg'  width={80} height={50}  alt="Coast-Republic logo"/> 
                
                <form action="" className="form-wrapper ">
                   <div id="inline">
                                    <input className="search-form" type="search" name="search" placeholder="Search t-shirts" />   
                      <FontAwesomeIcon  icon={faSearch} width={10} height={10}/>   
                   </div>
            
       
                 <ul className="nav">
                <li className="nav-links"><a href="#" className="nav-link">T-shirts</a></li>
                <li className="nav-links"><a href="# " className="nav-link">Delivery</a></li>
                <li className="nav-links"><a href="#" className="nav-link">Contact Us</a></li>
                   <li className="nav-links"><a href="#" className="nav-link">About Us</a></li>
            </ul>
               
            </form>
            <div className="cart-wrapper">
                 <Image src='/cart.svg'  width={20} height={20} alt="cart"/>   
            </div>

                  <div className="hide">
            <SideBarMobile/>
        </div> 
      </div>
   
   
  );
}
