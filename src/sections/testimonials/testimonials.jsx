import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { FaStar, FaRegStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./style.css";
import { testimonials } from "../../data/data";


const cardVariants = {
  enter: (direction) => ({
    x: direction === "next" ? 80 : -80,
    opacity: 0,
    scale: 0.92,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction === "next" ? -80 : 80,
    opacity: 0,
    scale: 0.92,
  }),
};

// Sparkle dot positions scattered around the button (x, y, size, delay)
const sparklePositions = [
  { x: -22, y: -18, size: 4, delay: 0 },
  { x: 20, y: -22, size: 3, delay: 0.05 },
  { x: -26, y: 14, size: 3, delay: 0.1 },
  { x: 24, y: 18, size: 4, delay: 0.08 },
  { x: 0, y: -28, size: 3, delay: 0.15 },
  { x: -8, y: 26, size: 3, delay: 0.12 },
];

// Reusable arrow button with framer-motion sparkle hover + GSAP click ripple
function ArrowButton({ onClick, className, ariaLabel, children }) {
  const rippleRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleClick = (e) => {
    if (rippleRef.current) {
      gsap.fromTo(
        rippleRef.current,
        { scale: 0, opacity: 0.6 },
        {
          scale: 1.8,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    }
    onClick(e);
  };

  return (
    <div
      className="tc-arrow-wrap"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered &&
          sparklePositions.map((s, i) => (
            <motion.span
              key={i}
              className="tc-sparkle"
              style={{ width: s.size, height: s.size }}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], x: s.x, y: s.y, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.9, delay: s.delay, repeat: Infinity }}
            />
          ))}
      </AnimatePresence>

      <motion.button
        className={className}
        onClick={handleClick}
        aria-label={ariaLabel}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.88 }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
      >
        <span className="tc-ripple" ref={rippleRef} />
        {children}
      </motion.button>
    </div>
  );
}

function Testimonials() {
  const [[index, direction], setIndexState] = useState([0, "next"]);

  const paginate = (newIndex, dir) => setIndexState([newIndex, dir]);

  const prev = () => {
    const newIndex = index === 0 ? testimonials.length - 1 : index - 1;
    paginate(newIndex, "prev");
  };

  const next = () => {
    const newIndex = index === testimonials.length - 1 ? 0 : index + 1;
    paginate(newIndex, "next");
  };

  const current = testimonials[index];
  const nextItem = testimonials[(index + 1) % testimonials.length];
  const prevItem = testimonials[(index - 1 + testimonials.length) % testimonials.length];

  return (
    <div id="testimonials" className="tc-root">
      <p className="tc-eyebrow">Trusted By Leaders</p>
      <h2 className="tc-heading">What People Are Saying</h2>

      <div className="tc-stage">
        <ArrowButton className="tc-arrow tc-arrow-left" onClick={prev} ariaLabel="Previous">
          <FaChevronLeft />
        </ArrowButton>

        <div className="tc-deck">
          {/* Stacked peek cards behind */}
          <div className="tc-peek tc-peek-left" style={{ background: prevItem.color }} />
          <div className="tc-peek tc-peek-right" style={{ background: nextItem.color }} />

          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={index}
              className="tc-card"
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.32,
                ease: "easeOut",
              }}
              style={{ background: current.color }}
            >
              <div className="tc-header">
                <img src={current.image} alt={current.name} className="tc-avatar-img" />
                <div>
                  <h3 className="tc-name">{current.name}</h3>
                  <p className="tc-username">@{current.username}</p>
                </div>
              </div>

              <div className="tc-stars">
                {Array.from({ length: 5 }).map((_, i) =>
                  i < current.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                )}
              </div>

              <p className="tc-quote">{current.quote}</p>

              <motion.div
                className="tc-tag"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.2 }}
              >
                {current.tag}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <ArrowButton className="tc-arrow tc-arrow-right" onClick={next} ariaLabel="Next">
          <FaChevronRight />
        </ArrowButton>
      </div>
    </div>
  );
}

export default Testimonials;  