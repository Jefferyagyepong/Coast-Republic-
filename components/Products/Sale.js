 import Link from "next/link";
import Image from "next/image";
function Sale() {
  return (
    <div className="container-slider">

 <div className="wrapper">
             <h3 className="next-color-option">NEW SEASON</h3>

      <h2 className="next-color">
        Discount automatically applied at check out
      </h2>

      <Link href={"/shop"} className="add-to-cart">
        Shop Now
      </Link>
        </div>
      </div>
         <Image className="mySlides" alt="product" width={370} height={350} src={"https://images.unsplash.com/photo-1622445272461-c6580cab8755?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
    
        <Image className="mySlides" alt="product" width={370} height={350} src={"https://images.unsplash.com/photo-1554350747-ec45fd24f51b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
         <Image  className="mySlides" alt="product" width={370} height={350} src={"https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
        <Image  className="mySlides" alt="product" width={370} height={350} src={"https://images.unsplash.com/photo-1620794341491-76be6eeb6946?q=80&w=788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
      <button className="w3-button w3-display-left" onclick="plusDivs(-1)"></button>
<button className="w3-button w3-display-right" onclick="plusDivs(+1)"></button>
</div>
 </div>
 
  );
}
export default Sale;


