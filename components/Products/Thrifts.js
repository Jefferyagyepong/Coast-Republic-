import Link from 'next/link';
import Image from "next/image";
 function Thrifts({ product }) {

  return (
    <div className="ibrid-box"><br/><br/>
      
        {" "}
        <h3>THRIFTS ARENA</h3>
      <br/><br/>

      <p>Explore thousands of products, new and affordable daily</p>
<br/>
      <div className="ibrid-box">
        <Image
          src={"/products/force1a.JPG"}
          alt="Air Force sneaker"
          width={170}
          height={180}
        />
        <em><br/>
          {" "}
          <h5>Air Force 1 low </h5>
          <h5>$90</h5>
        </em><br/>
        <Link href={/products}>
          shop Now
          </Link>
  
      </div>
    </div>
  );
 }
export default Thrifts;
