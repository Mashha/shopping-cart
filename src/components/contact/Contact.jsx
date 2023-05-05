import React from "react";
import "./contact.css";
import Footer from "../footer/Footer";

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-inner">
          <div className="contact-info">
            <h3>Get In Touch</h3>
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

            <h4>Order Status Update</h4>
            <p>
              Orders with standard shipping ship within 2-6 business days.
              Orders with express shipping ship within 1-2 business days.
              Tracking information is automatically sent to your email. More
              details about shipping can be found here.
            </p>

            <h4>30-Day Guarantee</h4>
            <p>
              We guarantee your plants will arrive in happy, healthy condition.
              If not, we replace them for free as part of our 30-Day Customer
              Happiness Guarantee.{" "}
            </p>
          </div>
          <div className="contact-form">
            <h3>Contact Us</h3>
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
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
