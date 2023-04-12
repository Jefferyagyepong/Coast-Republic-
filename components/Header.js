
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
            <Link href='/'>
             <Image src='/crlogo.svg' width={80} height={50} alt="Coast-Republic logo" /> 
            </Link> 
           
           
             
           
                         
                <form action="" className="search-form">
               
  <SearchInput/>
        
        </form>
            
       
         
       
           
            
         <ul className="desktop">
 
                <li className=""><Link href='/shop' className="salmon">Shop</Link></li>
                <li className=""><Link href='/shop' className="salmon">Delivery</Link></li>
                <li className=""><Link href='/shop' className="salmon">Contact Us</Link></li>
                   <li className=""><Link href='/shop' className="salmon">About Us</Link></li>
            </ul>
     
         
      
      
      
            <div className="cart-wrapper">
          <Navbar/>
       
   
                <div className="socials">
                    <Link href=''    className="icon-black"> <FontAwesomeIcon icon={faTwitter} width={10} height={10} /></Link>
                    <Link href=''   className="icon-black">  <FontAwesomeIcon icon={faInstagram} width={10} height={10} /></Link>
                    <Link href=''  className="icon-black"> <FontAwesomeIcon icon={faPinterest} width={10} height={10}   /></Link>
                    <Link href=''   className="icon-black"> <FontAwesomeIcon icon={faYoutube} width={10} height={10} /></Link>
                         
                </div>

                   <section class="top-nav">
   
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
                   <li className=""><a href="#"  className="salmon-mobile">T-shirts</a></li>
                <li className=""><a href="# "  className="salmon-mobile">Delivery</a></li>
                <li className=""><a href="#"  className="salmon-mobile">Contact Us</a></li>
                   <li className=""><a href="#"  className="salmon-mobile" >About Us</a></li>
    </ul>
  </section>
                
            </div>
            <div>

            </div>
    
      </div>
   
   
  );
}





