import "./homeSection.css";
import { allProducts } from "../data/allProducts";
import Card from "../card/Card";

function HomeSection() {
  const filteredPlants = allProducts.filter((plant) => plant.bestSeller);

  return (
    <div className="home-section">
      <h2>Best sellers</h2>
      <div className="home-section-inner">
        {filteredPlants.map((plant, index) => (
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
    </div>
  );
}

export default HomeSection;
