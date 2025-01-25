import Image from "next/image";
 function FootBottom() {
  return (
    <div className="ibrid-box">
      <div className="payment-container">
        <Image
          src={"/momo.jpg"}
          height={25}
          width={39}
          alt="momo logo"
          className="payment-logo"
        />
        <Image
          src={"/Visa.png"}
          height={25}
          width={39}
          alt="momo logo"
          className="payment-logo"
        />
      </div>
      <em>
        {" "}
        <h6 className="footer-tag">Powered by Paystack</h6>
      </em>
    </div>
  );
 }
export default FootBottom;
