import "./navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <nav>
        <h1>logo</h1>
        <ul className="nav-items">
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">Shop</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
