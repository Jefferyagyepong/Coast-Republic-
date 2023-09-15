import Image from "next/image";
import Link from "next/link";

export default function Show() {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <Image src={"/stoner.jpg"} height="300" width="250" alt="" />
        </div>
      </div>
    </div>
  );
}
