import Image from "next/image";
export default function FootBottom() {
  return (
    <div className="down">
    
      <div className="payment-container">
        <Image
          src={"/momo.jpg"}
          height={28}
          width={25}
          alt="momo logo"
          className="payment-logo"
        />
        <Image
          src={"/Visa.png"}
          height={28}
          width={25}
          alt="momo logo"
          className="payment-logo"
        />
      </div>
    </div>
  );
}
