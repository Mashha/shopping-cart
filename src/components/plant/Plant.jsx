import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allProducts } from "../data/allProducts";
import { useParams } from "react-router-dom";
import formatCurrency from "../../utils/formatCurrency";
import { motion } from "framer-motion";

import "./plant.css";

function Plant({ setShowModal, cart, setCart }) {
  const [plant, setPlant] = useState(null);
  const [showPlant, setShowPlant] = useState("");
  const params = useParams();

  useEffect(() => {
    const currentPlant = allProducts.find((plant) => {
      if (plant.id === params.productId) {
        setPlant(plant);
      }
    });
    return currentPlant;
  }, [allProducts, params.productId]);

  function changeImage(e) {
    setShowPlant(e.target);
  }

  function addItemToCart() {
    setShowModal(true);
    //if plant already exists add quantity, otherwise add plant with quantity one
    let isInCart = false;
    if (cart.length > 0) {
      setCart(
        cart.map((item) => {
          if (item.name === plant.name) {
            isInCart = true;
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        })
      );
    }
    if (!isInCart) {
      setCart([...cart, plant]);
    }
  }

  return (
    <>
      {plant && (
        <motion.main
          className="main-plant"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn" }}
        >
          <div className="main-left">
            <div className="small-images">
              {plant.gallery.map((plant) => (
                <div className="image">
                  <Link onClick={(e) => changeImage(e)}>
                    <img src={plant} alt="" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="main-image">
              <img
                src={showPlant === "" ? plant.image : showPlant.src}
                alt=""
              />
            </div>
          </div>
          <div className="main-right">
            <div className="name_price">
              <h1>{plant.name}</h1>
              <h3>{formatCurrency(plant.price)}</h3>
            </div>
            <div>
              Size: <span>{plant.size}</span>
            </div>
            <button onClick={addItemToCart}>Add to cart</button>
            <div className="desc">
              <h3>Description</h3>
              <p>{plant.description}</p>
            </div>
          </div>
        </motion.main>
      )}
    </>
  );
}

export default Plant;
