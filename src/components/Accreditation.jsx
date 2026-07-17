import React from "react";
import "./Accreditation.css";

// Assets folder se logos import karein
import ox1 from "../assets/ox1.jfif";
import hb1 from "../assets/hb1.jfif";
import lb1 from "../assets/lb1.jfif";
import cu1 from "../assets/cu1.jfif";

const credentials = [
  {
    logo: ox1,
    name: "University of Oxford",
    program: "Executive Education  AI & Digital Strategy",
  },
  {
    logo: hb1,
    name: "Harvard Business School",
    program: "Executive Education  Digital Transformation",
  },
  {
    logo: lb1,
    name: "London Business School",
    program: "Executive Education  Responsible Automation",
  },
  {
    logo: cu1,
    name: "University of Cambridge",
    program: "Executive Education  AI & Governance",
  },
];

function Accreditation() {
  return (
    <section id="credentials" className="acc-root">
      <p className="acc-eyebrow">Executive Education</p>
      <h2 className="acc-heading">Trained at the World's Leading Institutions</h2>
      <div className="acc-underline"></div>
      <p className="acc-subtitle">
        A foundation built on rigorous, board-level executive education in AI, governance, and digital transformation.
      </p>

      <div className="acc-grid">
        {credentials.map((c, i) => (
          <div className="acc-card" key={i}>
            <div className="acc-logo-wrap">
              <img src={c.logo} alt={`${c.name} logo`} className="acc-logo" />
            </div>
            <h3 className="acc-name">{c.name}</h3>
            <p className="acc-program">{c.program}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Accreditation;