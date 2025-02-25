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
      <li><Link href="/">Home</Link></li>
         <li><Link href="/products/">Shop</Link></li>
       <li><Link href="/privacy">Privacy</Link></li>
       <li><Link href="/delivery">Track Order</Link></li>
       <li><Link href="/about">About Us</Link></li>
    </ul>
  </section>
    </>
  );
}
export default Menu;
