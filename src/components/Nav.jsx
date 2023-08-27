import './Nav.css';
import logo from '../assets/ElainaViolentLogo.png'
// Navbar Disappear: slideshow showing projects, about, and contact
const Nav = () => {
  return (
    <nav>
      <a href="https://igoober.github.io/personal-web" className="logo-link">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;