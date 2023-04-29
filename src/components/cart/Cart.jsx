import "./cart.css";

function Cart({ showModal, onClose }) {
  if (!showModal) {
    return null;
  }
  return (
    <div className="shopping-cart-modal">
      <div className="shopping-cart-modal-inner">
        <span className="btn-close" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <h1>Shopping cart</h1>
      </div>
    </div>
  );
}

export default Cart;
