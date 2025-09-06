import Link from "next/link";
import Image from "next/image";


const Navbar = () => {


  return (
    <>
      <div className="flex-row">
        <Link href="/cart">
          <Image src={"/bag.svg"} width={55} height={65} alt="logo" />
        </Link>
        {0}
      </div>
    </>
  );
};

export default Navbar;
