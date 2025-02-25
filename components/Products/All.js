import Link from "next/link";
import Image from "next/image";

function All() {
  return (
    <>
      

        <div className="slider">
            <div className="imgs_slides">

                <input type="radio" name="radio-btn" id="radio1" />

                <input type="radio" name="radio-btn" id="radio2" />

                <input type="radio" name="radio-btn" id="radio3" />

                <input type="radio" name="radio-btn" id="radio4" />

                <input type="radio" name="radio-btn" id="radio5" />

          
                <div className="first slide">
     
                 <Image src={"/basqu.jpg"} alt="img" width={370} height={700} />
      <h5>How to dress for your age</h5><br/>

                <div className="slide">
              
                 <Image src={"/basqu.jpg"} alt="img" width={370} height={700} />
      <h5>How to dress for your age</h5><br/>

                </div>
                <div className="slide">
 
                 <Image src={"/basqu.jpg"} alt="img" width={370} height={700} />
      <h5>How to dress for your age</h5><br/>

                </div>
                <div className="slide">
      
                 <Image src={"/basqu.jpg"} alt="img" width={370} height={700} />
      <h5>How to dress for your age</h5><br/>

                </div>
                <div className="slide">
     
                 <Image src={"/basqu.jpg"} alt="img" width={370} height={700} />
      <h5>How to dress for your age</h5><br/>

                </div>
            
            </div>


            <div class="navigation">
                <label for="radio1" className="navigation-btn">
                </label>
                <label for="radio2" className="navigation-btn">
                </label>
                <label for="radio3" className="navigation-btn">
                </label>
                <label for="radio4" className="navigation-btn">
                </label>
                <label for="radio5" className="navigation-btn">
                </label>
            </div>
        
        </div>
           </div>
 
    
    
        
    </>
  );
}
export default All;


