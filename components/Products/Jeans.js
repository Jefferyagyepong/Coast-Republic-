import Link from 'next/link';
import Image from 'next/image';
function Show (){
  return(
 <div  className="footer-align-left">
 
    
<h2>Jeans: Designer pairs in our collection </h2>
<Link href={"/products"}>Shop now</Link>


     </div>
  
  );
}
export default Show;