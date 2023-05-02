import "./cart.css";
import formatCurrency from "../../utils/formatCurrency";

function Cart({ showModal, onClose, cart, setCart, cartQuantity }) {
  if (!showModal) {
    return null;
  }

  // function increase(e) {
  //   console.log(e.target)

  //     cart.map((item) => {
  //       console.log(item.qyt);
  //       // if (item.id === e.target.parentElement.id) {
  //       //   return { ...item, qty: item.qty + 1 };
  //       // }
  //       // return item;
  //     }
  //   );
  // }
  // function decrease(e) {
  //   if (cart.length > 0) {
  //     setCart(
  //       cart.map((item) => {
  //         if (item.id === e.target.parentElement.id && item.qty > 1) {
  //           return { ...item, qty: item.qty - 1 };
  //         }
  //           return item;

  //       })
  //     );
  //   }
  //}

  return (
    <div className="shopping-cart-modal">
      <div className="shopping-cart-modal-inner">
        <span className="btn-close" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <div>
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
                    <div className="multiple-items">
                      <button>-</button>
                      <span>{item.qty}</span>
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
            <h3>Subtotal: total</h3>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
