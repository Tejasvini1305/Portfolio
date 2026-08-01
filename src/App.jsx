import React, { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import { skillsData, projectsData, socialLinks } from './data';

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

  const sectionsRefs = { heroRef, aboutRef, skillsRef, projectsRef, contactRef };

  const scrollToSection = useCallback((sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  }, []);

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

const light=document.querySelector(".cursor-light");

const move=(e)=>{

light.style.left=e.clientX+"px";

light.style.top=e.clientY+"px";

};

window.addEventListener("mousemove",move);

return ()=>window.removeEventListener("mousemove",move);

},[]);

  // Scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bubbles move effect
  useEffect(() => {
    const bubbles = document.querySelector('.bubbles');
    if (!bubbles) return;

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
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrollToSection={scrollToSection} 
        isScrolled={isScrolled} 
        refs={sectionsRefs}
      />
      <Hero heroRef={heroRef} scrollToSection={scrollToSection} projectsRef={projectsRef} />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} skillsData={skillsData} />
      <Projects projectsRef={projectsRef} projectsData={projectsData} />
      <Contact contactRef={contactRef} socialLinks={socialLinks} />
    </div>
  );
};

export default App;
