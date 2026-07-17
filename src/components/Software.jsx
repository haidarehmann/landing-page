import React from "react";
import "./Software.css";

const servicesRow1 = [
  "Corporate Finance",
  "Tax Accounting",
  "Project Planning",
  "Auditing",
  "Corporate Law",
  "Corporate Tax",
  "AI Literacy",
  "Risk Management",
];

const servicesRow2 = [
  "Digital Transformation",
  "Tax Advisory",
  "Educational Technology",
  "EdTech",
  "Digital Literacy",
  "Curriculum Development",
  "Schools",
  "IFRS9",
  "Machine Learning",
];

function Software() {
  const row1 = [...servicesRow1, ...servicesRow1];
  const row2 = [...servicesRow2, ...servicesRow2];

  // CTA button jesa smooth scroll logic
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="marquee-root">
      <p className="marquee-eyebrow">Areas of Expertise</p>
      <h2 className="marquee-heading">A Wide Spectrum of Advisory Work</h2>
      <div className="underline3"></div>

      {/* First Scrolling Row */}
      <div className="marquee-row">
        <div className="marquee-track marquee-track-left">
          {row1.map((item, i) => (
            <span className="marquee-pill" key={`r1-${i}`}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Second Scrolling Row */}
      <div className="marquee-row">
        <div className="marquee-track marquee-track-right">
          {row2.map((item, i) => (
            <span className="marquee-pill marquee-pill-alt" key={`r2-${i}`}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Aesthetic Button with onClick Handler */}
      <div className="marquee-footer">
        <button className="marquee-btn" onClick={scrollToContact}>
          Let's Work Together <span></span>
        </button>
      </div>
    </div>
  );
}

export default Software;