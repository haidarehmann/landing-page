import React from "react";
import "./style.css";
import { oldWay, newWay } from "../../data/data";

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