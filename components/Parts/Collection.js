/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
export default function Collection() {
  return (
    <div className="blog-container">
      
      <h4>Pro Club T Shirt </h4>
      <Link href={"/shop"}>Shop</Link>
    </div>
  );
}