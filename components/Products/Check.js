
import Link from "next/link";

export default function Check() {
  return (
    <div className="collection">
      <Link href={"/cart"}>
        <span>View cart and checkout</span>
      </Link>
    </div>
  );
}
