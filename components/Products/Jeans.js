import Link from 'next/link';
function Show (){
  return(
  <div className="jean-bg">
<h2>Jeans: Designer pairs in our collection </h2>
<Link href={"/products"}>Shop now</Link>


     </div>
  
  );
}
export default Show;