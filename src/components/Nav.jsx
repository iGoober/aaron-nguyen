import './Nav.css';
import logo from '../assets/ElainaViolent.png'

const Nav = () => {
  return (
    <nav>
      <a href="/" className="logo-link">
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