import "./navigation.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo4.png";
import { useState } from "react";

function Navigation({ cartQuantity, setShowModal, login, logout, profile }) {
  const [showNav, setShowNav] = useState(false);

  function handleClick() {
    setShowNav(!showNav);
  }

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/shopping-cart">
            <img src={logo} alt="" />
            <h1>Botanic</h1>
          </Link>
        </div>
        <ul className={showNav ? "nav-items show" : "nav-items"}>
          <li>
            <Link to="/shopping-cart" onClick={() => setShowNav(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shopping-cart/products"
              onClick={() => setShowNav(false)}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link to="/shopping-cart/contact" onClick={() => setShowNav(false)}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="nav-buttons">
          <>
            {login} {logout}
            <Link to="/shopping-cart/dashboard">{profile}</Link>
          </>
          <button className="nav-cart" onClick={() => setShowModal(true)}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="items-number">{cartQuantity}</span>
          </button>
        </div>
        <div className="burger-menu" onClick={handleClick}>
          {showNav ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
