import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
export default function SearchInput() {
  return (
    <div className="group-form">
      <Link href={"/search"}>
        <button type="submit" className="btn-search">
          <FontAwesomeIcon
            icon={faSearch}
            size="1x"
            style={{ color: "gray" }}
          />
        </button>
      </Link>
    </div>
  );
}