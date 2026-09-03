import React from "react";
import "./style.css";
import { images } from "../../assets/images"; // apne project ke hisaab se path adjust kar lein

function PPTFeatures() {
  return (
    <section id="features" className="about-root">
      <div className="about-inner">

        {/* Header */}
        <div className="about-header">
          <div className="about-header-title">
            <span className="about-eyebrow">AI Accounting &amp; Automation Expert</span>
            <h1>About Us</h1>
          </div>

          <div className="about-header-right">
            <p className="about-lead">
              A leadership practice built on governance, clarity, and
              responsible AI adoption.
            </p>
            <div className="about-header-copy">
              <p>
                With advanced executive education in AI, digital
                transformation, and responsible automation from Oxford,
                Harvard, London Business School, and Cambridge, I help
                leaders navigate the next era of business transformation. I
                combine this with deep expertise in finance, governance,
                and risk to guide CEOs and organizations on high-impact,
                strategic AI adoption.
              </p>
              <p>
                I am an AI Business Leader and Governance Specialist with a
                decade of experience advising organizations on financial
                management, compliance, and strategic transformation
                across KSA, UAE, USA, and Pakistan.
              </p>
            </div>
          </div>
        </div>

        {/* Banner — using your existing Hero/About image */}
        <div className="about-banner">
          <img src={images.bg} alt="Audit, Tax, Financial & AI Advisory" />
        </div>

        {/* Portrait + detailed bio */}
        <div className="about-bio">
          <div className="about-bio-photo">
            <img src={images.ab} alt="Khadija Mubarik" />
          </div>

          <div className="about-bio-copy">
            <p>
              After years leading audit, assurance, and corporate advisory
              engagements, I now help businesses transition confidently into
              the AI-driven economy — bridging financial governance with
              enterprise AI to strengthen compliance, boost efficiency, and
              unlock new value through intelligent automation.
            </p>

            <p><strong>My focus areas include:</strong></p>
            <ul className="about-focus-list">
              <li>AI-driven business transformation</li>
              <li>Governance, compliance &amp; risk in the age of AI</li>
              <li>Intelligent automation for finance &amp; operations</li>
              <li>Enterprise decision systems &amp; executive workflows</li>
              <li>Ethical AI and responsible automation frameworks</li>
            </ul>

            <p>
              I'm Co-Founder of <strong>YESAYA</strong>, building
              enterprise-grade AI solutions for CEOs, financial
              institutions, healthcare providers, and educational
              organizations across the MENA region.
            </p>

            <p>
              AI is not just a technological shift — it's a leadership
              shift. Let's connect if you're exploring AI adoption or
              preparing your organization for what's next.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default PPTFeatures;