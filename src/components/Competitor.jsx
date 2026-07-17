import React from "react";
import "./Competitor.css";

const oldWay = [
  "Generic frameworks applied without context",
  "AI recommendations with no governance lens",
  "Limited regional (MENA) experience",
  "One-size-fits-all engagement models",
  "Reports handed over, then silence",
];

const newWay = [
  "Strategy built around your specific risk and structure",
  "Every AI decision filtered through governance and compliance",
  "A decade of hands-on experience across KSA, UAE, USA & Pakistan",
  "Engagements shaped around your actual goals",
  "Ongoing partnership through implementation, not just advice",
];

function Competitor() {
  return (
    <section id="comparison" className="cmp-root">
      <p className="cmp-eyebrow">Why Choose Us</p>
      <h2 className="cmp-heading">A Different Kind of Advisory</h2>
      <div className="cmp-underline"></div>
      <p className="cmp-subtitle">
        Most advisory engagements look the same. Here's what actually changes when you work with me.
      </p>

      <div className="cmp-panels">
        <div className="cmp-panel cmp-panel-old">
          <span className="cmp-panel-tag">The Common Approach</span>
          <ul className="cmp-panel-list">
            {oldWay.map((item, i) => (
              <li key={i}>
                <span className="cmp-icon cmp-icon-no">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="cmp-divider">
          <span>VS</span>
        </div>

        <div className="cmp-panel cmp-panel-new">
          <span className="cmp-panel-tag cmp-panel-tag-gold">Working With Me</span>
          <ul className="cmp-panel-list">
            {newWay.map((item, i) => (
              <li key={i}>
                <span className="cmp-icon cmp-icon-yes">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Competitor;