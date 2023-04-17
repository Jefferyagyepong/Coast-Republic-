
import Image from "next/image";


export default function Show (){
    return (
     

         <div className="slider">
  

      <div className="slides">
          <div id="slide-1">
            <div>
                <h2>Black Coast</h2>
                    <h6>&#8373;150</h6> 
            </div>
               
                    <Image src='/cr01.svg' width={300} height={300} alt="Azumah Nelson T-shirt Black" priority />
        
         
      <div className="wrapper six">
        <div>
            <h6 className="flicker">Curated for the community</h6>
        </div>
            </div>  
       <button type="">Buy Now</button>           
</div>
          
          <div id="slide-2">
            <div>
                 <h2>Azumah Nelson white</h2>
      <h6>&#8373;200</h6> 
            </div>
                
                    <Image src='/azumah-white.svg' width={300} height={300}  alt="Azumah Nelson T-shirt white" priority/>
      <div className="wrapper six">
        <div>
            <h6 className="flicker">Celebrating Ghanaian legends </h6>
        </div>
            </div> 
             <button type="">Buy Now</button>    
        </div>
        <div id="slide-3">
        <div>
                 <h2>Azumah Nelson Black</h2>
      <h6>&#8373;200</h6> 
            </div>   
                    <Image src='/azumah-black.svg' width={300} height={300} alt="Coast-Republic T-shirt Front" priority/>
        <div className="wrapper six">
        <div>
            <h6 className="flicker">Celebrating Ghanaian legends </h6>
        </div>
            </div> 
               <button type="">Buy Now</button>  
</div> 
    
        <div id="slide-4">
          <div>
                <h6>Off Coast</h6>
                    <h2>&#8373;150</h2> 
            </div>    
            <Image src='/cr02.svg' width={300} height={300} alt=""  priority/>
              <div className="wrapper six">
        <div>
            <h6 className="flicker">Celebrating Ghanaian legends </h6>
        </div>
            </div> 
          <button type="">Buy Now</button>  
        </div>
        <div id="slide-5">
       <h2> &#8373;100</h2>      
                    <Image src='/CRBack.svg' width={300} height={300} alt="Coast-Republic T-shirt Back"  priority/>
       <a href="#">Buy Now</a>  
                
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
