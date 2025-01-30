import Link from 'next/link';
import Image from 'next/image';
  
function Show (){
  return(
 <div className="pdt-box">
  <Image src={"/thugga.jpg"} width={480} height={600}  alt="img"/>
  
      
    
<h5>Jeans: Designer pairs in our collection </h5>
<Link href={"/products"}>Shop now</Link>

 
     </div>
    
    
  
  );
}
export default Show;