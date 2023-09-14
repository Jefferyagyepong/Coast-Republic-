
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function SearchInput() {
  return (
    <div className="searchInput">
      <form method="Get" action="#" className="search-form">
        <input type="search" placeholder="Search T-shirts..." className="input" id="site-search" name="q" /><FontAwesomeIcon  icon={faSearch} size="2x"  style={{ color: "black" }}/>
    
      </form>
   
      
    </div>
  );
}
