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
        <a href="/">Home</a>
        <a href="/b">Blog</a>
        <a href="/a">About</a>
        <a href="/c">Contact</a>
      </div>
    </div>
  </div>
</div>
  );
}
export default Menu;
