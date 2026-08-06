import React from "react";
import "./style.css";
import { credentials } from "../../data/data";

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