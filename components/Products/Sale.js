 import Link from "next/link";
import Image from "next/image";


function Sale() {
  return (
  
<div id="slider">
  <div class="slides">
	
    <div class="slider">
      <div class="legend"></div>
      <div class="content">
        <div class="content-txt">
             <h3 className="next-color-option">NEW SEASON</h3>

      <h2 className="next-color">
        Discount automatically applied at check out
      </h2>

      <Link href={"/shop"} className="add-to-cart">
        Shop Now
      </Link>
        </div>
      </div>
      <div class="image">
        <Image className="mySlides" src={"https://unsplash.com/photos/black-and-green-cruiser-board-near-black-nike-shoes-eyhC3UQHQgc"}>
<Image className="mySlides" src={"https://images.unsplash.com/photo-1554350747-ec45fd24f51b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}>
<Image className="mySlides" src={"https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}>
<Image className="mySlides" src={"https://unsplash.com/photos/unpaired-red-adidas-sneaker-pO2bglTMJpo"}>
      </div>
    </div>
 
  </div>
  <div class="switch">
    <ul>
      <li>
        <div class="on"></div>
      </li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</div>


 
  );
}
export default Sale;
 
