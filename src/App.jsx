import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Navigation from "./components/nav/Navigation";
import Plant from "./components/plant/Plant";

function App() {
  const [item, setItem] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navigation
          item={item}
          setItem={setItem}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <Routes>
          <Route path="/shopping-cart" element={<Home />} />
          <Route path="/shopping-cart/products" element={<Shop />} />
          <Route
            path="/shopping-cart/products/:productId"
            element={
              <Plant
                item={item}
                setItem={setItem}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
