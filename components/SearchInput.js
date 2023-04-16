import Image from "next/image";
export default function SearchInput() {
  return (
    <div className="searchInput">
      <input type="text"  placeholder="Search T-shirts..." className="input"/>
      <div className="input-logo">
<Image src=' /Search.svg' width={30} height={30} alt=""/>
      </div>
    </div>
  );
}
