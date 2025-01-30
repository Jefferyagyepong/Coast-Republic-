import Link from 'next/link';
import Image from 'next/image';
function Show (){
  return(
  <div className="jean-bg">
    <image  width={450} height={900}src={"https://images.unsplash.com/photo-1565416700374-d0efa117d162?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="unsplash img"}/>
<h2>Jeans: Designer pairs in our collection </h2>
<Link href={"/products"}>Shop now</Link>


     </div>
  
  );
}
export default Show;