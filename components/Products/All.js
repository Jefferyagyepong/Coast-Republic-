import Link from "next/link";
import Image from "next/image";

function All() {
  return (
        
  <div class="carousel-container">
        <input type="radio" name="carousel" id="slide1" checked>
        <input type="radio" name="carousel" id="slide2">
        <input type="radio" name="carousel" id="slide3">

        <div class="slides">
            <div class="slide">
                 <Image src={"/basqu.jpg"} alt="img" width={370} height={700} />
      <h5>How to dress for your age</h5><br/>
      <Link href={"/products"}>Read</Link>
                </div>
            <div class="slide">Slide 2</div>
            <div class="slide">Slide 3</div>
        </div>

        <div class="nav">
            <label for="slide1"></label>
            <label for="slide2"></label>
            <label for="slide3"></label>
        </div>
    </div>
    
    
  );
}
export default All;


