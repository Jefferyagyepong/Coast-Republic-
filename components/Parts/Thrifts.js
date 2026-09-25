/* eslint-disable react/react-in-jsx-scope */

import Link from "next/link";
import Image from "next/image";

function All() {
  return (
    <div className="background-container-women">
      <h6> Selling Fast</h6>
      <Link className="btn-scale-women" href={"/products"}>Shop now</Link>
    </div>
  );
}
export default All;