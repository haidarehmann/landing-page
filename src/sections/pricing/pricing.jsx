import React from "react";
import "./style.css";
import { plans } from "../../data/data";
import { Button } from "../../components/button/button";

function Pricing() {
  return (
    <section id="pricing-plans" className="pr-root">
      <p className="pr-eyebrow">Engagement Options</p>
      <h2 className="pr-heading">Advisory Packages Built Around Your Goals</h2>
      <div className="pr-underline"></div>
      <p className="pr-subtitle">
        Flexible engagement models  from a single strategic workshop to full transformation partnerships.
      </p>

      <div className="pr-grid">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`pr-card ${plan.featured ? "pr-card-featured" : ""}`}
          >
            {plan.badge && <span className="pr-badge">{plan.badge}</span>}

            <div className="pr-plan-icon">{plan.icon}</div>

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

            <Button
              variant="pricing"
              featured={plan.featured}
              icon={<span className="btn-cta-arrow">→</span>}
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;