 import Link from "next/link";

export default function Sale() {
  return (
    <div className="shop-now">
 
      <h6>NEW SEASON</h6>
      
      <h6>
        Discount automatically applied at check out
      </h6>
      
      
      <Link href={"/shop"} className="add-to-cart">
        Shop Now
      </Link>
    
  );
}
