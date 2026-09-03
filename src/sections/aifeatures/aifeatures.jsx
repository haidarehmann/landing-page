"use client";

import React, { useLayoutEffect, useRef } from "react";
import "./style.css";
import km2 from "../../assets/km2.jpeg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

function AIFeatures() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const blobRef = useRef(null);
  const sparksRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      /* =========================================
         MAIN TIMELINE
      ========================================= */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      /* Heading */
      tl.fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 70,
          rotateX: 18,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power4.out",
        }
      )

        /* Paragraph */
        .fromTo(
          textRef.current,
          {
            opacity: 0,
            y: 35,
            filter: "blur(6px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.5"
        )

        /* Button */
        .fromTo(
          buttonRef.current,
          {
            opacity: 0,
            y: 30,
            scale: 0.92,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        )

        /* Image */
        .fromTo(
          imageRef.current,
          {
            opacity: 0,
            scale: 0.72,
            y: 70,
            rotate: 8,
            filter: "blur(12px)",
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: 0,
            filter: "blur(0px)",
            duration: 1.15,
            ease: "expo.out",
          },
          "-=0.75"
        );

      /* =========================================
         IMAGE FLOAT
      ========================================= */

      gsap.to(imageRef.current, {
        y: -14,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================================
         PURPLE GLOW PULSE
      ========================================= */

      gsap.to(blobRef.current, {
        scale: 1.12,
        opacity: 0.72,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================================
         SPARKS FLOAT / ROTATE
      ========================================= */

      const sparks = sparksRef.current?.querySelectorAll(".kh-spark");

      if (sparks) {
        sparks.forEach((spark, index) => {
          gsap.to(spark, {
            y: index % 2 === 0 ? -10 : 10,
            x: index === 0 ? 5 : -4,
            rotation: index % 2 === 0 ? 12 : -12,
            duration: 2.2 + index * 0.45,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.2,
          });
        });
      }

      /* =========================================
         IMAGE PARALLAX
      ========================================= */

      gsap.to(imageRef.current, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      /* =========================================
         BACKGROUND GRID PARALLAX
      ========================================= */

      gsap.to(section, {
        "--grid-y": "42px",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div id="ai" className="khadija-hero-root" ref={sectionRef}>
      <section className="kh-hero">

        {/* Ambient glow */}
        <div className="kh-ambient-glow" />

        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div className="kh-main">

          <div className="kh-eyebrow">
            <span className="kh-eyebrow-dot" />
            AI & DIGITAL TRANSFORMATION
          </div>

          <h1 ref={headingRef} className="kh-heading">
            Guiding leaders through the{" "}
            <span className="kh-highlight">
              next era
            </span>{" "}
            of business transformation
          </h1>

          <p ref={textRef} className="kh-lede">
            Hello, I am Khadija Mubarak. AI &amp; Digital Transformation
            Advisor. I help CEOs and organizations turn AI ambition into
            responsible, high-impact strategy. Let's Explore.
          </p>

          <motion.button
            ref={buttonRef}
            className="kh-btn-primary"
            whileHover={{
              scale: 1.04,
              y: -4,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 18,
            }}
          >
            <span className="kh-btn-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v12" />
                <path d="M7 10l5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
            </span>

            Get your plans

            <span className="kh-btn-arrow">→</span>
          </motion.button>
        </div>

        {/* =========================================
            RIGHT IMAGE
        ========================================= */}

        <div
          ref={imageRef}
          className="kh-image"
        >
          <div className="kh-portrait-wrap">

            {/* Outer rings */}
            <div className="kh-ring kh-ring-one" />
            <div className="kh-ring kh-ring-two" />

            {/* Glow */}
            <div
              ref={blobRef}
              className="kh-blob"
            />

            {/* Image */}
            <motion.img
              src={km2}
              alt="Khadija Mubarak"
              className="kh-portrait"
              whileHover={{
                scale: 1.025,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            />

            {/* Sparks */}
            <div
              ref={sparksRef}
              className="kh-sparks"
            >
              <svg
                className="kh-spark kh-spark-big"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0 L14 9 L24 12 L14 15 L12 24 L10 15 L0 12 L10 9 Z" />
              </svg>

              <svg
                className="kh-spark kh-spark-mid"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0 L14 9 L24 12 L14 15 L12 24 L10 15 L0 12 L10 9 Z" />
              </svg>

              <svg
                className="kh-spark kh-spark-small"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0 L14 9 L24 12 L14 15 L12 24 L10 15 L0 12 L10 9 Z" />
              </svg>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}

export default AIFeatures;