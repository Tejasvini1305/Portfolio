import React from "react";
import "./hero.css";

import heroBg from "../assets/mountain2 image.jpg";

const Hero = ({ heroRef, scrollToSection, projectsRef }) => {
  return (
    <section
      ref={heroRef}
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(4,8,20,.55), rgba(4,8,20,.75)), url(${heroBg})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="stars">
  {[...Array(60)].map((_, i) => (
    <span
      key={i}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${2 + Math.random() * 4}s`,
      }}
    ></span>
  ))}
</div>

<div className="fog fog1"></div>
<div className="fog fog2"></div>

<div className="cursor-light"></div>

      <div className="hero-container">

        <div className="hero-left">

          <p className="hello">
             Hello, I'm
          </p>

          <h1 className="hero-title">
            Tejasvini
            <br />
            <span>Katkade</span>
          </h1>

          <h3 className="hero-role">
            Full Stack Developer | AI Enthusiast
          </h3>

          

          <p className="hero-description">
            Passionate Full Stack Developer focused on creating modern,
            scalable and responsive web applications using React,
            Node.js, Express, MongoDB and AI technologies.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => scrollToSection(projectsRef)}
            >
              🚀 View Projects
            </button>

            <a
              href="/Tejasvini-Katkade-9321863466.pdf"
              className="secondary-btn"
              target="_blank"
            >
              ⬇ Download Resume
            </a>

          </div>

        </div>

        <div className="hero-right">

          <div className="moon"></div>

        </div>

      </div>

      <div className="scroll-down">

        <div className="mouse"></div>

        <p>SCROLL DOWN</p>

      </div>

    </section>
  );
};

export default Hero;