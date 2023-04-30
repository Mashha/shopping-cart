import { useState } from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
import logo4 from "../../images/logo4.png";
import Cart from "../cart/Cart";

function Navigation({ item, showModal, setShowModal, cart, setCart }) {
  
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo4} alt="" />
          <h1>Botanic</h1>
        </div>
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
          <button className="nav-cart" onClick={() => setShowModal(true)}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="items-number">{item}</span>
          </button>
          <Cart showModal={showModal} onClose={() => setShowModal(false)} item={item} cart={cart} setCart={setCart}/>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
