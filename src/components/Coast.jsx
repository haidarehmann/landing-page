import React from "react";
import "./Coast.css";

const products = [
  {
    title: "ORBITAL",
    subtitle: "Diagnostics Intelligence",
    description: "Discover hidden operational insights and identify risks before they impact your business.",
    initials: "OR"
  },
  {
    title: "MAGNUS",
    subtitle: "Forensic Intelligence",
    description: "Analyze business performance with precision and detect hidden operational inefficiencies.",
    initials: "MA"
  },
  {
    title: "SIMFORE",
    subtitle: "Simulation Intelligence",
    description: "Model complex business scenarios and evaluate strategies before taking critical decisions.",
    initials: "SI"
  },
];

function Coast() {
  return (
    <section className="coasts-root">
      {/* Header Area */}
      <div className="coasts-title-area">
        <span className="coasts-tag">Our Solutions</span>
        <h2 className="coasts-heading">Intelligent Solutions</h2>
        <div className="underline4"></div>
        <p className="coasts-text">
          Empowering businesses with innovative products that simplify complex decisions.
        </p>
      </div>

      <div className="coasts-grid">
        {products.map((item, index) => (
          <div className="coasts-box" key={index}>
            <p className="card-desc">"{item.description}"</p>

            <div className="card-footer">
              <div className="user-badge">{item.initials}</div>
              <div className="user-info">
                <h3>{item.title}</h3>
                <h5>{item.subtitle}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Coast;