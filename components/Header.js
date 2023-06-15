
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link.js";
import Image from "next/image";
import { faInstagram, faPinterest, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import SearchInput from "./SearchInput";
import Navbar from "./Navbar";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";



export default function Header() {
  
    const Header = () => {

        
        const cart = useSelector((state) => state.cart);

      
        const getItemsCount = () => {
            return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
        };
    }


    return (
     

        <div className="Header">

                 <section className="top-nav">
   
                    <input id="menu-toggle" type="checkbox" />
                 
    <label className='menu-button-container' htmlFor="menu-toggle">
                        <div className='menu-button'></div>
                    
                         
                    
  </label>
                    <ul className="menu">
                        <li><Link href={"/shop"} className="salmon-mobile">Shop</Link></li>
                        <li><Link  href={"/delivery"}  className="salmon-mobile">Delivery</Link></li>
                        <li><Link  href={"/contact"}  className="salmon-mobile">Contact Us</Link></li>
                        <li><Link  href={"/about"}  className="salmon-mobile">About Us</Link></li>

    </ul>
  </section>
            <Link href='/'>
             <Image src='/crlogo.svg' width={100} height={60} alt="Coast-Republic logo" /> 
            </Link> 
           
                <form action="" className="search-form" method="GET">
               
                   <SearchInput/>
        
                      </form>
     
            
         <ul className="desktop">
 
                <li className=""><Link href='/shop' className="salmon">Shop</Link></li>
                <li className=""><Link href='/delivery' className="salmon">Delivery</Link></li>
                <li className=""><Link href='/contact' className="salmon">Contact Us</Link></li>
                <li className=""><Link href='#' className="salmon">About Us</Link></li>
            </ul>

            <div className="cart-wrapper">
          <Navbar/>
       
   
                <div className="socials">
                    <Link href='https://twitter.com/coastrepublic'    className="icon-black"> <FontAwesomeIcon icon={faTwitter} size="2x"  style={{color:"#0193dd"}} /></Link>
                    <Link href='https://www.instagram.com/coastrepublic/'   className="icon-black">  <FontAwesomeIcon icon={faInstagram} size="2x"   style={{color:"#405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d, #f56040, #f77737, #fcaf45, #ffdc80"}}/></Link>
                    <Link href='support@coastrepublic.com'  className="icon-black"> <FontAwesomeIcon icon={faEnvelope} size="2x"   style={{color:"#222"}} /></Link>
                    <Link href='https://www.youtube.com/coastrepublic'   className="icon-black"> <FontAwesomeIcon icon={faYoutube} size="2x"  style={{color:"red"}}/></Link>
                         
                </div>

              
                
            </div>
            <div>

            </div>
    
      </div>
   
   
  );
}





