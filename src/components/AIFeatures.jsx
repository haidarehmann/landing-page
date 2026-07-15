import React from "react";
import "./AIFeatures.css";
import km2 from "../assets/km2.jpeg";

function AIFeatures() {
  return (
    <div id="ai" className="khadija-hero-root">
      <section className="kh-hero">
        <div className="kh-main">
          <div className="kh-eyebrow">AI &amp; Digital Transformation Advisor</div>

          <h1>
            Guiding leaders through the <em>next era</em> of business transformation
          </h1>

          <p className="kh-lede">
            <strong>Khadija Mubarak</strong> helps CEOs and organizations turn AI
            ambition into responsible, high-impact strategy — combining deep
            expertise in finance, governance, and risk with a rigorous,
            board-level view of technology adoption.
          </p>

          <div className="kh-pillars">
            <span className="kh-pill">AI Strategy</span>
            <span className="kh-pill">Digital Transformation</span>
            <span className="kh-pill">Responsible Automation</span>
            <span className="kh-pill">Governance &amp; Risk</span>
          </div>
        </div>

        <div className="kh-image">
          <img src={km2} alt="Khadija Mubarak" />
        </div>
      </section>
    </div>
  );
}

export default AIFeatures;