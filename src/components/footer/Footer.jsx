import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer data-text="Follow Us">
      <div className="footer-inner">
        <div className="social">
          <div className="social-media">
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-square-twitter"></i>
            <i className="fa-brands fa-square-pinterest"></i>
          </div>
        </div>
        <div className="services">
          <h3>Customer Service</h3>
          <ul>
            <li>FAQ</li>
            <li>Shipping & Handling</li>
            <li>30-day Guarantee</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="resources">
          <h3>Plant Questions?</h3>
          <ul>
            <li>Find Your Plant</li>
            <li>PlantCare Library</li>
            <li>Blog</li>
            <li>Free Online Courses</li>
          </ul>
        </div>
        <div className="company">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Refer a Friend</li>
            <li>Our Guarantee</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Build and designed with <i className="fa-solid fa-heart"></i> by{" "}
          <Link to="https://mashha.github.io/porfolio_MO/" target="_blank">
            Pimu
          </Link>{" "}
          ||{" "}
          <Link to="https://github.com/Mashha" target="_blank">
            <i className="fa-brands fa-github"></i>
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
