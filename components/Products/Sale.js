 import Link from "next/link";
import Image from "next/image";
import { useEffect } from 'react';

function Sale() {
  useEffect(() => {
 var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
  }, []);

  return (
   <div className="shop-now">

   <h3 className="next-color-option">NEW SEASON</h3>

      <h2 className="next-color">
        Discount automatically applied at check out
      </h2>

      <Link href={"/shop"} className="add-to-cart">
        Shop Now
      </Link>
 <Image className="mySlides" src={"https://unsplash.com/photos/black-and-green-cruiser-board-near-black-nike-shoes-eyhC3UQHQgc"}>
<Image className="mySlides" src={"https://images.unsplash.com/photo-1554350747-ec45fd24f51b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}>
<Image className="mySlides" src={"https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}>
<Image className="mySlides" src={"https://unsplash.com/photos/unpaired-red-adidas-sneaker-pO2bglTMJpo"}>
        <button className="w3-button w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
<button className="w3-button w3-display-right" onclick="plusDivs(+1)">&#10095;</button>

       
    </div>
 
  );
}

export default Sale;
