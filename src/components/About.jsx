import React from "react";
import "./About.css";
import profileImg from "../assets/profile.png";

const About = ({ aboutRef }) => {
  return (
    <section ref={aboutRef} className="about-section">

      <div className="about-container">

        <div className="about-image">

          <div className="about-card">
            

            <div className="experience-box">
              <h2>5+</h2>
              <p>Projects Completed</p>
            </div>

          </div>

        </div>

        <div className="about-content">

          <span className="section-tag">
            ABOUT ME
          </span>

          <h2>
            Building Modern Web Applications
            <br />
            with Clean Code & Creative Thinking.
          </h2>

          <p>
            I'm <strong>Tejasvini Katkade</strong>, a Full Stack Developer
            passionate about creating responsive, scalable and user-friendly
            web applications. I enjoy transforming ideas into real products
            using modern technologies and writing clean, maintainable code.
          </p>

          <p>
            My primary stack includes <strong>React.js, JavaScript,
            Node.js, Express.js, MongoDB and SQL.</strong> I also have
            experience working with REST APIs, authentication, cloud deployment
            and AI-powered applications.
          </p>

        

          <div className="about-stats">

            <div className="stat-box">
              <h3>5+</h3>
              <span>Projects</span>
            </div>

            <div className="stat-box">
              <h3>100+</h3>
              <span>DSA Problems</span>
            </div>

            <div className="stat-box">
              <h3>100%</h3>
              <span>Dedication</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;