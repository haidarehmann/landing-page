import React, { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Yesaya",
    role: "Co-Founding Partner",
    location: "MENA Region",
    quote:
      "Working together brought real clarity to how we approach AI adoption at the leadership level.",
  },
  {
    name: "M.A. Chaudhari",
    role: "Managing Partner",
    location: "Lahore, Pakistan",
    quote:
      "A rigorous, governance-first perspective that balanced ambition with practical execution.",
  },
  {
    name: "Wajda",
    role: "Strategy Lead",
    location: "KSA",
    quote:
      "Helped us think about transformation strategically, not just technically.",
  },
  {
    name: "Khaldun",
    role: "Operations Director",
    location: "UAE",
    quote:
      "Brought structure to a process that felt overwhelming, without slowing us down.",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [animating, setAnimating] = useState(false);

  const changeIndex = (getNextIndex, dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);

    setTimeout(() => {
      setIndex(getNextIndex);
      setAnimating(false);
    }, 350);
  };

  const prev = () => {
    changeIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1), "prev");
  };

  const next = () => {
    changeIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1), "next");
  };

  const goTo = (i) => {
    changeIndex(() => i, i > index ? "next" : "prev");
  };

  const current = testimonials[index];

  return (
    <div id="testimonials" className="tc-root">
      <p className="tc-eyebrow">Trusted By Leaders</p>
      <h2 className="tc-heading">
        What Partners Say About
      </h2>

      <div className="tc-wrapper">
        <button className="tc-arrow tc-arrow-left" onClick={prev} aria-label="Previous">
          &#8249;
        </button>

        <div className="tc-card-viewport">
          <div
            className={`tc-card ${
              animating
                ? direction === "next"
                  ? "tc-slide-out-left"
                  : "tc-slide-out-right"
                : direction === "next"
                ? "tc-slide-in-right"
                : "tc-slide-in-left"
            }`}
          >
            <span className="tc-quote-mark">&#8220;</span>

            <p className="tc-quote">{current.quote}</p>

            <div className="tc-divider"></div>

            <div className="tc-avatar">{current.name.charAt(0)}</div>
            <h3 className="tc-name">{current.name}</h3>
            <p className="tc-role">{current.role}</p>
            <p className="tc-location">{current.location}</p>
          </div>
        </div>

        <button className="tc-arrow tc-arrow-right" onClick={next} aria-label="Next">
          &#8250;
        </button>
      </div>

      <div className="tc-dots">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            className={`tc-dot ${i === index ? "tc-dot-active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;