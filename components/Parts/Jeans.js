/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";


function Show() {
  return (
    <div className="background-container">
   
      <h4>Designer Pairs In Our Collection</h4>

      <Link className="btn-scale" href={"/products"}>Shop now</Link>
    </div>
  );
}
export default Show;