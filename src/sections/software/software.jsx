import React from "react";
import "./style.css";
import { servicesRow1, servicesRow2 } from "../../data/data";

function Software() {
  const allServices = [...servicesRow1, ...servicesRow2];
  const row = [...allServices, ...allServices];

  return (
    <div className="marquee-root">
      <div className="marquee-row">
        <div className="marquee-track marquee-track-left">
         {row.map((item, i) => (
  <React.Fragment key={`r-${i}`}>
    <span className="marquee-item">{item}</span>
    <span className="marquee-dot"></span>
  </React.Fragment>
))}
        </div>
      </div>
    </div>
  );
}

export default Software;