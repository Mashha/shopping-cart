import "./hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-image"></div>
      <div className="inner-hero-section">
        <div className="left">
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            magnam.
          </p>
          <button>
            <Link to="/shopping-cart/products">Shop</Link>
          </button>
        </div>
        <div className="middle"></div>
        <div className="right">
          <div className="right-div">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, atque!
            </p>
          </div>
          <div className="right-div">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, atque!
            </p>
          </div>
          <div className="right-div">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, atque!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
