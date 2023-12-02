import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  return (
    <div className="blog-container">
      <br/>
      <div className="blog-item">
        <br />
        <br />
        <br />{" "}
        <Link
          href={"https://www.realmenrealstyle.com/mens-confidence-mistakes/"}
          className=""
          target="_blank"
        >
          <Image
            src={"/basqu.jpg"}
            width={170}
            height={180}
            alt="blog background"
            className="blog-image"
          />{" "}
          <br />
        </Link>
        <Link
          href={"https://www.realmenrealstyle.com/mens-confidence-mistakes/"}
          className=""
          target="_blank"
        >
          {" "}
          <br />
          <br />{" "}
          <h4>
            <b> What Makes Men Look Weak Mistakes Killing Your confidence</b>
          </h4>
        </Link>
      </div>
      <div className="blog-item">
        <br />
        <br />
        <br />{" "}
        <Link
          href={"https://www.realmenrealstyle.com/mens-confidence-mistakes/"}
          className=""
          target=""
        >
          <Image
            src={"/blog1.jpg"}
            width={170}
            height={180}
            alt="blog background"
            className="blog-image"
          />{" "}
          <br />
        </Link>
        <Link
          href={"https://www.realmenrealstyle.com/mens-confidence-mistakes/"}
          className=""
          target=""
        >
          {" "}
          <br />
          <br />{" "}
          <h4>
            <b> How To Dress For Your Age ( 20s, 30s, 40s, 50+ )</b>
          </h4>
        </Link>
      </div>
    </div>
  );
}
