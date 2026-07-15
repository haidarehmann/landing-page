import React from "react";
import { GiTargeting } from "react-icons/gi";
import "./PPTFeatures.css";

function PPTFeatures() {
  return (
    <div id="features" className="about-root">
      <div className="about-box">
        <GiTargeting className="about-icon" />

        <div className="about-eyebrow">Who I Am</div>

        <h2>A Leadership Shift, Not Just a Tech Shift</h2>

      
<p>
  With executive education in AI, digital transformation, and responsible
  automation from Oxford, Harvard, London Business School, and Cambridge,
  I help leaders drive business transformation through AI and governance.
</p>

<p>
  For over a decade, I've advised organizations across
  <strong> KSA, UAE, USA, and Pakistan</strong> on finance, compliance,
  and strategic transformation.
</p>

<p>
  As Co-Founder of <strong>YESAYA</strong>, I build enterprise AI solutions
  for CEOs, financial institutions, healthcare, and education across the
  MENA region.
</p>

<p>
  AI is not just a technological shift—it's a leadership shift. My mission
  is to help organizations build resilient, future-ready systems.
</p>

      </div>
    </div>
  );
}

export default PPTFeatures;