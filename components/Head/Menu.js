import Link from "next/link";
function Menu() {
  return (

//     <section className="top-nav">
//       <input id="menu-toggle" type="checkbox" />

//       <label className="menu-button-container" htmlFor="menu-toggle">
//         <div className="menu-button"></div>
//       </label>
//       <ul className="menu">
//         <li>
//           <Link href={"/about"} id="header-link">
//             About
//           </Link>
//         </li>
//         <li>
//           <Link href={"/products/"} id="footer-link">
//             Shop
//           </Link>
//         </li>
//         <li>
//           <Link href={"/contact"} id="footer-link">
//             Contact
//           </Link>
//         </li>
//         <li>
//           <Link href={"/help"} id="footer-link">
//             Help Center
//           </Link>
//         </li>
//         <li>
//           <Link href={"/refund"} id="footer-link">
//             Refunds
//           </Link>
//         </li>
//       </ul>
//     </section>

<>
 <nav>
      <div className="navbar">
        <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>  
        
          <div className="menu-items">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/products/">Shop</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/contact">contact</Link></li>
          </div>
        </div>
      </div>
    </nav>
    </>

  );
}
export default Menu;
