import Image from "next/image";
export default function FootBottom() {
  return (
    <div className="down">
    
      <div className="payment-container">
        <Image
          src={"/momo.jpg"}
          height={15}
          width={19}
          alt="momo logo"
          className="payment-logo"
        />
        <Image
          src={"/Visa.png"}
          height={15}
          width={19}
          alt="momo logo"
          className="payment-logo"
        />
      </div>
    </div>
  );
}
