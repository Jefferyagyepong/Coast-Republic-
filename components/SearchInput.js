import Image from "next/image";

import Link from "next/link";
export default function SearchInput() {
  return (
    <div className="searchInput">
      <input type="search"  placeholder="Search T-shirts..." className="input" id="site-search" name="q"/>
      <div className="input-logo">
        <Link href={"#"}>
          <Image src=' /Search.svg' width={30} height={30} alt=""/>
        </Link>

      </div>
    </div>
  );
}
