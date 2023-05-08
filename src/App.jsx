import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/nav/Navigation";
import Cart from "./components/cart/Cart";
import AnimatedRoutes from "./components/AnimatedRoutes";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

function App() {
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState(cartFromLocalStorage);

  const cartQuantity = cart.reduce((total, current) => total + current.qty, 0);

  const cartTotal = cart
    .map((item) => item.price * item.qty)
    .reduce((prevItem, currentItem) => prevItem + currentItem, 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <BrowserRouter>
        <Navigation cartQuantity={cartQuantity} setShowModal={setShowModal} />
        <AnimatedRoutes
          showModal={showModal}
          setShowModal={setShowModal}
          cart={cart}
          setCart={setCart}
        />
        <Cart
          showModal={showModal}
          onClose={() => setShowModal(false)}
          cart={cart}
          setCart={setCart}
          cartQuantity={cartQuantity}
          cartTotal={cartTotal}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
