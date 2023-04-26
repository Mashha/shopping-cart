import { allProducts } from "../components/data/allProducts";
import Card from "../components/card/Card";
import "./styles/shop.css";

function Shop() {
  return (
    <>
      <h1>Shop</h1>
      <div className="container">
        {allProducts.map((plant, index) => (
          <Card
            name={plant.name}
            image={plant.image}
            price={plant.price}
            id={plant.id}
            key={index}
          />
        ))}
      </div>
    </>
  );
}

export default Shop;
