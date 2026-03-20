import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import './index.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
  const bubbles = document.querySelector('.bubbles');

  const moveBubbles = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    bubbles.style.setProperty('--x', `${x}px`);
    bubbles.style.setProperty('--y', `${y}px`);
  };

  window.addEventListener('mousemove', moveBubbles);

  return () => window.removeEventListener('mousemove', moveBubbles);
}, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">Tejasvini Katkade</div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><button onClick={() => scrollToSection(heroRef)} className="nav-link">Home</button></li>
            <li><button onClick={() => scrollToSection(aboutRef)} className="nav-link">About</button></li>
            <li><button onClick={() => scrollToSection(skillsRef)} className="nav-link">Skills</button></li>
            <li><button onClick={() => scrollToSection(projectsRef)} className="nav-link">Projects</button></li>
            <li><button onClick={() => scrollToSection(contactRef)} className="nav-link">Contact</button></li>
          </ul>
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
     
      <section ref={heroRef} className="hero">
        <div className="mouse-light" id="mouseLight"></div>
       <div className="bubbles">
    {[...Array(20)].map((_, i) => (
      <span key={i} style={{ '--i': i }}></span>
    ))}
      </div>
        <div className="hero-content">
          <h1 className="hero-title animate-on-scroll">
            Hi, I'm <span className="highlight">Tejasvini Katkade</span>
          </h1>
          <p className="hero-subtitle animate-on-scroll" style={{ '--delay': '200ms' }}>
            Hello, my name is Tejasvini. I am a final-year student with a strong interest in Full Stack Development. I have experience working with technologies like HTML, CSS, JavaScript, React for frontend development and Node.js, Express, and MongoDB for backend development.
          </p>
          <button 
            onClick={() => scrollToSection(projectsRef)}
            className="cta-button animate-on-scroll"
            style={{ '--delay': '400ms' }}
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="about">
        <div className="container">
          <h2 className="section-title animate-on-scroll">About Me</h2>
          <div className="about-content">
            <div className="about-text animate-on-scroll">
              <h3>Passionate Developer</h3>
              <p>
                Hello, my name is Tejasvini. I am a final-year student and an aspiring Full Stack Developer. I have experience working as a Heuristics Trainee, where I gained practical exposure to analyzing web applications, understanding usability principles, and improving user experience through heuristic evaluation.
              </p>
              <p>
                Along with that, I have technical experience in HTML, CSS, JavaScript, and React for frontend development, and Node.js, Express, and MongoDB for backend development. I enjoy building responsive and user-friendly web applications and working on both the frontend and backend parts of a project.
              </p>
              <p>
                I am currently improving my development and problem-solving skills by working on projects and practicing coding regularly. I am eager to apply my knowledge in a professional environment where I can continue learning and contribute to building efficient and scalable web applications.
              </p>
            </div>
            <div className="profile-img animate-on-scroll">
              <i className="fas fa-user"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="skills-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Skills & Technologies</h2>
          <div className="skills-wrapper">
            <div className="skills-grid">
              {skillsData.map((category, index) => (
                <SkillCard 
                  key={`skill-${index}`}  // ✅ FIXED KEY
                  {...category}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION - FIXED ✅ */}
      <section ref={projectsRef} className="projects">
        <div className="container">
          <h2 className="section-title animate-on-scroll">My Projects</h2>
          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <ProjectCard 
                key={`project-${index}`}  // ✅ FIXED: This was the problem!
                {...project} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="contact">
        <div className="container">
          <h2 className="section-title">Let's Work Together</h2>
          <div className="contact-content animate-on-scroll">
            <h3>katkadeTejasvini@gmail.com</h3>
            <p>Ready to bring your ideas to life? Let's chat!</p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a key={`social-${index}`} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Components remain the same...
const SkillCard = ({ title, skills, icon, proficiency, index }) => {
  return (
    <div className="skill-card animate-on-scroll" style={{ '--index': index }}>
      <div className="skill-header">
        <div className="skill-icon">
          <i className={icon}></i>
        </div>
        <h3>{title}</h3>
      </div>
      <div className="skill-tags">
        {skills.map((skill, skillIndex) => (
          <span key={`${skill}-${skillIndex}`} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
      <div className="skill-proficiency">
        <div className="proficiency-bar">
          <div 
            className="proficiency-fill" 
            style={{ '--width': `${proficiency}%` }}
          />
        </div>
        <span className="proficiency-text">{proficiency}%</span>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, imageIcon, codeUrl, liveUrl, index }) => {
  return (
    <div className="project-card animate-on-scroll" style={{ '--index': index }}>
      <div className="project-image">
        <i className={imageIcon}></i>
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={codeUrl} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Code
          </a>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt"></i> Live
          </a>
        </div>
      </div>
    </div>
  );
};

// Your data (unchanged)
const skillsData = [
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    icon: "fab fa-react",
    proficiency: 95
  },
  {
    title: "Backend Development", 
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    icon: "fas fa-server",
    proficiency: 90
  },
  {
    title: "DevOps & Tools",
    skills: ["AWS", "Docker", "Git", "Vercel", "CI/CD"],
    icon: "fas fa-cogs",
    proficiency: 88
  }
];

const projectsData = [
  {
    title: "Real Estate Project",
    description: "Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
    imageIcon: "fas fa-shopping-cart",
    codeUrl: "https://github.com/Tejasvini1305/Real-estate-project-",
    liveUrl: "https://admirable-cuchufli-18a0d2.netlify.app/"
  },
  {
    title: "QuickAI - AI Tool Platform",
    description: "Interactive dashboard with real-time data visualization using D3.js and responsive design.",
    imageIcon: "fas fa-chart-line",
    codeUrl: "https://github.com/Tejasvini1305/QuickAI-Tool-Platform",
    liveUrl: "https://quick-ai-tool-platform-a2qo.vercel.app/"
  },
  {
    title: "Online lecture Schedular",
    description: "Modern task manager with drag & drop, real-time collaboration, and PWA support.",
    imageIcon: "fas fa-tasks",
    codeUrl: "https://github.com/Tejasvini1305/OnlineLectureSchedular",
    liveUrl: "https://69b2a17e9886c40394a03ce1--effervescent-douhua-3d9f99.netlify.app/"
  }
];

const socialLinks = [
  { url: "https://github.com/Tejasvini1305", icon: "fab fa-github", label: "GitHub" },
  { url: "https://www.linkedin.com/in/tejasvini-katkade-1aaa352a8/", icon: "fab fa-linkedin", label: "LinkedIn" },
  { url: "https://twitter.com/Tejasvini1305", icon: "fab fa-twitter", label: "Twitter" },
  { url: "mailto:katkadetejasvini@gmail.com", icon: "fas fa-envelope", label: "Email" }
];

export default App;