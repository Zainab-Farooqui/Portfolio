import { motion } from "framer-motion";
import "../styles/hero.css";

function Home() {
  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="hero-text">
        <h1>Hi, I’m Zainab</h1>
        <h2>Full Stack Developer</h2>

        <p>
          I build modern web & app experiences using React,
          Node.js, MongoDB, and emerging technologies.
        </p>
      </div>
    </motion.section>
  );
}

export default Home;
