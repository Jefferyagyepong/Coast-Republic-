import Image from "next/image";
import Link from "next/link";
 function FootBottom() {
  return (
    <div className="ibrid-box">
    
      <div className="payment-container">
        <Link href={"/privacy"} className="footer-tag">
          {" "}
          Privacy 
        </Link>     
          |
        <Link href={"/terms"} className="footer-tag">
          {" "}
          Terms 
        </Link>
      </div>
 <br/>
      <em>
        {" "}
        <h6 className="footer-tag">Powered by Paystack</h6>
      </em> <br/>
    </div>
  );
 }
export default FootBottom;
