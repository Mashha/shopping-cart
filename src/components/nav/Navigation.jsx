import { useState } from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  const [items, setItems] = useState(0);

  return (
    <header>
      <nav>
        <h1>logo</h1>
        <ul className="nav-items">
          <li>
            <Link to="/shopping-cart">Home</Link>
          </li>
          <li>
            <Link to="/shopping-cart/products">Shop</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
          <button className="cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="items-number">{items}</span>
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
