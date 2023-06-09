import { allProducts } from "../components/data/allProducts";
import Card from "../components/card/Card";
import "./styles/shop.css";
import { useState } from "react";
import { categories } from "../components/data/categories";
import Footer from "../components/footer/Footer";
import { motion } from "framer-motion";

function Shop() {
  const [categoryId, setCategoryId] = useState("");

  const sortByCategory = allProducts.filter((product) =>
    product.size.includes(categoryId.toLowerCase())
  );

  return (
    <>
      <motion.main
        className="main-shop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn" }}
      >
        <div className="main-top">
          <h1 className="shop-title">
            {categoryId ? categoryId + " " + "plants" : "Indoor plants"}
          </h1>
          <div className="categories">
            <h3>Plant size</h3>
            <div className="buttons">
              {categories.map((category) => (
                <button
                  onClick={(e) => setCategoryId(e.target.textContent)}
                  className="category-btn"
                >
                  {category.id}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          {sortByCategory.map((plant, index) => (
            <Card
              name={plant.name}
              image={plant.image}
              price={plant.price}
              id={plant.id}
              petFriendly={plant.petFriendly}
              key={index}
            />
          ))}
        </div>
      </motion.main>
      <Footer />
    </>
  );
}

export default Shop;
