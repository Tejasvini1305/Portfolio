import React from "react";
import "./Projects.css";
import quickaiImg from "../assets/quickai.png";
import realestateImg from "../assets/real estate.jpg";
import lectureschedulerImg from "../assets/online lecture.jpg";

const projectData = [
  {
    title: "QuickAI SaaS",
    image: quickaiImg,
    description:
      "AI powered SaaS platform with image generation, resume review, article generation and authentication.",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Clerk",
      "Gemini API"
    ],

    github: "https://github.com/Tejasvini1305/QuickAI-AI-Tool",
    live: "https://quick-ai-ai-tool.vercel.app/"
  },

  {
    title: "Real Estate Website",
    image: realestateImg,
    description:
      "Modern property listing website with search, authentication and responsive UI.",

    tech: [
      "React",
      "Node",
      "MongoDB",
      "Tailwind"
    ],

    github: "https://github.com/Tejasvini1305/Real-estate-project-",
    live: "https://ornate-youtiao-791111.netlify.app/"
  },

  {
    title: "Online Lecture Scheduler",
    image: lectureschedulerImg,
    description:
      "Application for scheduling and managing online lectures with real-time updates.",

    tech: [
      "React",
      "Node",
      "MongoDB"
    ],

    github: "https://github.com/Tejasvini1305/OnlineLectureSchedular",
    live: "https://69b2a17e9886c40394a03ce1--effervescent-douhua-3d9f99.netlify.app/"
  }
];

const Projects = ({ projectsRef }) => {

  return (

<section
ref={projectsRef}
className="projects">

<div className="projects-container">

<p className="section-subtitle">
MY WORK
</p>

<h2 className="section-title">
Featured Projects
</h2>

<div className="projects-grid">

{

projectData.map((project,index)=>(

<div
className="project-card"
key={index}>

<div className="project-image">

<img
src={project.image}
alt={project.title}
/>

</div>

<div className="project-content">

<h3>{project.title}</h3>

<p>

{project.description}

</p>

<div className="project-tags">

{

project.tech.map((item,i)=>(

<span key={i}>
{item}
</span>

))

}

</div>

<div className="project-buttons">

<a
href={project.github}
target="_blank"
rel="noreferrer">

GitHub

</a>

<a
href={project.live}
target="_blank"
rel="noreferrer">

Live Demo

</a>

</div>

</div>

</div>

))

}

</div>

</div>

</section>

);

};

export default Projects;
