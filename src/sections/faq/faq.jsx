import React, { useState } from "react";
import "./style.css";
import { faqs } from "../../data/data";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section id="faq" className="faq-wrapper">
      <div className="faq-grid-container">
        
        <div className="faq-side-panel">
          <span className="faq-eyebrow-tag">Common Queries</span>
          <h2 className="faq-main-title">Before You <br />Reach Out.</h2>
          <p className="faq-desc-text">
            A few key details about my workflow, advisory structure, and what to expect when we partner.
          </p>
          <div className="faq-decor-element"></div>
        </div>

        <div className="faq-accordion-panel">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-bar-item ${openIndex === i ? "faq-bar-active" : ""}`}
            >
              <button
                className="faq-bar-trigger"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <div className="faq-question-content">
                  <span className="faq-number">0{i + 1}</span>
                  <span className="faq-question-text">{item.question}</span>
                </div>
                <span className="faq-toggle-arrow">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>

              <div className="faq-answer-container">
                <div className="faq-answer-inner">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;