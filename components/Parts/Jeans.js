/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";


function Show() {
  return (
    <div className="background-container">
   
      <h6>Designer Pairs In Our Collection</h6>

      <Link className="btn-scale" href={"/products"}>Shop now</Link>
    </div>
  );
}
export default Show;