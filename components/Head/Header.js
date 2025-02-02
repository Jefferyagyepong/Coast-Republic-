import Image from "next/image";
import Link from "next/link.js";

function Header() {
  return (
    <header>
        <Link href={"./"}>
          <Image
            src={"/crlogo.svg"}
            width={90}
            height={70}
            alt="logo"
          />
        </Link>
        <h2 className="logo-name">Coast Republic</h2>
    
    </header>
  );
}
export default Header;
