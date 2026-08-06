import React from "react";
import "./style.css";
import { servicesRow1, servicesRow2 } from "../../data/data";
import { Button } from "../../components/button/button";

function Software() {
  const row1 = [...servicesRow1, ...servicesRow1];
  const row2 = [...servicesRow2, ...servicesRow2];

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

      <div className="marquee-row">
        <div className="marquee-track marquee-track-left">
          {row1.map((item, i) => (
            <span className="marquee-pill" key={`r1-${i}`}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="marquee-row">
        <div className="marquee-track marquee-track-right">
          {row2.map((item, i) => (
            <span className="marquee-pill marquee-pill-alt" key={`r2-${i}`}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="marquee-footer">
        <Button variant="marquee" icon={<span></span>} onClick={scrollToContact}>
          Let's Work Together
        </Button>
      </div>
    </div>
  );
}

export default Software;