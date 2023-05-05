import "./hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero-section">
      <div className="inner-hero-section">
        <div className="left" data-text="green">
          <h3>
            Create <span>Green</span> Indoors
          </h3>
          <p>
            We offer the best selection of indoor plants. From easy care to pet
            friendly options. Browse out online store or visit us in one of our
            shops.
          </p>
          <button>
            <Link to="/shopping-cart/products">Shop</Link>
          </button>
        </div>
        <div className="right">
          <div className="images">
            <img
              className="image-one"
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80"
              alt=""
            />
            <img
              className="image-two"
              src="https://images.unsplash.com/photo-1459156212016-c812468e2115?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDI2fHxwbGFudHN8ZW58MHx8fHwxNjgyMjY0NTY2&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
              alt=""
            />
            <img
              className="image-three"
              src="https://images.unsplash.com/photo-1680676208540-bd67f609a338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
            />
            <img
              className="image-five"
              src="https://images.unsplash.com/photo-1545165375-1b744b9ed444?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDEwN3x8cGxhbnRzfGVufDB8fHx8MTY4MjI4MDc2OQ&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
              alt=""
            />
            <img
              className="image-seven"
              src="https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGV0JTIwZnJpZW5kbHklMjBwbGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <img
              className="image-six"
              src="https://images.unsplash.com/photo-1612363228106-c94b0754e2c1?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDM1fHxpbmRvb3IlMjBwbGFudHN8ZW58MHx8fHwxNjgyNTkzNjU4&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
              alt=""
            />
            <img
              className="image-four"
              src="https://images.unsplash.com/photo-1526565782131-a13074f0dbbb?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDIzfHxwb3QlMjBwbGFudHN8ZW58MHx8fHwxNjgyNjEyNzgx&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
