import React from "react";
import "./Contact.css";

const Contact = ({ contactRef }) => {
  return (
    <section ref={contactRef} className="contact">

      <div className="contact-container">

        <p className="section-subtitle">
          GET IN TOUCH
        </p>

        <h2 className="section-title">
          Let's Work Together
        </h2>

        <p className="contact-desc">
          I'm actively looking for Full Stack Developer and Java Developer opportunities.
          If you have an opportunity or just want to connect, feel free to contact me.
        </p>

        <div className="contact-grid">

          <div className="contact-card">
            <span>📧</span>
            <h3>Email</h3>
            <p>katkadetejasvini@gmail.com</p>
          </div>

          <div className="contact-card">
            <span>📱</span>
            <h3>Phone</h3>
            <p>+91 9321863466</p>
          </div>

          <div className="contact-card">
            <span>📍</span>
            <h3>Location</h3>
            <p>Mumbai, Maharashtra</p>
          </div>

        </div>

        <div className="contact-buttons">

          <a
            href="https://github.com/Tejasvini1305"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/tejasvini-katkade-1aaa352a8/"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            LinkedIn
          </a>

         

        </div>

      </div>

    </section>
  );
};

export default Contact;
