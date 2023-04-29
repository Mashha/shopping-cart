import "./cart.css";

function Cart({ showModal, onClose, item }) {
  if (!showModal) {
    return null;
  }
  return (
    <div className="shopping-cart-modal">
      <div className="shopping-cart-modal-inner">
        <span className="btn-close" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <div>Your cart <span>({item})</span></div>
        <div className="shop-items"></div>
        <div className="shop-checkout">
          <div>
            <h3>Subtotal: </h3>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
