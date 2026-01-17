/* eslint-disable react/react-in-jsx-scope */

import Link from "next/link";
import Image from "next/image";

function All() {
  return (
    <div className="background-container-women">
      <h3>Tees</h3>
      <Link className="btn-scale" href={"/products"}>Shop now</Link>
    </div>
  );
}
export default All;