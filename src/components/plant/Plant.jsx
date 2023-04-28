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

  return (
    <>
      {plant && (
        <main className="main-plant">
          <div className="main-left">
            <div className="small-images">
              <div className="image one">
                <img src={plant.gallery[0]} alt="" />
              </div>
              <div className="image two">
                <img src={plant.gallery[1]} alt="" />
              </div>
            </div>
            <div className="main-image">
              <img src={plant.image} alt="" />
            </div>
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
