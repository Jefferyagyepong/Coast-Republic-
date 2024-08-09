import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  return (
    <div className="blog-container">
      <p>We write and share blogs on fashion. check out here</p>{" "}<br/>
      <nav>
        <Link href={"#image-1"} className="nav-arrows">
          <Image
            src="/arrow-back-circle-outline.svg"
            alt="back arrow svg"
            width={20}
            height={20}
          />
        </Link> swipe
        <Link href={"#image-2"} className="nav-arrows">
          <Image
            src="/arrow-forward-circle-outline.svg"
            alt="forward arrow"
            width={20}
            height={20}
          />
        </Link>
      </nav>
      <div className="list-wrapper">
        <span className="list">
          <span className="item">
            <div className="content">
              <Link
                href={
                  "https://www.realmenrealstyle.com/mens-confidence-mistakes/"
                }
                target="_blank"
              >
                <Image
                  src={"/basqu.jpg"}
                  width={170}
                  height={180}
                  alt="basquet"
                  id="image-1"
                />{" "}
              </Link>
            </div>
            <br />
            <Link
              href={
                "https://www.realmenrealstyle.com/mens-confidence-mistakes/"
              }
              className="blog-link"
            >
              <p>What Makes Men Look Weak Mistakes Killing Your confidence</p>
            </Link>
          </span>
          <span className="item">
            <div className="content">
              <Link
                href={
                  "https://www.realmenrealstyle.com/mens-confidence-mistakes/"
                }
                target=""
              >
                <Image
                  src={"/blog1.jpg"}
                  width={170}
                  height={180}
                  alt="blog background"
                  id="image-2"
                />{" "}
              </Link>
            </div>
            <br />
            <Link
              href={
                "https://www.realmenrealstyle.com/mens-confidence-mistakes/"
              }
              className="blog-link"
            >
              <p>How To Dress For Your Age ( 20s, 30s, 40s, 50+ )</p>
            </Link>
          </span>
        </span>
      </div>
    </div>
  );
}
