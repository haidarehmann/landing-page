import React, { useLayoutEffect, useRef } from "react";
import {
  FaRegClock,
  FaBuilding,
  FaGlobeAmericas,
  FaRobot,
} from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
    icon: <FaRegClock />,
  },
  {
    value: 50,
    suffix: "+",
    label: "Organizations Advised",
    icon: <FaBuilding />,
  },
  {
    value: 4,
    suffix: "",
    label: "Countries Reached",
    icon: <FaGlobeAmericas />,
  },
  {
    value: 3,
    suffix: "",
    label: "AI Products Built",
    icon: <FaRobot />,
  },
];

function StatItem({ value, suffix, label, icon, index }) {
  const cardRef = useRef(null);
  const numberRef = useRef(null);
  const iconRef = useRef(null);

  useLayoutEffect(() => {
    const card = cardRef.current;
    const number = numberRef.current;
    const iconElement = iconRef.current;

    if (!card || !number) return;

    const ctx = gsap.context(() => {
      gsap.set(card, {
        opacity: 0,
        y: 70,
        scale: 0.88,
        rotateX: 12,
      });

      gsap.set(iconElement, {
        opacity: 0,
        scale: 0.4,
        rotate: -30,
      });

      gsap.set(number, {
        opacity: 0,
        y: 25,
      });

      const counter = { value: 0 };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          toggleActions: "restart none none reset",
        }
      });

      tl.to(card, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 0.85,
        delay: index * 0.08,
        ease: "power3.out",
      })
        .to(
          iconElement,
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.55,
            ease: "back.out(2)",
          },
          "-=0.55"
        )
        .to(
          number,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .to(
          counter,
          {
            value,
            duration: 1.25,
            ease: "power2.out",
            onUpdate: () => {
              number.textContent = Math.floor(counter.value);
            },
          },
          "-=0.15"
        );
    }, cardRef);

    return () => ctx.revert();
  }, [value, index]);

  return (
    <motion.div
      ref={cardRef}
      className="stat-item"
      whileHover={{
        y: -10,
        scale: 1.025,
        transition: {
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      whileTap={{
        scale: 0.98,
      }}
    >
      {/* Ambient Glow */}
      <div className="stat-card-glow" />

      {/* Moving Top Line */}
      <div className="stat-top-line" />

      {/* Decorative corner */}
      <div className="stat-corner stat-corner-one" />
      <div className="stat-corner stat-corner-two" />

      <div className="stat-content">
        <motion.div
          ref={iconRef}
          className="stat-icon"
          whileHover={{
            rotate: 8,
            scale: 1.12,
            transition: {
              duration: 0.25,
            },
          }}
        >
          {icon}
        </motion.div>

        <div className="stat-number-wrap">
          <span
            ref={numberRef}
            className="stat-number"
          >
            0
          </span>

          <span className="stat-suffix">
            {suffix}
          </span>
        </div>

        <p className="stat-label">
          {label}
        </p>
      </div>

      {/* Bottom Accent */}
      <div className="stat-bottom-accent" />

      {/* Tiny Dot */}
      <div className="stat-live-dot" />
    </motion.div>
  );
}

export function Counters() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, {
        opacity: 0,
        y: 25,
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "center",
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      })
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
        })
        .to(
          lineRef.current,
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.35"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="stats"
      className="stat-root"
      ref={sectionRef}
    >
      {/* Background Ambient Effects */}
      <div className="stat-ambient stat-ambient-one" />
      <div className="stat-ambient stat-ambient-two" />

      <div className="stat-container">

        {/* Section Heading */}
        <div className="stat-heading" ref={titleRef}>
          <span className="stat-eyebrow">
            IMPACT & EXPERIENCE
          </span>

          <h2>
            Numbers that reflect
            <span> real impact.</span>
          </h2>

          <div
            className="stat-heading-line"
            ref={lineRef}
          />
        </div>

        {/* Cards */}
        <div className="stat-box">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Counters;