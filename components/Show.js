import Image from "next/image";

export default function Show() {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <Image src={"/Hoodie.svg"} height="300" width="250" alt="" />
        </div>
      </div>
    </div>
  );
}
