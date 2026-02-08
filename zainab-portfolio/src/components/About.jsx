import { motion } from "framer-motion";
import "../styles/cards.css";

function About() {
  return (
    <motion.section
      id="about"
      className="about-section "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="about-container">
        {/* LEFT CONTENT */}
        <div className="about-text">
          <h2 className="section-heading">About Me</h2>

          <p>
            I’m <span className="highlight">Zainab Farooqui</span>, a B.Sc. IT
            graduate with a strong interest in building scalable web
            applications, AI-powered systems, and clean user experiences.
          </p>

          <p>
            I enjoy working at the intersection of{" "}
            <span className="highlight">technology and problem-solving</span>,
            transforming ideas into impactful real-world applications.
          </p>
        </div>

        {/* RIGHT HIGHLIGHTS */}
        <div className="about-cards">
          <div className="about-card">
            <h4>🎓 Education</h4>
            <p>B.Sc. Information Technology</p>
          </div>

          <div className="about-card">
            <h4>🤖 Interests</h4>
            <p>Web Development, AI, ML, App Development</p>
          </div>

          <div className="about-card">
            <h4>🏆 Achievements</h4>
            <p>Research Papers, Coding Competitions</p>
          </div>

          <div className="about-card">
            <h4>🚀 Goal</h4>
            <p>To grow as an AI & Software Engineer</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
