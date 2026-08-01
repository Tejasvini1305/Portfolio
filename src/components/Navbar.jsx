import React from "react";
import "./Navbar.css";

const Navbar = ({ scrollToSection, refs }) => {
  return (
    <header className="navbar">
      <div className="nav-container">

        <div className="logo">
          TK
        </div>

        <nav className="nav-links">

          <button
            className="nav-link"
            onClick={() => scrollToSection(refs.heroRef)}
          >
            Home
          </button>

          <button
            className="nav-link"
            onClick={() => scrollToSection(refs.aboutRef)}
          >
            About
          </button>

          <button
            className="nav-link"
            onClick={() => scrollToSection(refs.skillsRef)}
          >
            Skills
          </button>

          <button
            className="nav-link"
            onClick={() => scrollToSection(refs.projectsRef)}
          >
            Projects
          </button>

          <button
            className="nav-link"
            onClick={() => scrollToSection(refs.contactRef)}
          >
            Contact
          </button>

        </nav>

        <a
          href="/Tejasvini-Katkade-9321863466.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          Resume
        </a>

      </div>
    </header>
  );
};

export default Navbar;