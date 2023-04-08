
import Image from "next/image";


export default function Product (){
    return (
     
        <div className="product">
            <Image src='/azumah-white.svg' width={350} height={350} alt="Azumah Nelson T-shirt White"/>
            <div>
                <h2>&#8373;100</h2>
                <h4>Azumah Nelson T-shirt</h4>
                <p> Logo print t-shirt. 100% cotton </p>
                   <div class="colors">
                <div class="color"></div>
                <div class="color"></div>
            </div>
            <div class="sizes">
                <div class="size">S</div>
                <div class="size">M</div>
                    <div class="size">L</div>
                     <div class="size">XL</div>
            </div>
                <button class="productButton">BUY NOW!</button>
                
        </div>
        </div>
      
            
               
   
   
  );
}
