import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Plant from "../components/plant/Plant";
import Contact from "../components/contact/Contact";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes({showModal, setShowModal, cart, setCart}) {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
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
        <Route path="/shopping-cart/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
