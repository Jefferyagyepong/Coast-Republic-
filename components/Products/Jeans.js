import Link from "next/link";
import Image from "next/image";

function Show() {
  return (
    <div className="footer-align-left">
      <Image
        src={
          "/gyamfua black OLIVE.svg"
        }
        width={380}
        height={700}
        alt="img"
      />
      <h3>DESIGNER PAIRS IN OUR COLLECTION</h3>

      <Link href={"/products"}>Shop now</Link>
    </div>
  );
}
export default Show;
