import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

// Reusable 3D tilt wrapper for each tag
const TiltTag = ({ className, children, baseRotate = 0 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), {
    stiffness: 200,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), {
    stiffness: 200,
    damping: 15,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        rotateZ: baseRotate,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.06 }}
    >
      {children}
    </motion.span>
  );
};

const ProfileHero = () => {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const tagsRef = useRef(null);
  const dotRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      tl.from(eyebrowRef.current, { y: 20, opacity: 0, duration: 0.6 })
        .from(
          titleRef.current,
          { y: 60, opacity: 0, duration: 0.9, rotateX: 25, transformOrigin: 'left bottom' },
          '-=0.3'
        )
        .from(
          tagsRef.current.children,
          {
            y: 40,
            opacity: 0,
            scale: 0.6,
            rotateZ: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'back.out(1.7)',
          },
          '-=0.4'
        );

      // subtle infinite pulse on the glow dot
      gsap.to(dotRef.current, {
        scale: 1.4,
        opacity: 0.6,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="profileHeroSection" ref={sectionRef} style={{ perspective: 1200 }}>
      <span className="profileHeroDot" ref={dotRef}></span>

      <p className="profileHeroEyebrow" ref={eyebrowRef}>
        Choose how AI helps your business?
      </p>
      <h1 className="profileHeroTitle" ref={titleRef}>
        Built For Every
        <br />
        Accounting Business
      </h1>

      <div className="profileHeroTags" ref={tagsRef}>
        <TiltTag className="profileHeroTag profileHeroTagPurple" baseRotate={-14}>
          Finance
        </TiltTag>
        <TiltTag className="profileHeroTag profileHeroTagCyan" baseRotate={0}>
          Automation
        </TiltTag>
      </div>
    </section>
  );
};

export default ProfileHero;