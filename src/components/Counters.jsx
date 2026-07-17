import React, { useEffect, useRef, useState } from "react";
import { FaRegClock, FaBuilding, FaGlobeAmericas, FaRobot } from "react-icons/fa";
import "./Counters.css";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience", icon: <FaRegClock /> },
  { value: 50, suffix: "+", label: "Organizations Advised", icon: <FaBuilding /> },
  { value: 4, suffix: "", label: "Countries Reached", icon: <FaGlobeAmericas /> },
  { value: 3, suffix: "", label: "AI Products Built", icon: <FaRobot /> },
];

function useCountUp(target, shouldStart, duration = 1600) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime = null;
    let frameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Premium cubic ease-out curve for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [shouldStart, target, duration]);

  return count;
}

function StatItem({ value, suffix, label, icon }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const count = useCountUp(value, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Page scroll hote hi animation break free run karegi
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-top">
        <div className="stat-icon">{icon}</div>
        <div className="stat-number">
          {count}
          <span className="stat-suffix">{suffix}</span>
        </div>
      </div>
      <p className="stat-label">{label}</p>
    </div>
  );
}

export function Counters() {
  return (
    <section id="stats" className="stat-root">
      <div className="stat-box">
        {stats.map((s, i) => (
          <StatItem key={i} value={s.value} suffix={s.suffix} label={s.label} icon={s.icon} />
        ))}
      </div>
    </section>
  );
}

export default Counters;