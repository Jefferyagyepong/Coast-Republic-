import Link from "next/link";
function Menu() {
  return (
<>
<div id="menuToggle">
  <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
      <Link href="#"><li>Home</li></Link>
      <Link href="#"><li>Shop</li></Link>
      <Link href="#"><li>Trade-in</li></Link>
      <Link href="#"><li>Contact</li></Link>
      <Link href="#"><li>About</li></Link>
      <Link href="#"><li>Log In / Sign Up</li></Link>
      <Link href="#"><li>Vier Cart</li></Link>
     </ul>
</div>
    </>
  );
}
export default Menu;
