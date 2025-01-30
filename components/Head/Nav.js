/* Navbar container */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #333;
  color: white;
}

/* Logo */
.logo {
  font-size: 24px;
  font-weight: bold;
}

/* Hamburger icon */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: white;
  margin: 4px 0;
  transition: all 0.3s ease;
}

/* Open state for hamburger */
.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Navigation links */
.navLinks {
  display: flex;
  list-style: none;
  gap: 20px;
}

.navLinks li a {
  text-decoration: none;
  color: white;
  font-size: 18px;
  transition: color 0.3s ease;
}

.navLinks li a:hover {
  color: #ffcc00;
}

/* Responsive: Show hamburger menu on small screens */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .navLinks {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: #222;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
  }

  .navLinks.show {
    transform: translateY(0);
  }

  .navLinks li {
    margin: 10px 0;
  }
}
