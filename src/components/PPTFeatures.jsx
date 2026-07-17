import React from "react";
import { GiTargeting } from "react-icons/gi";
import "./PPTFeatures.css";
import kmg from "../assets/kmg.jpeg";

function PPTFeatures() {
  return (
    <section id="features" className="about-root">

      {/* Left Box */}
      <div className="about-box">
        <GiTargeting className="about-icon" />

        <div className="about-eyebrow">Who I Am</div>

        <h2>A Leadership Shift, Not Just a Tech Shift</h2>

        <p>
          Executive education in AI and digital transformation from Oxford,
          Harvard, London Business School, and Cambridge.
        </p>

        <p>
          Over 10 years of experience helping organizations across KSA, UAE,
          USA, and Pakistan drive AI, governance, and business transformation.
        </p>

        <p>
          Co-Founder of <strong>YESAYA</strong>, delivering enterprise AI
          solutions across the MENA region.
        </p>
      </div>

      {/* Right Image */}
      <div className="about-image">
        <img src={kmg} alt="Profile" />
      </div>

    </section>
  );
}

export default PPTFeatures;