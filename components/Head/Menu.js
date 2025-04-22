// components/HamburgerMenu.jsx


export default function HamburgerMenu() {
  return (
    <div className="hamburger">
      <input type="checkbox" className="checkbox" id="hamburger-toggle" />
      <label htmlFor="hamburger-toggle" className="label">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </label>
            <div className="menu-items">
              <ul>
                <li>
                  <Link id="menu-link" href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/products/">Shop</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy</Link>
                </li>
                <li>
                  <Link href="/contact">contact</Link>
                </li>
              </ul>
            </div>
    </div>
  );
}