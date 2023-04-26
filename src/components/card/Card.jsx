import { Link, useLocation } from "react-router-dom";
import "./card.css";

function Card({ image, name, price, id }) {

  const location = useLocation()
  console.log(location)

  return (
    <div className="card">
      <Link to={`/shopping-cart/products/${id}`}>
      <img src={image} alt="" />
      </Link>
      <div className="details">
        <h3 className="name">{name}</h3>
        <h4 className="price">{price}</h4>
      </div>
    </div>
  );
}

export default Card;
