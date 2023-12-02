import Image from "next/image";
export default function FootBottom() {
  return (
    <div className="down">
      &copy; {new Date().getFullYear()}
      <abbr title="Coast Reppublic" className="black">
        {" "}
        C-R Inc.
      </abbr>{" "}
      <br /> <br />
      <div className="payment-container">
        <Image
          src={"/momo.png"}
          height={50}
          width={75}
          alt="momo logo"
          className="payment-logo"
        />
        <Image
          src={"/Visa.png"}
          height={50}
          width={75}
          alt="momo logo"
          className="payment-logo"
        />
      </div>
    </div>
  );
}
