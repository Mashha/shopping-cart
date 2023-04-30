import "./cart.css";
import formatCurrency from "../../utils/formatCurrency";
import { useState } from "react";

function Cart({ showModal, onClose, item, cart, setCart, total }) {
  if (!showModal) {
    return null;
  }

  console.log(cart);
  return (
    <div className="shopping-cart-modal">
      <div className="shopping-cart-modal-inner">
        <span className="btn-close" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <div>
          Your cart <span>({item})</span>
        </div>
        <div className="shop-items">
          {cart ? (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="cart-data">
                  <h3>{item.name}</h3>
                  <p>{item.size}</p>
                  <h3>{formatCurrency(item.price)}</h3>
                  <div className="cart-data-bottom">
                    <div className="multiple-items">
                      <button>-</button>
                      <span>quantity</span>
                      <button>+</button>
                    </div>
                    <button className="remove-cart-item">Remove</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Empty cart</div>
          )}
        </div>
        <div className="shop-checkout">
          <div>
            <h3>Subtotal: {total}</h3>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
