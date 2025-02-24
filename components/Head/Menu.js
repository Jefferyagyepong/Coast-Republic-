import Link from "next/link";
function Menu() {
  return (
<nav role="navigation">
  <div id="menuToggle">
  
    <input type="checkbox" id="menuCheckbox" />

    <span></span>
    <span></span>
    <span></span>

    <ul id="menu">
 
      <li>
        <Link href="#">
          <label for="menuCheckbox" onclick="this.parentNode.click();">Home</label>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <label for="menuCheckbox" onclick="this.parentNode.click();">About</label>
        </Link>
      </li>
    
      <li><label for="menuCheckbox"><Link>Info</Link></label></li>
      <li><label for="menuCheckbox"><Link>Contact</Link></label></li>

      <li>
        <Link href="https://erikterwan.com/" target="_blank">Show me more</Link>
      </li>
    </ul>
  </div>
</nav>
  );
}
export default Menu;
