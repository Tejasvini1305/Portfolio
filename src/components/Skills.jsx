import React from "react";
import "./Skills.css";

const skillData = [
  {
    title: "Frontend",
    icon: "💻",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "Java", "REST API"]
  },
  {
    title: "Database",
    icon: "🗄️",
    skills: ["MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    title: "Programming",
    icon: "👨‍💻",
    skills: ["Java", "Python", "C", "C++", "JavaScript"]
  },
  {
    title: "Tools",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Render"]
  },
  {
    title: "Core Subjects",
    icon: "📚",
    skills: ["DSA", "DBMS", "Operating System", "Computer Networks", "OOP"]
  }
];

const Skills = ({ skillsRef }) => {
  return (
    <section ref={skillsRef} className="skills">

      <div className="skills-container">

        <p className="section-subtitle">
          MY EXPERTISE
        </p>

        <h2 className="section-title">
          Skills & Technologies
        </h2>

        <div className="skills-grid">

          {skillData.map((item, index) => (

            <div className="skill-card" key={index}>

              <div className="skill-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <div className="skill-tags">

                {item.skills.map((skill, i) => (

                  <span key={i}>
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;