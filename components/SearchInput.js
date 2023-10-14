import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function SearchInput() {
  return (
    <form method="Get" action="#">
      <div className="group-form">
        <button type="submit" className="btn-search">
          <FontAwesomeIcon
            icon={faSearch}
            size="1x"
            style={{ color: "gray" }}
          />
        </button>
        <input
          type="search"
          placeholder="Search..."
          className="input "
          id="site-search"
          name="search"
        />
      </div>
    </form>
  );
}
