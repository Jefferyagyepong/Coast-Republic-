import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  return (
    <div className="blog-container">
      <div className="blog-item">
        <Link
          href={"https://www.realmenrealstyle.com/mens-confidence-mistakes/"}
          className="shop-nows"
          target="_blank"
        >
          <Image src={"/basqu.jpg"} width={170} height={180} alt="blog background" />
        </Link>
        <Link
          href={"https://www.realmenrealstyle.com/mens-confidence-mistakes/"}
          className=""
          target="_blank"
        >
          {" "}
          <h4>
            <b> What Makes Men Look Weak Mistakes Killing Your confidence</b>
          </h4>
        </Link>
      </div>
      <div className="blog-item">
        <Link
          href={"https://www.realmenrealstyle.com/mens-confidence-mistakes/"}
          className="shop-nows"
          target=""
        >
          <Image
            src={
              "/blog1.jpg"
            }
            width={170}
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
          <h4>
            <b> How To Dress For Your Age ( 20s, 30s, 40s, 50+ )</b>
          </h4>
        </Link>
      </div>
    </div>
  );
}
