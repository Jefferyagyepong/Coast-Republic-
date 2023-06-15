
import Image from "next/image";
import Link from "next/link";


export default function Show (){
    return (
     

         <div className="slider">
  

      <div className="slides">
          <div id="slide-1">
            <div>
                <h6>DryBlend T-shirt - Black | 100% cotton</h6>
                    <h2>&#8373;150</h2> 
            </div>
               
                    <Image src='/000.svg' width={300} height={300} alt="Azumah Nelson T-shirt Black" priority />
        
         
      <div className="wrapper six">
        <div>
            <h6 className="flicker">Curated for the community</h6>
        </div>
            </div>  
              <Link  href={"/shop"}><button type="" className="buy-now">Buy Now</button></Link>
          
</div>
          
          <div id="slide-2">
            <div>
                 <h6>Asakaa DryBlend T-shirt - Black | 100% cotton</h6>
      <h2>&#8373;250</h2> 
            </div>
                
                    <Image src='/asakaa.svg' width={300} height={300}  alt="Azumah Nelson T-shirt white" priority/>
      <div className="wrapper six">
        <div>
            <h6 className="flicker">Celebrating Ghanaian Drill </h6>
        </div>
            </div> 
              <Link  href={"/shop"}><button type=""  className="buy-now">Buy Now</button> </Link>
             
        </div>
        <div id="slide-3">
        <div>
                 <h6>DryBlend T-shirt - Black | 100% cotton</h6>
      <h2>&#8373;150</h2> 
            </div>   
                    <Image src='/blackHope.svg' width={300} height={300} alt="Coast-Republic T-shirt Front" priority/>
        <div className="wrapper six">
        <div>
            <h6 className="flicker">Curated for the community </h6>
        </div>
            </div> 
              <Link  href={"/shop"}><button type=""  className="buy-now">Buy Now</button>  </Link>
             
</div> 
    
        <div id="slide-4">
          <div>
                <h6>DryBlend T-shirt - Ash | 100% cotton</h6>
                    <h2>&#8373;150</h2> 
            </div>    
            <Image src='/Ash.svg' width={300} height={300} alt=""  priority/>
              <div className="wrapper six">
        <div>
            <h6 className="flicker">Curated for the community </h6>
        </div>
            </div> 
              <Link  href={"/shop"}><button type=""  className="buy-now">Buy Now</button> </Link>
     
        </div>
          <div id="slide-5">
               <h6>1957-2023</h6>
       <h2> &#8373;100</h2>      
                    <Image src='/' width={300} height={300} alt="Coast-Republic T-shirt Back"  priority/>
       <div className="wrapper six">
        <div>
            <h6 className="flicker">Happy Independence </h6>
        </div>
            </div> 
            <Link href={"/shop"}> <button type=""  className="buy-now">Buy Now</button>  </Link>
     
   
                
            </div>
     
</div> 
              
                <a href="#slide-1">1</a>
      <a href="#slide-2">2</a>
      <a href="#slide-3">3</a>
      <a href="#slide-4">4</a>
      <a href="#slide-5">5</a>
    </div>                    
   
   
  );
}
