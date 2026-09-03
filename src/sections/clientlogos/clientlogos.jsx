'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import './style.css';
import { programs } from '../../data/data';

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.94,
  },

  visible: (custom) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: custom.rotate,
    transition: {
      duration: 0.7,
      delay: custom.delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const ClientLogos = () => {
  const containerRef = useRef(null);

  /* ==============================
     SOFT MOUSE 3D MOVEMENT
  ============================== */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [4, -4]),
    {
      stiffness: 120,
      damping: 22,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-4, 4]),
    {
      stiffness: 120,
      damping: 22,
    }
  );

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    mouseX.set(
      (e.clientX - rect.left) / rect.width - 0.5
    );

    mouseY.set(
      (e.clientY - rect.top) / rect.height - 0.5
    );
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  /* ==============================
     COLLAGE ITEMS
  ============================== */

  const collageItems = [
    {
      key: 'collage1',
      item: programs[0],
      rotate: -2,
      delay: 0,
    },
    {
      key: 'collage2',
      item: programs[1],
      rotate: 1,
      delay: 0.12,
    },
    {
      key: 'collage5',
      item: programs[2],
      rotate: -1,
      delay: 0.48,
    },
    {
      key: 'collage4',
      item: programs[3],
      rotate: 2,
      delay: 0.36,
    },
     {
      key: 'collage3',
      item: programs[4],
      rotate: -1,
      delay: 0.24,
    },
  ];

  return (
    <section id="services" className="section">

      <div className="heroWrapper">

        {/* ================= LEFT ================= */}

        <div className="heroLeft">

          <div className="heroTag">
            WHAT I OFFER
          </div>

          <h2 className="heroTitle">
            Every tool your business needs to grow
          </h2>

          <p className="heroSubtitle">
            One partner for strategy, governance, tax, and
            AI-driven transformation across finance, risk,
            and leadership.
          </p>

          <div className="heroButtons">
            <button className="btnPrimary">
              View Pricing
            </button>
          </div>

        </div>

        {/* ================= RIGHT COLLAGE ================= */}

        <div
          className="heroRight"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >

          <motion.div
            className="collageStage"
            style={{
              rotateX,
              rotateY,
            }}
          >

            {collageItems.map(
              ({ key, item, rotate, delay }) => (
                <motion.div
                  key={key}
                  className={`collageImg ${key}`}
                  custom={{
                    rotate,
                    delay,
                  }}
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}

                  /* IMPORTANT:
                     hover sirf current card ko affect karega
                  */

                  whileHover={{
                    scale: 1.07,
                    y: -12,
                    rotate: 0,
                    zIndex: 100,
                    transition: {
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    draggable="false"
                  />
                </motion.div>
              )
            )}

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default ClientLogos;