import { useEffect, useState } from "react";
import { allProducts } from "../data/allProducts";
import { useParams } from "react-router-dom";
import "./plant.css";

function Plant() {
  const [plant, setPlant] = useState([]);
  const params = useParams();

  useEffect(() => {
    const currentPlant = allProducts.find((plant) => {
      if (plant.id === params.productId) {
        setPlant(plant);
      }
    });
    return currentPlant;
  }, [allProducts, params.productId]);
  console.log(params);
  return (
    <>
      {plant && (
        <main className="main-plant">
          <div className="main-left">
            <img src={plant.image} alt="" />
          </div>
          <div className="main-right">
            <div className="name_price">
              <h1>{plant.name}</h1>
              <h3>{plant.price}</h3>
            </div>
            <div>
              Size: <span>{plant.size}</span>
            </div>
            <button>Add to cart</button>
            <div className="desc">
              <h3>Description</h3>
              <p>{plant.description}</p>
            </div>
          </div>
          {/* <div>{plant.name}</div>
          <div>{plant.id}</div> */}
        </main>
      )}
    </>
  );
}

export default Plant;
