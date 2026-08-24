/* eslint-disable react/react-in-jsx-scope */

import Link from "next/link";
import Image from "next/image";
function FootBottom() {
  return (
  <>
   <h6 className="text-align-center">Accepted Payment Methods</h6>
      
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
      <div>
        <p className="text-align-center">
          © {new Date().getFullYear()} Coast Republic Store. All rights
          reserved.
        </p>
      </div>
      </>
  );
}
export default FootBottom;