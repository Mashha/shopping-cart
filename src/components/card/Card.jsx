import { Link, useLocation } from "react-router-dom";
import formatCurrency from "../../utils/formatCurrency";
import "./card.css";

function Card({ image, name, price, id }) {


  return (
    <div className="card">
      <Link to={`/shopping-cart/products/${id}`}>
      <img src={image} alt="" />
      </Link>
      <div className="details">
        <h3 className="name">{name}</h3>
        <h4 className="price">{formatCurrency(price)}</h4>
      </div>
    </div>
  );
}

export default Card;
