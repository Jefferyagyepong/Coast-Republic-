import Image from 'next/image';
import Link from "next/link";

const Footer = () => {
  return (
<<<<<<< HEAD
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
        </ul>
        <br />
      </div>
      <div className="footer-align-left">
        <h4>GET THE COAST REPUBLIC APP </h4>
        <br />
        <p>
          Download and enjoy our app anytime, anywhere for IOS and Android
          devices.
        </p>
        <br />
=======
    <footer className="footer">
      <div className="container">
        {/* Categories Section */}
        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li><Link href="/category/electronics">Tees</Link></li>
            <li><Link href="/category/clothing">Jeans & Khaki </Link></li>
            <li><Link href="/category/home-kitchen">Sneakers</Link></li>
            <li><Link href="/category/sports">Sports Jerseys </Link></li>
          </ul>
        </div>

        {/* Customer Service Section */}
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><Link href={"/contact"}>Contact Us</Link></li>
            <li><Link href={"/delivery"}>Delivery Info</Link></li>
            <li><Link href={"/delivery"}>Returns & Refunds</Link></li>
            <li><Link href={"/help/f"}>FAQ</Link></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><Link href={"/terms"}>Terms & Conditions</Link></li>
            <li><Link href={"/privacy"}>Privacy Policy</Link></li>
            <li><Link href={"/cookies"}>Cookie Policy</Link></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li><Link href={"https://facebook.com"} target="_blank" rel="noopener noreferrer">Facebook</Link></li>
            <li><Link href={"https://twitter.com"} target="_blank" rel="noopener noreferrer">Twitter</Link></li>
            <li><Link href={"https://instagram.com"} target="_blank" rel="noopener noreferrer">Instagram</Link></li>        
          </ul>
        </div>
      </div>
      
        <div className="footer-align-left"> 
        <h4>GET THE COAST REPUBLIC APP </h4>
        <p>Download and enjoy our app anytime, anywhere for IOS and Android devices.</p>
>>>>>>> 4aeb9a5b6fadb37cc983e34bcf41a738cd60ff8b

      <div className="ibrid-flex">
          <Image src={"/apple.svg"} alt="apple" width={40} height={30} />
          <Image src={"/android.svg"} alt="android" width={40} height={30} />
        </div>
      </div>
<<<<<<< HEAD
      <FootBottom />
      <h5>COAST REPUBLIC ACCEPTS </h5> <br></br>
    
      <div className="payment-container">
        <Image
=======
                        
      <h5>COAST REPUBLIC ACCEPTS </h5>
      <div className="payment-container">            
          <Image
>>>>>>> 4aeb9a5b6fadb37cc983e34bcf41a738cd60ff8b
          src={"/telecel.JPG"}
          height={30}
          width={35}
          alt="momo logo"
          className="footer-tag"
<<<<<<< HEAD
        />

        <Image
=======
        />               
          <Image
>>>>>>> 4aeb9a5b6fadb37cc983e34bcf41a738cd60ff8b
          src={"/momo.jpg"}
          height={30}
          width={35}
          alt="momo logo"
          className="footer-tag"
<<<<<<< HEAD
        />

        <Image
=======
        />               
          <Image
>>>>>>> 4aeb9a5b6fadb37cc983e34bcf41a738cd60ff8b
          src={"/Visa.png"}
          height={30}
          width={36}
          alt="momo logo"
          className="footer-tag"
<<<<<<< HEAD
        />
        <Image
=======
        />  
         <Image
>>>>>>> 4aeb9a5b6fadb37cc983e34bcf41a738cd60ff8b
          src={"/Airtel-Money-logo.jpg"}
          height={30}
          width={36}
          alt="momo logo"
          className="footer-tag"
<<<<<<< HEAD
        />
        <br />
      </div>{" "}
      <br />
      <h6 className="footer-tag">
        &copy; {new Date().getFullYear()} Coast Republic All rights Reserved
      </h6>{" "}
      <br />
    </footer>
  );
}
=======
        />  
     
      </div> 

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Coast Republic Store. All rights reserved.</p>
      </div>

      <style jsx>{`
        .footer {
          background: #222;
          color: #fff;
          padding: 20px 0;
          text-align: center;
        }
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
        }
        .footer-section {
          max-width: 200px;
        }
        .footer-section h4 {
          margin-bottom: 10px;
          font-size: 16px;
        }
        .footer-section ul {
          list-style: none;
          padding: 0;
        }
        .footer-section ul li {
          margin: 5px 0;
        }
        .footer-section ul li a {
          color: #ccc;
          text-decoration: none;
          font-size: 14px;
        }
        .footer-section ul li a:hover {
          color: #fff;
        }
        .social-links li {
          display: inline;
          margin-right: 10px;
        }
        .footer-bottom {
          margin-top: 20px;
          font-size: 12px;
          border-top: 1px solid #444;
          padding-top: 10px;
        }
      `}</style>
    </footer>
  );
};

>>>>>>> 4aeb9a5b6fadb37cc983e34bcf41a738cd60ff8b
export default Footer;
