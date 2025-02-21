import Link from "next/link";
function Menu() {
  return (
  <div id="navbar">
  <div id="navbar-content">
    <span class="text text-bold">M😋ji</span>
    <div id="defocus"></div>
    <div id="navbar-link-area">
      <div id="menu-bg"></div>
      <div id="menu-btn">
        <span class="text text-bold"></span>
      </div>
      <div class="text navbar-links">
        <Link href="/">Home</Link>
        <Link href="/b">Blog</Link>
        <Link href="/a">About</Link>
        <Link href="/c">Contact</Link >
      </div>
    </div>
  </div>
</div>
  );
}
export default Menu;
