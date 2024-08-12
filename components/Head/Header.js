
import Image from "next/image";
import CartBasket from "./CartBasket";
import Link from "next/link.js";

export default function Header() {

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
        <h2 className="logo-name">Coast Republic Inc.</h2>
        <CartBasket />
    </header>
  );
}
