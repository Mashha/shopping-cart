import "./cart.css";
import formatCurrency from "../../utils/formatCurrency";

function Cart({
  showModal,
  setShowModal,
  onClose,
  cart,
  setCart,
  cartQuantity,
  cartTotal,
}) {
  if (!showModal) {
    return null;
  }

  function increase(e) {
    setCart(
      cart.map((item) => {
        if (item.id === e.target.parentElement.parentElement.id) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      })
    );
  }
  console.log(cart);

  function decrease(e) {
    if (cart.length > 0) {
      setCart(
        cart.map((item) => {
          if (
            item.id === e.target.parentElement.parentElement.id &&
            item.qty > 1
          ) {
            return { ...item, qty: item.qty - 1 };
          }
          return item;
        })
      );
    }
  }

  function removePlant(e) {
    setCart(cart.filter((plant) => plant.id !== e.target.id));
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className="shopping-cart-modal" onClick={closeModal}>
      <div
        className="shopping-cart-modal-inner"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="btn-close" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <div className="cart-quantity">
          Your cart <span>({cartQuantity})</span>
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
                    <div className="multiple-items" id={item.id}>
                      <button onClick={(e) => decrease(e)}>
                        <i class="fa-solid fa-minus"></i>
                      </button>
                      <span>{item.qty}</span>
                      <button onClick={(e) => increase(e)}>
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                    <button
                      className="remove-cart-item"
                      onClick={(e) => removePlant(e)}
                      id={item.id}
                    >
                      Remove
                    </button>
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
            <h3>Subtotal: {formatCurrency(cartTotal)}</h3>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
