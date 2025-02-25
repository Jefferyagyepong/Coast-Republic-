import Link from "next/link";
function Menu() {
  return (
<>
        <section className="top-nav">
  
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' for="menu-toggle">
    <div className='menu-button'></div>
  </label>
     <ul className="menu">
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
      <li>Five</li>
    </ul>
  </section>
    </>
  );
}
export default Menu;
