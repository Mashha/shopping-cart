import "./card.css";

function Card({ image, name, price }) {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="details">
        <h3 className="name">{name}</h3>
        <h4 className="price">{price}</h4>
      </div>
    </div>
  );
}

export default Card;
