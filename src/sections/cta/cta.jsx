import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Landmark,
  Calculator,
  ClipboardList,
  FileSearch,
  Scale,
  Receipt,
  BrainCircuit,
  ShieldAlert,
  Zap,
  HandCoins,
  Laptop,
  GraduationCap,
  MonitorSmartphone,
  BookOpen,
  School,
  FileText,
  Cpu,
  Target,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import "./style.css";

import { Button } from "../../components/button/button";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   CTA TEXT
   Edit these to change the tag / heading / description.
========================================================= */

const CTA_TAG = "Innovate With AI";
const CTA_DESCRIPTION =
  "Build a governance-first AI strategy that improves decision-making, reduces risk, and creates measurable business impact.";

/* =========================================================
   ROTATING HEADLINES
   The heading types out, holds briefly, deletes, then moves
   on to the next line — add more strings here any time.
========================================================= */

const CTA_HEADLINES = [
  "Ready to Transform Your Business with AI?",
  "Scale AI Without Losing Control?",
];

const TYPING_SPEED_MS = 45; // per character while typing
const DELETING_SPEED_MS = 25; // per character while deleting
const HOLD_AFTER_TYPED_MS = 1400; // pause on a finished line before it erases
const HOLD_AFTER_DELETED_MS = 350; // pause on an empty line before the next one starts

/* =========================================================
   ADVISORY / SERVICE TAGS

   Each tag has a matching lucide-react icon instead of an
   image file — no logo assets needed. Swap the `icon`
   component for any other lucide icon if you'd like a
   different look: https://lucide.dev/icons
========================================================= */

const TAG_ITEMS = [
  { id: "corporateFinance", label: "Corporate Finance", icon: Landmark },
  { id: "taxAccounting", label: "Tax Accounting", icon: Calculator },
  { id: "projectPlanning", label: "Project Planning", icon: ClipboardList },
  { id: "auditing", label: "Auditing", icon: FileSearch },
  { id: "corporateLaw", label: "Corporate Law", icon: Scale },
  { id: "corporateTax", label: "Corporate Tax", icon: Receipt },
  { id: "aiLiteracy", label: "AI Literacy", icon: BrainCircuit },
  { id: "riskManagement", label: "Risk Management", icon: ShieldAlert },
  { id: "digitalTransformation", label: "Digital Transformation", icon: Zap },
  { id: "taxAdvisory", label: "Tax Advisory", icon: HandCoins },
  { id: "educationalTechnology", label: "Educational Technology", icon: Laptop },
  { id: "edtech", label: "EdTech", icon: GraduationCap },
  { id: "digitalLiteracy", label: "Digital Literacy", icon: MonitorSmartphone },
  { id: "curriculumDevelopment", label: "Curriculum Development", icon: BookOpen },
  { id: "schools", label: "Schools", icon: School },
  { id: "ifrs9", label: "IFRS9", icon: FileText },
  { id: "machineLearning", label: "Machine Learning", icon: Cpu },
  { id: "businessStrategy", label: "Business Strategy", icon: Target },
];

/* =========================================================
   CTA COMPONENT
========================================================= */

