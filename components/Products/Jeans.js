import Link from 'next/link';

function Show (){
  return(
 <div  className="footer-align-left">
 
    
<h5>Jeans: Designer pairs in our collection </h5>
<Link href={"/products"}>Shop now</Link>


     </div>
  
  );
}
export default Show;