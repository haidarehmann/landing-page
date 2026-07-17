import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "Who do you typically work with?",
    answer:
      "I partner with CEOs, boards, and leadership teams across finance, healthcare, and education who are serious about adopting AI responsibly — not experimenting, but building it into how they actually operate and govern.",
  },
  {
    question: "What does a typical engagement look like?",
    answer:
      "It starts with understanding where you are today — your data, your risk appetite, your leadership readiness. From there, we build a roadmap that's specific to your organization, not a generic template. Engagements range from a focused strategy sprint to a multi-month transformation partnership.",
  },
  {
    question: "Do you only work with clients in Pakistan?",
    answer:
      "No. Over the past decade, I've advised organizations across KSA, UAE, USA, and Pakistan. Distance isn't a barrier — most of the work happens through structured workshops, calls, and documentation regardless of where you're based.",
  },
  {
    question: "How is this different from hiring a traditional consultant?",
    answer:
      "Most consultants bring frameworks. I bring executive-level AI and governance expertise combined with real board-level experience — so the strategy we build isn't just technically sound, it's something your leadership team can actually defend and act on.",
  },
  {
    question: "What happens after I reach out?",
    answer:
      "You'll hear back within one business day to schedule a short discovery call. No pitch, no pressure — just a conversation to understand your situation and see if there's a genuine fit before anything moves forward.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section id="faq" className="faq-wrapper">
      <div className="faq-grid-container">
        
        {/* Left Side Static Side Panel */}
        <div className="faq-side-panel">
          <span className="faq-eyebrow-tag">Common Queries</span>
          <h2 className="faq-main-title">Before You <br />Reach Out.</h2>
          <p className="faq-desc-text">
            A few key details about my workflow, advisory structure, and what to expect when we partner.
          </p>
          <div className="faq-decor-element"></div>
        </div>

        {/* Right Side Seamless Accordion */}
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