function CTA() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const glowRef = useRef(null);
  const btnWrapRef = useRef(null);

  // Stage 1
  const iconStageRef = useRef(null);
  const iconsWrapRef = useRef(null);
  const finalIconRef = useRef(null);

  // Stage 2
  const ctaStageRef = useRef(null);

  /* =========================================================
     TYPEWRITER HEADING LOOP
     Runs on its own timer, independent of scroll — types a
     headline, holds it briefly, deletes it, then types the
     next one, forever.
  ========================================================= */

  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFull = CTA_HEADLINES[headlineIndex % CTA_HEADLINES.length];
    let delay;

    if (!isDeleting && displayText === currentFull) {
      delay = HOLD_AFTER_TYPED_MS;
    } else if (isDeleting && displayText === "") {
      delay = HOLD_AFTER_DELETED_MS;
    } else {
      delay = isDeleting ? DELETING_SPEED_MS : TYPING_SPEED_MS;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentFull) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setHeadlineIndex((i) => (i + 1) % CTA_HEADLINES.length);
        return;
      }

      setDisplayText((prev) =>
        isDeleting
          ? currentFull.slice(0, prev.length - 1)
          : currentFull.slice(0, prev.length + 1)
      );
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, headlineIndex]);

  /* =========================================================
     SCROLL TO CONTACT
  ========================================================= */

  const scrollToContact = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* =========================================================
     MAGNETIC + 3D TILT — PRIMARY BUTTON ONLY
  ========================================================= */

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 150,
    damping: 14,
  });

  const springY = useSpring(y, {
    stiffness: 150,
    damping: 14,
  });

  const rotateX = useSpring(rawRotateX, {
    stiffness: 150,
    damping: 14,
  });

  const rotateY = useSpring(rawRotateY, {
    stiffness: 150,
    damping: 14,
  });

  /* =========================================================
     CURSOR GLOW
  ========================================================= */

  const cursorX = useMotionValue(80);
  const cursorY = useMotionValue(80);

  const [glowVisible, setGlowVisible] = useState(false);

  const handleMouseMove = (e) => {
    if (!btnWrapRef.current) return;

    const rect = btnWrapRef.current.getBoundingClientRect();

    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;

    x.set(relX * 0.2);
    y.set(relY * 0.3);

    cursorX.set(e.clientX - rect.left);
    cursorY.set(e.clientY - rect.top);

    // 3D tilt based on cursor position within the button
    rawRotateX.set((relY / rect.height) * -12);
    rawRotateY.set((relX / rect.width) * 12);
  };

  const handleMouseEnter = () => {
    setGlowVisible(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);

    rawRotateX.set(0);
    rawRotateY.set(0);

    setGlowVisible(false);
  };

  /* =========================================================
     GSAP ANIMATIONS
  ========================================================= */

  useEffect(() => {
    const ctx = gsap.context(() => {
      const iconEls = gsap.utils.toArray(".cta-integration-icon");

      const gridEl = iconsWrapRef.current;

      if (!gridEl || !iconEls.length) return;

      /* =====================================================
         FIND CENTER OF GRID
      ===================================================== */

      const gridRect = gridEl.getBoundingClientRect();

      const centerX = gridRect.left + gridRect.width / 2;
      const centerY = gridRect.top + gridRect.height / 2;

      /* =====================================================
         CALCULATE CONVERGENCE TARGETS
      ===================================================== */

      const convergeTargets = iconEls.map((el) => {
        const rect = el.getBoundingClientRect();

        const iconCenterX = rect.left + rect.width / 2;
        const iconCenterY = rect.top + rect.height / 2;

        return {
          x: centerX - iconCenterX,
          y: centerY - iconCenterY,
        };
      });

      /* =====================================================
         INITIAL CTA STATES
      ===================================================== */

      gsap.set(ctaStageRef.current, {
        autoAlpha: 0,
      });

      gsap.set(".cta-content-card", {
        scale: 0.25,
        opacity: 0,
      });

      gsap.set(finalIconRef.current, {
        opacity: 0,
        scale: 0.6,
        rotateY: -90,
      });

      gsap.set(".cta-tag", {
        opacity: 0,
        y: 20,
      });

      gsap.set(".cta-heading", {
        opacity: 0,
        y: 20,
      });

      gsap.set(".cta-description", {
        opacity: 0,
        y: 20,
      });

      gsap.set(".cta-buttons-col", {
        opacity: 0,
        y: 20,
      });

      /* =====================================================
         MASTER SCROLL TIMELINE
      ===================================================== */

      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=260%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /* =====================================================
         STAGE 1
         BOXES APPEAR
      ===================================================== */

      masterTl.from(iconEls, {
        opacity: 0,
        y: 40,
        scale: 0.8,

        stagger: {
          each: 0.03,
          from: "random",
        },

        duration: 0.5,

        ease: "power2.out",
      });

      /* =====================================================
         BOXES CONVERGE TO CENTER
      ===================================================== */

      masterTl.to(
        iconEls,
        {
          x: (i) => convergeTargets[i].x,
          y: (i) => convergeTargets[i].y,

          scale: 0.2,

          opacity: 0,

          stagger: {
            each: 0.008,
            from: "edges",
          },

          duration: 1,

          ease: "power3.in",
        },
        "+=0.2"
      );

      /* =====================================================
         FINAL PREVIEW CARD — 3D flip reveal
         All the small icon cards converge into this one card.
      ===================================================== */

      masterTl.fromTo(
        finalIconRef.current,
        {
          opacity: 0,
          scale: 0.6,
          rotateY: -90,
        },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,

          duration: 0.6,

          ease: "back.out(1.7)",
        },
        "-=0.2"
      );

      /* =====================================================
         FINAL CARD SMALL PULSE
      ===================================================== */

      masterTl.to(finalIconRef.current, {
        scale: 1.04,

        duration: 0.3,

        ease: "sine.inOut",
      });

      /* =====================================================
         FINAL CARD FADE OUT
      ===================================================== */

      masterTl.to(finalIconRef.current, {
        opacity: 0,
        scale: 0.7,
        rotateY: 90,

        duration: 0.4,

        ease: "power2.in",
      });

      /* =====================================================
         STAGE 1 FADE OUT
      ===================================================== */

      masterTl.to(
        iconStageRef.current,
        {
          autoAlpha: 0,

          duration: 0.5,

          ease: "power2.inOut",
        },
        "<"
      );

      /* =====================================================
         CTA CONTENT FADE IN
      ===================================================== */

      masterTl.to(
        ctaStageRef.current,
        {
          autoAlpha: 1,

          duration: 0.6,

          ease: "power2.out",
        },
        "<0.15"
      );

      /* =====================================================
         CTA CARD "OPENS" FROM THE CONVERGED ICON POINT
      ===================================================== */

      masterTl.to(
        ".cta-content-card",
        {
          scale: 1,
          opacity: 1,

          duration: 0.7,

          ease: "back.out(1.6)",
        },
        "<"
      );

      /* =====================================================
         CTA TAG
      ===================================================== */

      masterTl.to(
        ".cta-tag",
        {
          opacity: 1,
          y: 0,

          duration: 0.5,

          ease: "power3.out",
        },
        "<0.1"
      );

      /* =====================================================
         HEADING
         Simple fade + rise, same as the tag/description, so
         it always ends up fully visible instead of relying on
         a per-character scroll-scrubbed reveal.
      ===================================================== */

      masterTl.to(
        ".cta-heading",
        {
          opacity: 1,
          y: 0,

          duration: 0.5,

          ease: "power3.out",
        },
        "<0.1"
      );

      /* =====================================================
         DESCRIPTION
      ===================================================== */

      masterTl.to(
        ".cta-description",
        {
          opacity: 1,
          y: 0,

          duration: 0.5,

          ease: "power3.out",
        },
        "-=0.2"
      );

      /* =====================================================
         BUTTONS COLUMN (both primary + secondary)
      ===================================================== */

      masterTl.to(
        ".cta-buttons-col",
        {
          opacity: 1,
          y: 0,

          duration: 0.6,

          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

      /* =====================================================
         AMBIENT GLOW
      ===================================================== */

      if (glowRef.current) {
        gsap.to(glowRef.current, {
          scale: 1.25,

          opacity: 0.5,

          duration: 2,

          ease: "sine.inOut",

          repeat: -1,

          yoyo: true,
        });
      }

      /* =====================================================
         ORB ONE
      ===================================================== */

      gsap.to(".cta-orb-one", {
        x: 30,

        y: 20,

        duration: 8,

        ease: "sine.inOut",

        repeat: -1,

        yoyo: true,
      });

      /* =====================================================
         ORB TWO
      ===================================================== */

      gsap.to(".cta-orb-two", {
        x: -25,

        y: -15,

        duration: 9,

        ease: "sine.inOut",

        repeat: -1,

        yoyo: true,
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  /* =========================================================
     JSX
  ========================================================= */

  return (
    <section className="cta-section" ref={sectionRef}>

      {/* =====================================================
          STAGE 1 — ADVISORY ICON GRID
      ===================================================== */}

      <div className="cta-stage cta-stage-icons" ref={iconStageRef}>

        <div className="cta-intro-overlay" />

        <div className="cta-integration-grid" ref={iconsWrapRef}>

          {TAG_ITEMS.map((tag) => {
            const IconComponent = tag.icon;

            return (
              <div className="cta-integration-icon" key={tag.id}>
                <IconComponent
                  className="cta-integration-icon-svg"
                  aria-label={tag.label}
                />
                <span className="cta-integration-icon-label">
                  {tag.label}
                </span>
              </div>
            );
          })}

        </div>

        {/* =================================================
            FINAL PREVIEW CARD
            All the small cards converge into this single card
            right before it opens into the real CTA.
        ================================================= */}

        <div className="cta-final-icon" ref={finalIconRef}>
          <Sparkles className="cta-final-icon-svg" />
        </div>

      </div>

      {/* =====================================================
          STAGE 2 — REAL CTA CONTENT
          White card: text on the left, stacked buttons on
          the right (no bg photo, orbs only).
      ===================================================== */}

      <div className="cta-stage cta-stage-content" ref={ctaStageRef}>

        {/* Ambient Orbs */}

        <div className="cta-orb cta-orb-one" />
        <div className="cta-orb cta-orb-two" />

        {/* =================================================
            CTA CARD
        ================================================= */}

        <div className="cta-content-card">

          <div className="cta-content-text">

            <span className="cta-tag">{CTA_TAG}</span>

            <h2 className="cta-heading" ref={headingRef}>
              {displayText}
              <span className="cta-heading-cursor" />
            </h2>

            <p className="cta-description">{CTA_DESCRIPTION}</p>

          </div>

          <div className="cta-buttons-col">

            {/* =============================================
                PRIMARY BUTTON — indigo gradient,
                magnetic + 3D tilt
            ============================================= */}

            <motion.div
              ref={btnWrapRef}
              className="cta-button-wrap"
              style={{
                x: springX,
                y: springY,
                rotateX,
                rotateY,
              }}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >

              {/* Button Glow */}
              <div className="cta-button-glow" ref={glowRef} />

              {/* Cursor Glow */}
              <motion.div
                className="cta-cursor-glow"
                style={{
                  x: cursorX,
                  y: cursorY,
                  opacity: glowVisible ? 1 : 0,
                }}
                transition={{
                  opacity: { duration: 0.25 },
                }}
              />

              {/* Actual Button */}
              <Button variant="cta-primary" onClick={scrollToContact}>
                Book Consultation
              </Button>

            </motion.div>

            {/* =============================================
                SECONDARY BUTTON — white pill with icon
            ============================================= */}

            <motion.button
              type="button"
              className="cta-button-secondary"
              onClick={scrollToContact}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <MessageCircle className="cta-button-secondary-icon" />
              Consult with an AI Governance Strategist
            </motion.button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;