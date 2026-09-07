/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
export default function Collection() {
  return (
    <div className="blog-container">
      <h6>Pro Club T shirt </h6>
      <Link href={"/shop"}>Read</Link>
    </div>
  );
}