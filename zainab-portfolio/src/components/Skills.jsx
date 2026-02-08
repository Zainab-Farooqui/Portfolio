import "../styles/skills.css";

const skills = [
  {
    title: "Frontend",
    description: "Building responsive and modern user interfaces.",
    tech: ["React", "HTML", "CSS", "JavaScript", "Vite"],
  },
  {
    title: "Backend",
    description: "Designing scalable APIs and server-side logic.",
    tech: ["Node.js", "Express", "MongoDB", "Firebase"],
  },
  {
    title: "AI / ML",
    description: "Working with data, models, and intelligent systems.",
    tech: ["Python", "Machine Learning", "AI Models"],
  },
];

function Skills() {
  return (
    <section className="skills-section " id="skills">
      <div className="skills-container">
        <h2 className="skills-heading">Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>

              <div className="tech-stack">
                {skill.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
