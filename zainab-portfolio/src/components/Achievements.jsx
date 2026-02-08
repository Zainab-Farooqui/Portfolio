import "../styles/achievements.css";

const achievements = [
  {
    title: "Research Publications",
    description:
      "Published research papers on AI-driven automation and cybersecurity.",
  },
  {
    title: "Blind Coding Winner",
    description:
      "Won 1st prize in a blind coding competition at college.",
  },
  {
    title: "Aavishkar Competition",
    description:
      "Participated in the Aavishkar innovation competition with a tech project.",
  },
];

function Achievements() {
  return (
    <section className="achievements-section " id="achievements">
      <div className="achievements-container">
        {/* LEFT HEADING */}
        <h2 className="achievements-heading">Achievements</h2>

        {/* CARDS GRID */}
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div className="achievement-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
