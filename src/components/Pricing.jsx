import React from "react";
import "./Pricing.css";

const plans = [
  {
    name: "Advisory Essentials",
    price: "$1,500",
    period: "/ engagement",
    description: "For teams starting their AI and governance journey.",
    features: [
      "Initial AI readiness assessment",
      "1 strategy workshop session",
      "Governance risk overview",
      "Email support (2 weeks)",
    ],
    featured: false,
    cta: "Get Started",
  },
  {
    name: "Transformation Partner",
    price: "$4,800",
    period: "/ engagement",
    description: "For organizations driving full-scale AI transformation.",
    features: [
      "Full AI & digital transformation roadmap",
      "4 strategy workshop sessions",
      "Board-level governance framework",
      "Risk & compliance deep-dive",
      "Priority support (8 weeks)",
    ],
    featured: true,
    cta: "Book a Consultation",
  },
  {
    name: "Enterprise Retainer",
    price: "Custom",
    period: "/ month",
    description: "Ongoing advisory for large-scale, multi-market operations.",
    features: [
      "Dedicated advisory partnership",
      "Unlimited strategy sessions",
      "Custom AI governance systems",
      "Cross-market (MENA) support",
      "Direct line to leadership",
    ],
    featured: false,
    cta: "Contact Us",
  },
];

function Pricing() {
  return (
    <section id="pricing-plans" className="pr-root">
      <p className="pr-eyebrow">Engagement Options</p>
      <h2 className="pr-heading">Advisory Packages Built Around Your Goals</h2>
      <div className="pr-underline"></div>
      <p className="pr-subtitle">
        Flexible engagement models — from a single strategic workshop to full transformation partnerships.
      </p>

      <div className="pr-grid">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`pr-card ${plan.featured ? "pr-card-featured" : ""}`}
          >
        

            <h3 className="pr-plan-name">{plan.name}</h3>
            <p className="pr-plan-desc">{plan.description}</p>

            <div className="pr-price-row">
              <span className="pr-price">{plan.price}</span>
              <span className="pr-period">{plan.period}</span>
            </div>

            <ul className="pr-features">
              {plan.features.map((f, j) => (
                <li key={j}>
                  <span className="pr-feature-check">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <button className="pr-cta">
              {plan.cta}
              <span className="pr-cta-arrow">→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;