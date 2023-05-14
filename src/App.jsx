import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/nav/Navigation";
import Cart from "./components/cart/Cart";
import AnimatedRoutes from "./components/AnimatedRoutes";
import LoginButton from "./components/login/LoginButton";
import LogoutButton from "./components/login/LogOutButton";
import Profile from "./components/profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";

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

  const { isLoading, error } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <BrowserRouter>
        <Navigation
          cartQuantity={cartQuantity}
          setShowModal={setShowModal}
          login={<LoginButton />}
          logout={<LogoutButton />}
          profile={<Profile user={user} isAuthenticated={isAuthenticated} />}
        />
        <AnimatedRoutes
          showModal={showModal}
          setShowModal={setShowModal}
          cart={cart}
          setCart={setCart}
          user={user}
          isAuthenticated={isAuthenticated}
        />
        {error && alert("Authentication error")}
        <Cart
          showModal={showModal}
          setShowModal={setShowModal}
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
