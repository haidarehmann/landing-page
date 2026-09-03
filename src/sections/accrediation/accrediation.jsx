import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { credentials } from "../../data/data";

function Accreditation() {
  const wrapRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [stageWidth, setStageWidth] = useState(null);

  const STAGE_HEIGHT = 480; // fixed height, width auto-calculated from image ratio

  useEffect(() => {
    const handleScroll = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;

      const rect = wrap.getBoundingClientRect();
      const total = credentials.length;
      const scrollableHeight = wrap.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;

      let progress = scrolled / scrollableHeight;
      progress = Math.min(Math.max(progress, 0), 0.999);

      const index = Math.floor(progress * total);
      setActiveIndex(Math.min(index, total - 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // recompute stage width whenever the active card changes
  const updateStageWidth = (naturalWidth, naturalHeight) => {
    if (!naturalWidth || !naturalHeight) return;
    const imageAreaHeight = STAGE_HEIGHT * 0.65; // matches .acc-image-wrap height: 65%
    const ratio = naturalWidth / naturalHeight;
    const calculatedWidth = imageAreaHeight * ratio;
    const clamped = Math.min(
      Math.max(calculatedWidth, 280),
      window.innerWidth * 0.92
    );
    setStageWidth(clamped);
  };

  return (
    <section id="credentials" className="acc-root">
      <p className="acc-eyebrow">Executive Education</p>
      <h2 className="acc-heading">World-Class Executive Training</h2>
      <div className="acc-underline"></div>

      <div
        className="acc-scroll-wrap"
        ref={wrapRef}
        style={{ height: `${credentials.length * 100}vh` }}
      >
        <div className="acc-sticky">
          <div
            className="acc-card-stage"
            style={{
              height: `${STAGE_HEIGHT}px`,
              width: stageWidth ? `${stageWidth}px` : "min(900px, 92vw)",
            }}
          >
            {credentials.map((c, i) => {
              const diff = i - activeIndex;
              let stateClass = "";
              if (diff === 0) stateClass = "is-active";
              else if (diff === 1) stateClass = "is-next";
              else if (diff === 2) stateClass = "is-next2";
              else if (diff < 0) stateClass = "is-past";
              else stateClass = "is-hidden";

              return (
                <div className={`acc-card ${stateClass}`} key={i}>
                  <div className="acc-image-wrap">
                    <img
                      src={c.logo}
                      alt={c.name}
                      className="acc-image"
                      onLoad={(e) => {
                        if (i === activeIndex) {
                          updateStageWidth(
                            e.target.naturalWidth,
                            e.target.naturalHeight
                          );
                        }
                      }}
                      ref={(el) => {
                        if (el && el.complete && i === activeIndex) {
                          updateStageWidth(el.naturalWidth, el.naturalHeight);
                        }
                      }}
                    />
                  </div>
                  <div className="acc-card-body">
                    <h3 className="acc-name">{c.name}</h3>
                    <p className="acc-program">{c.program}</p>
                    <p className="acc-description">{c.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="acc-dots">
            {credentials.map((_, i) => (
              <span
                key={i}
                className={`acc-dot ${i === activeIndex ? "is-active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accreditation;