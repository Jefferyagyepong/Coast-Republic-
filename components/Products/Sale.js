 import Link from "next/link";
import Image from "next/image";
function Sale() {
  return (

 
<div className="slides slowFade">
        <div className="slide">
          
          <Image  alt="product" src={"https://images.unsplash.com/photo-1577983127195-95ada1fa7387?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
        </div>
        <div className="slide">
            
        </div>
        <div className="slide">
             <Image   alt="product"  src={"https://images.unsplash.com/photo-1622445272461-c6580cab8755?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />

        </div>
        <div className="slide">
             <Image   alt="product" src={"https://images.unsplash.com/photo-1508507031248-e96f9cd82522?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
        </div>
        <div className="slide">
             <Image  alt="product" src={"https://images.unsplash.com/photo-1598457577935-662aa6d06382?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
      
          </div>
          <div className="slide">
            <Image  src={"https://images.unsplash.com/photo-1704949841973-9db544ac35ec?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
            </div>
              <div className="slide">
             <h2>New Season</h2>
            <Link className="add-to-cart" href={"/shop"}>Shop</Link>
          </div>
    </div>


  );
}
export default Sale;


