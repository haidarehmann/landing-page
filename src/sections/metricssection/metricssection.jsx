import React, { useEffect, useRef, useState } from "react";
import "./style.css";

function MetricsSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [activeTab, setActiveTab] = useState("branding");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Section visible = true
        // Section invisible = false
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`kh-strat-root ${inView ? "is-active" : ""}`}
    >

      {/* =========================
          HEADING
      ========================= */}

      <div className="kh-heading-block">

        <span className="kh-tag">
          // CORE POSITIONING STRATEGY
        </span>

        <h2 className="kh-main-heading">

          <span className="kh-type-line">
            PERSONAL BRAND STRATEGY
          </span>

          <br />

          <span className="kh-glow-purple">
            FOR KHADIJA MUBARIK
          </span>

        </h2>

        <p className="kh-sub-tag">
          AI in Accounting &amp; Automation
        </p>

      </div>


      {/* =========================
          FEATURE CARD
      ========================= */}

      <div className="kh-feature-container">

        <div className="kh-toggle-bar">

          <button
            className={`kh-tab-btn ${
              activeTab === "branding" ? "active" : ""
            }`}
            onClick={() => setActiveTab("branding")}
          >
            ✦ Personal Branding (The Slow Trust)
          </button>


          <button
            className={`kh-tab-btn ${
              activeTab === "sales" ? "active" : ""
            }`}
            onClick={() => setActiveTab("sales")}
          >
            ⚡ Sales Outreach (The Direct Ask)
          </button>

        </div>


        {/* =========================
            DISPLAY CARD
        ========================= */}

        <div className="kh-display-card">

          {activeTab === "branding" ? (

            <div className="kh-card-body kh-fade-in">

              <div className="kh-card-badge">
                Phase 1: First 3–6 Months
              </div>

              <h3>
                Becoming Known, Liked &amp; Trusted
              </h3>

              <p>
                Consistent posting on LinkedIn, Instagram, and Facebook
                showing up as the founder and expert. No direct selling or
                pitching—just pure authority building in AI Accounting.
              </p>

              <div className="kh-status-pill">

                <span className="kh-pulse-dot"></span>

                Focus: Organic Trust &amp; Inbound Authority

              </div>

            </div>

          ) : (

            <div className="kh-card-body kh-fade-in">

              <div className="kh-card-badge kh-badge-orange">
                Separate Channel
              </div>

              <h3>
                Direct Pitching &amp; Closing
              </h3>

              <p>
                Cold calls, pitches, and direct outreach run strictly through
                a separate sales channel. Never mixed into Khadija&apos;s
                personal brand profile to preserve authority and trust.
              </p>

              <div className="kh-status-pill kh-pill-orange">

                <span className="kh-pulse-dot orange"></span>

                Focus: Conversions &amp; Deal Closure

              </div>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default MetricsSection;