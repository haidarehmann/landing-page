import React from "react";
import { FaRegCommentDots } from "react-icons/fa";
import "./CTA.css";

function CTA() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToProducts = () => {
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="cta-section">
      <div className="cta-box">

        <div className="cta-left">
          <span className="cta-tag">INNOVATE WITH AI</span>

          <h2>
            Ready to Transform Your Business with AI?
          </h2>

          <p>
            Build a governance-first AI strategy that improves decision-making,
            reduces risk, and creates measurable business impact.
          </p>
        </div>

        <div className="cta-right">
          <button className="cta-primary" onClick={scrollToContact}>
            Book Consultation 
          </button>

          <button className="cta-secondary" onClick={scrollToContact}>
            <FaRegCommentDots className="cta-secondary-icon" />
            Consult with an AI Governance Strategist
          </button>
        </div>

      </div>
    </section>
  );
}

export default CTA;