import { faBars, faToolbox } from "@fortawesome/free-solid-svg-icons";

// get our fontawesome imports
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faEnvelope,
  faFileInvoice,
  faUser,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bubble as Menu } from "react-burger-menu";

export default function SideBarMobile() {
  return (
    <div className="dropdown">
      <Menu className="menu-mobile">
        <a href="../" className="menu-item">
          Home
        </a>
        <a href="#" className="menu-item">
          Delivery
        </a>
        <a href="#" className="menu-item">
          About Us
        </a>
        <a href="#" className="menu-item">
          T-shirts
        </a>
        <a href="#" className="menu-item">
          Terms and Conditions
        </a>
      </Menu>
    </div>
  );
}
