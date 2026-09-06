/* eslint-disable react/react-in-jsx-scope */

import Link from "next/link";
import Image from "next/image";
function FootBottom() {
  return (
  <>
  <div className="flex-inline">
   <p>Accepted Payment Methods</p>
 </div >
      
      <div className="payment-container">
        <Image
          src={"/telecel.JPG"}
          height={20}
          width={25}
          alt="momo logo"
          className="footer-tag"
        />
        <Image
          src={"/momo.jpg"}
          height={20}
          width={25}
          alt="momo logo"
          className="footer-tag"
        />

        <Image
          src={"/Visa.png"}
          height={20}
          width={25}
          alt="momo logo"
          className="footer-tag"
        />
        <Image
          src={"/Airtel-Money-logo.jpg"}
           height={20}
          width={25}
          alt="momo logo"
          className="footer-tag"
        />
      </div>
        <Image
          src={"View recent photos.png"}
          height={30}
          width={130}
          alt="momo logo"
          className="signature"
        />
      
   
      {/* Copyright */}
      <div className="flex-inline">
        <p>
          © {new Date().getFullYear()} All rights
          reserved.
        </p>
      </div>
      </>
  );
}
export default FootBottom;