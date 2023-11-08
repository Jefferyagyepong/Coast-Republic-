import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Proceed() {
  return (
    <div className="integrity">
      <Link href={"/checkout"} className="shop-nows">
      <FontAwesomeIcon icon={faLock} size="1x"/>  Proceed To Checkout
      </Link>
    </div>
  );
}
