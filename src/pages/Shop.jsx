import { allProducts } from "../components/data/allProducts";
import Card from "../components/card/Card";
import "./styles/shop.css";
import { useState } from "react";
import { categories } from "../components/data/categories";

function Shop() {
  const [categoryId, setCategoryId] = useState("");

  const sortByCategory = allProducts.filter((product) =>
    product.size.includes(categoryId.toLowerCase())
  );

  return (
    <>
      <h1>Indoor Plants</h1>
      <main>
        <div className="categories">
          <h3>Plant size</h3>
          {categories.map((category) => (
            <button
              onClick={(e) => setCategoryId(e.target.textContent)}
              className="category-btn"
            >
              {category.id}
            </button>
          ))}
        </div>
        <div className="container">
          {sortByCategory.map((plant, index) => (
            <Card
              name={plant.name}
              image={plant.image}
              price={plant.price}
              id={plant.id}
              key={index}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Shop;
