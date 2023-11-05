import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  return (
    <div className="blog-container">
      <div className="blog-item">
        <Link
          href={"https://www.realmenrealstyle.com/mens-confidence-mistakes/"}
          className="shop-nows"
          target=""
        >
          <Image
            src={
              ""
            }
            width={100}
            height={180}
            alt="blog background"
          />
        </Link>
        <Link
          href={"https://www.realmenrealstyle.com/mens-confidence-mistakes/"}
          className=""
          target=""
        >
          {" "}
          <h2>
            <b> What Makes Men Look Weak Mistakes Killing Your confidence</b>
          </h2>
        </Link>
      </div>
      <div className="blog-item">
        <Link
          href={"https://www.realmenrealstyle.com/mens-confidence-mistakes/"}
          className="shop-nows"
          target=""
        >
          <Image
            src={""}
            width={100}
            height={180}
            alt="blog background"
          />
        </Link>
        <Link
          href={"https://www.realmenrealstyle.com/mens-confidence-mistakes/"}
          className=""
          target=""
        >
          {" "}
          <h2>
            <b> How To Dress For Your Age ( 20s, 30s, 40s, 50+ )</b>
          </h2>
        </Link>
      </div>
    </div>
  );
}
