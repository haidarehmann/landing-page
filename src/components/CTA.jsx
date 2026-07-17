import React from "react";
import "./CTA.css";

function CTA() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToServices = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="cta-section">
      <div className="cta-box">

        <div className="cta-left">
          <span className="cta-tag">LET'S BUILD THE FUTURE</span>

          <h2>
            Ready to Transform Your Business with AI?
          </h2>

          <p>
            Build a governance-first AI strategy that improves decision-making,
            reduces risk, and creates measurable business impact.
          </p>
        </div>

        <div className="cta-right">
          <button
            className="cta-primary"
            onClick={scrollToContact}
          >
            Book Consultation →
          </button>

          <button
            className="cta-secondary"
            onClick={scrollToServices}
          >
            View Services
          </button>
        </div>

      </div>
    </section>
  );
}

export default CTA;