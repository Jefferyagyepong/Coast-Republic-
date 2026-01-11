/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
import Image from "next/image";

function All() {
  return (
    <div className=”componentSpacing”>
      <Image src={"/wrangler.svg"} alt="img" width={1200} height={400} />
      <h3>Jeans</h3>

      <Link href={"/products"}>Shop now</Link>
    </div>
  );
}
export default All;
