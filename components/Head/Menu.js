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
    </div>
  );
}