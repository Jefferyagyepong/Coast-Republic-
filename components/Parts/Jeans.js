/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
import Image from "next/image";

function Show() {
  return (
    <div className="footer-align-left">
      <Image
        src={"/gyamfua black OLIVE.svg"}
        alt="img"
        width={1200}
        height={400}
      />
      <h3>DESIGNER PAIRS IN OUR COLLECTION</h3>

      <Link href={"/products"}>Shop now</Link>
    </div>
  );
}
export default Show;
