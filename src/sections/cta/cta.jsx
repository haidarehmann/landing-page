import React from "react";
import { FaRegCommentDots } from "react-icons/fa";
import "./style.css";
import { Button } from "../../components/button/button";

function CTA() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="cta-section">
      <div className="cta-box">

        <div className="cta-left">
          <span className="cta-tag">INNOVATE WITH AI</span>

          <h2>Ready to Transform Your Business with AI?</h2>

          <p>
            Build a governance-first AI strategy that improves decision-making,
            reduces risk, and creates measurable business impact.
          </p>
        </div>

        <div className="cta-right">
          <Button variant="cta-primary" onClick={scrollToContact}>
            Book Consultation
          </Button>

          <Button
            variant="cta-secondary"
            icon={<FaRegCommentDots className="cta-secondary-icon" />}
            iconPosition="left"
            onClick={scrollToContact}
          >
            Consult with an AI Governance Strategist
          </Button>
        </div>

      </div>
    </section>
  );
}

export default CTA;