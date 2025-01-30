import Link from 'next/link';
const images = [
  "/thugga.jpg",
 
];
function Show (){
  return(
 <div  className="footer-align-left">
  
      <div clasName="ibrid-box">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} className="slide" />
        ))}
      </div>
    
<h5>Jeans: Designer pairs in our collection </h5>
<Link href={"/products"}>Shop now</Link>


     </div>
  
  );
}
export default Show;