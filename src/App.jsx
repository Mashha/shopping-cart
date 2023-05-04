import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Navigation from "./components/nav/Navigation";
import Plant from "./components/plant/Plant";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";

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
        <Routes>
          <Route path="/shopping-cart" element={<Home />} />
          <Route path="/shopping-cart/products" element={<Shop />} />
          <Route
            path="/shopping-cart/products/:productId"
            element={
              <Plant
                showModal={showModal}
                setShowModal={setShowModal}
                cart={cart}
                setCart={setCart}
              />
            }
          />
        </Routes>
        <Cart
          showModal={showModal}
          onClose={() => setShowModal(false)}
          cart={cart}
          setCart={setCart}
          cartQuantity={cartQuantity}
          cartTotal={cartTotal}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
