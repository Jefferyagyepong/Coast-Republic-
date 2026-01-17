/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";


function Show() {
  return (
    <div className="background-container">
   
      <h3>DESIGNER PAIRS IN OUR COLLECTION</h3>

      <Link className="btn-scale" href={"/products"}>Shop now</Link>
    </div>
  );
}
export default Show;
