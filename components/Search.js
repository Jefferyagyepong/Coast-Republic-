import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
export default function Search() {

  return (
    <div className="group-form">
      <form action="#" method="GET">
        <input
          type="text"
          name=""
          value=""
          placeholder="search"
          className="input-search"
        />
      </form>
    
    </div>
  );
}
