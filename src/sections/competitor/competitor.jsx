import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./style.css";
import { oldWay, newWay } from "../../data/data";

function Competitor() {
  const reduceMotion = useReducedMotion();

  // Master container — controls the stagger for EVERYTHING in the section
  const sectionVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };

  // One shared "aram se" motion used by every piece — heading lines,
  // underline, subtitle, table header, and every row all move the same way
  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const underlineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Rows get their own tiny internal stagger (text -> arrow -> new text)
  const rowVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.08 },
    },
  };

  const cellVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const arrowVariants = {
    hidden: { opacity: 0, x: -6 },
    visible: {
      opacity: 1,
      x: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="comparison"
      className="shift-root"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="shift-header">
        <h2 className="shift-heading">
          <motion.span className="shift-line" variants={itemVariants}>
            Same problem.
          </motion.span>
          <motion.span
            className="shift-heading-line2"
            variants={itemVariants}
          >
            A different outcome.
          </motion.span>
        </h2>

        <motion.span
          className="shift-heading-underline"
          variants={underlineVariants}
        />

        <motion.p className="shift-subtitle" variants={itemVariants}>
          Here's exactly what shifts once the work moves from a generic
          advisor to me.
        </motion.p>
      </div>

      <div className="shift-table">
        <motion.div
          className="shift-row shift-row-labels"
          variants={itemVariants}
        >
          <span className="shift-label-old">Before</span>
          <span className="shift-label-spacer" aria-hidden="true"></span>
          <span className="shift-label-new">With Me</span>
        </motion.div>

        {oldWay.map((item, i) => (
          <motion.div className="shift-row" key={i} variants={rowVariants}>
            <motion.div
              className="shift-cell shift-cell-old"
              variants={cellVariants}
            >
              <span className="shift-dash" aria-hidden="true"></span>
              <span>{item}</span>
            </motion.div>

            <motion.div
              className="shift-arrow"
              aria-hidden="true"
              variants={arrowVariants}
            >
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <path d="M1 7H17M17 7L11 1M17 7L11 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>

            <motion.div
              className="shift-cell shift-cell-new"
              variants={cellVariants}
            >
              <span className="shift-check" aria-hidden="true">
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                  <path d="M1 4.5L4 7.5L10 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>{newWay[i]}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Competitor;