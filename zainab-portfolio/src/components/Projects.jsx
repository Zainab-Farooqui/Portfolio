import "../styles/projects.css";

const projects = [
  {
    title: "PicTube",
    description:
      "An AI-powered application that searches YouTube videos using images instead of text.",
    tech: ["Flutter", "Firebase", "Google Vision API", "YouTube Data API"],
    live: "#",
    github: "https://github.com/Zainab-Farooqui/PicTube",
  },
  {
    title: "AI Interview System",
    description:
      "Automated interview platform that evaluates candidates using AI-based analysis.",
    tech: ["React", "Node.js", "MongoDB", "ML"],
    live: "#",
    github: "https://github.com/Zainab-Farooqui/AI-Interview-System",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive developer portfolio built with React and custom UI logic.",
    tech: ["React", "CSS", "Vite"],
    live: "#",
    github: "https://github.com/Zainab-Farooqui/zainab-portfolio",
  },
];

function Projects() {
  return (
    <section className="projects-section " id="projects">
      <div className="projects-container">
        {/* 🔴 HEADING ABOVE CARDS */}
        <h2 className="projects-heading">Projects</h2>

        {/* 🔲 GRID */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
                <a href={project.live} className="live-link">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
