import React, { useRef, useLayoutEffect } from "react";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header2() {
  return (
    <div className="head-two">
      <ul className="list">
        <li>
          <Link href={"/shop"} className="salmon-mobile">
            Shop
          </Link>
        </li>
        <li>
          <Link href={"/about"} className="salmon-mobile">
            About
          </Link>
        </li>
        <li>
          <Link href={"/contact"} className="salmon-mobile">
            Customer Service
          </Link>
        </li>
        <li>
          <Link href={"/shop"} className="salmon-mobile">
            Sale
          </Link>
        </li>
      </ul>
      <br />
      <form>
        <input
          type="text"
          name="search"
          value=""
          placeholder="search"
          className="form-search"
        />

        <button type="submit" className="search-button">
          <FontAwesomeIcon
            icon={faSearch}
            size="1x"
            color="black"
                      opacity={0.7}
                      
          />
        </button>
      </form>
    </div>
  );
}
