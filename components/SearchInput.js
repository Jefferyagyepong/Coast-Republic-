import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function SearchInput() {
  return (
    <form method="Get" action="#" className="margin-top">
      <div className="group-form">
        <input
          type="search"
          placeholder="Search..."
          className="input"
          id="site-search"
          name="q"
        />
        <FontAwesomeIcon icon={faSearch} size="2x" style={{ color: "gray" }} />
      </div>
    </form>
  );
}
