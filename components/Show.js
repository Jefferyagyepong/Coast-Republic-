
import Image from "next/image";


export default function Show (){
    return (
     

         <div class="slider">
  

      <div class="slides">
        <div id="slide-1">
                    <h2>&#8373;100</h2>      
                    <Image src='/azumah-black.svg' width={300} height={300} alt="Azumah Nelson T-shirt Black" />
       <a href="#">Buy Now</a>             
</div>
          
        <div id="slide-2">
      <h2>&#8373;100</h2>      
                    <Image src='/azumah-white.svg' width={300} height={300}  alt="Azumah Nelson T-shirt white"/>
       <a href="#">Buy Now</a>  
        </div>
        <div id="slide-3">
       <h2> &#8373;100</h2>      
                    <Image src='/CRFront.svg' width={300} height={300} alt="Coast-Republic T-shirt Front"/>
       <a href="#">Buy Now</a>  
</div> 
    
        <div id="slide-4">
         <h2> &#8373;100</h2>      
                    <Image src='/nkrumah.svg' width={300} height={300} alt="Kwame Nkrumah T-shirt Ghana Independence"/>
       <a href="#">Buy Now</a>  
        </div>
        <div id="slide-5">
       <h2> &#8373;100</h2>      
                    <Image src='/CRBack.svg' width={300} height={300} alt="Coast-Republic T-shirt Back" />
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
