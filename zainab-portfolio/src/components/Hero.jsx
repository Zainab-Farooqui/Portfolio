import { useEffect, useState } from "react";
import profileImage from "../assets/profile.png";
import "../styles/hero.css";

const roles = [
  "Software Developer",
  "Student",
  "Problem Solver",
  "Learning Enthusiast",
];

function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!deleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (!deleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        {/* LEFT — IMAGE */}
        <div className="hero-left">
          <div className="hero-image-wrapper cinematic">
            <img
              src={profileImage}
              alt="Zainab Farooqui"
              className="hero-image"
            />
            <div className="hero-red-glow"></div>
          </div>
        </div>

        {/* RIGHT — CONTENT */}
        <div className="hero-right">
          <h1 className="hero-title reveal">
            Hi, it&apos;s <span>Zainab</span>
          </h1>

          <h2 className="hero-subtitle reveal delay-1">
            I&apos;m a <span className="typing-text">{text}</span>
          </h2>

          <p className="hero-description reveal delay-2">
            I build modern web and application experiences with clean,
            scalable technologies.
          </p>

          <div className="hero-buttons reveal delay-3">
            <button className="btn primary">View Projects</button>
            <button className="btn secondary">Contact Me</button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
