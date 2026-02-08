function BottomNav({ current, setCurrent }) {
  return (
    <nav className="bottom-nav">
      <button
        className={current === "home" ? "active" : ""}
        onClick={() => setCurrent("home")}
      >
        Home
      </button>

      <button
        className={current === "about" ? "active" : ""}
        onClick={() => setCurrent("about")}
      >
        About
      </button>

      <button
        className={current === "skills" ? "active" : ""}
        onClick={() => setCurrent("skills")}
      >
        Skills
      </button>

      <button
        className={current === "projects" ? "active" : ""}
        onClick={() => setCurrent("projects")}
      >
        Projects
      </button>
      <button
        className={current === "achievements" ? "active" : ""}
        onClick={() => setCurrent("achievements")}
    >
    Achievements
    </button>


      <button
        className={current === "contact" ? "active" : ""}
        onClick={() => setCurrent("contact")}
      >
        Contact
      </button>
    </nav>
  );
}

export default BottomNav;
