import React from "react";
import "./contact.css";
import Footer from "../footer/Footer";
import { motion } from "framer-motion";

function Contact() {
  function clickHandler(e) {
    e.preventDefault();
  }
  return (
    <>
      <motion.div
        className="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn" }}
      >
        <div className="contact-inner">
          <div className="contact-info">
            <h1>Get In Touch</h1>
            <p>
              {" "}
              Our team is full of passionate plant parents ready to help. For
              the fastest reply, live chat us Monday-Friday 9am-5pm EST or fill
              out this quick form anytime. We respond to each and every message
              as soon as possible; it may take 2-3 business days for us to get
              back to you via email. <br />
              PS. We recommend adding info@plant-lovers.com to your contacts to
              ensure our responses land in your inbox.
            </p>
            <p>
              In the meantime, here is some information that may answer your
              question:
            </p>

            <h3>Order Status Update</h3>
            <p>
              Orders with standard shipping ship within 2-6 business days.
              Orders with express shipping ship within 1-2 business days.
              Tracking information is automatically sent to your email. More
              details about shipping can be found here.
            </p>

            <h3>30-Day Guarantee</h3>
            <p>
              We guarantee your plants will arrive in happy, healthy condition.
              If not, we replace them for free as part of our 30-Day Customer
              Happiness Guarantee.{" "}
            </p>
          </div>
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form action="">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" required />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" required />
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" required />
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
              <button onClick={(e) => clickHandler(e)}>Send</button>
            </form>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default Contact;
