"use client";

import React, {
  useState,
  useLayoutEffect,
  useEffect,
  useRef,
} from "react";

import { createPortal } from "react-dom";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./style.css";
import { products } from "../../data/data";

// Background video for the Products section (from the central
// assets file, same pattern as images.js)
import { sectionVideos } from "../../assets/images";
const bgVideo = sectionVideos.p7;

gsap.registerPlugin(ScrollTrigger);

function Coast() {
  const [activeProduct, setActiveProduct] = useState(null);
  const [mounted, setMounted] = useState(false);

  const sectionRef = useRef(null);

  const openProduct = (product) => {
    setActiveProduct(product);
  };

  const closeProduct = () => {
    setActiveProduct(null);
  };

  /* =========================================================
   MOUNT CHECK (for safe createPortal usage — document.body
   is not available during SSR, so we only portal after the
   component has mounted on the client)
========================================================= */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* =========================================================
   LOCK BODY SCROLL WHEN THE PRODUCT MODAL IS OPEN
   Uses the "position: fixed" technique — more reliable than
   overflow:hidden because it never interferes with other
   elements' own internal scrolling (like .product-detail-panel).
   Only the background page's scroll is frozen; the modal
   panel keeps scrolling normally.
========================================================= */
  useLayoutEffect(() => {
    if (activeProduct) {
      const scrollY = window.scrollY;
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      document.body.style.paddingRight = `${scrollBarWidth}px`;

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";
        document.body.style.paddingRight = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [activeProduct]);
  /* =========================================================
     MAIN GSAP ENGINE
  ========================================================= */

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      /* =====================================================
         ELEMENTS
      ===================================================== */

      const heading =
        section.querySelector(".products-heading");

      const headingLabel =
        section.querySelector(".products-heading span");

      const headingTitle =
        section.querySelector(".products-heading h2");

      const selectors =
        section.querySelectorAll(".product-selector");

      const sidebarLine =
        section.querySelector(".products-sidebar-line");

      const sidebarNote =
        section.querySelector(".products-sidebar-note");

      const intro =
        section.querySelector(".products-intro");

      const introCard =
        section.querySelector(".intro-glass-card");

      const introEyebrow =
        section.querySelector(".intro-eyebrow");

      const introHeading =
        section.querySelector(".intro-heading");

      const introDescription =
        section.querySelector(".intro-description");

      const dots =
        section.querySelectorAll(
          ".background-particles span"
        );

      const glows =
        section.querySelectorAll(
          ".background-glow"
        );

      const orbs =
        section.querySelectorAll(
          ".products-bg-orb"
        );

      const lightLines =
        section.querySelectorAll(
          ".background-light-line"
        );

      /* =====================================================
         INITIAL STATES
      ===================================================== */

      gsap.set(heading, {
        opacity: 0,
        y: 22,
      });

      gsap.set(headingLabel, {
        opacity: 0,
        y: 12,
        letterSpacing: "0.18em",
      });

      gsap.set(headingTitle, {
        opacity: 0,
        y: 18,
        scale: 0.96,
      });

      gsap.set(selectors, {
        opacity: 0,
        x: -28,
        rotateX: 8,
      });

      gsap.set(sidebarLine, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(sidebarNote, {
        opacity: 0,
        y: 12,
      });

      gsap.set(intro, {
        opacity: 0,
        y: 18,
      });

      gsap.set(introCard, {
        opacity: 0,
        y: 24,
        scale: 0.97,
      });

      gsap.set(
        [
          introEyebrow,
          introHeading,
          introDescription,
        ],
        {
          opacity: 0,
          y: 14,
        }
      );

      /* =====================================================
         MAIN REVEAL
      ===================================================== */

      const revealTimeline =
        gsap.timeline({
          paused: true,
          defaults: {
            ease: "power3.out",
          },
        });

      revealTimeline
        .to(heading, {
          opacity: 1,
          y: 0,
          duration: 0.32,
        })

        .to(
          headingLabel,
          {
            opacity: 1,
            y: 0,
            letterSpacing: "0.26em",
            duration: 0.28,
            ease: "power2.out",
          },
          "-=0.22"
        )

        .to(
          headingTitle,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.38,
            ease: "power3.out",
          },
          "-=0.18"
        )

        .to(
          selectors,
          {
            opacity: 1,
            x: 0,
            rotateX: 0,
            duration: 0.30,
            stagger: 0.045,
            ease: "power3.out",
          },
          "-=0.14"
        )

        .to(
          sidebarLine,
          {
            scaleX: 1,
            duration: 0.35,
            ease: "power2.out",
          },
          "-=0.10"
        )

        .to(
          sidebarNote,
          {
            opacity: 1,
            y: 0,
            duration: 0.28,
          },
          "-=0.20"
        )

        .to(
          intro,
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
          },
          "-=0.22"
        )

        .to(
          introCard,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.5)",
          },
          "-=0.25"
        )

        .to(
          introEyebrow,
          {
            opacity: 1,
            y: 0,
            duration: 0.22,
          },
          "-=0.28"
        )

        .to(
          introHeading,
          {
            opacity: 1,
            y: 0,
            duration: 0.30,
          },
          "-=0.16"
        )

        .to(
          introDescription,
          {
            opacity: 1,
            y: 0,
            duration: 0.24,
          },
          "-=0.16"
        );

      /* =====================================================
         SCROLL TRIGGER
      ===================================================== */

      ScrollTrigger.create({
        trigger: section,
        start: "top 78%",
        end: "bottom 15%",

        onEnter: () => {
          revealTimeline.restart();
        },

        onEnterBack: () => {
          revealTimeline.restart();
        },

        onLeaveBack: () => {
          revealTimeline.pause(0);
        },
      });

      /* =====================================================
         PARTICLES
      ===================================================== */

      dots.forEach((dot, index) => {
        const randomX =
          gsap.utils.random(-70, 70);

        const randomY =
          gsap.utils.random(-65, 65);

        const randomScale =
          gsap.utils.random(0.65, 1.5);

        const randomDuration =
          gsap.utils.random(2.8, 5.5);

        gsap.set(dot, {
          opacity: gsap.utils.random(
            0.15,
            0.65
          ),
          scale: gsap.utils.random(
            0.6,
            1.2
          ),
        });

        gsap.to(dot, {
          x: randomX,
          y: randomY,
          scale: randomScale,
          opacity: gsap.utils.random(
            0.18,
            0.8
          ),
          duration: randomDuration,
          repeat: -1,
          yoyo: true,
          delay: index * 0.055,
          ease: "sine.inOut",
        });

        gsap.to(dot, {
          rotation: gsap.utils.random(
            -180,
            180
          ),
          duration:
            randomDuration * 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      /* =====================================================
         AMBIENT GLOWS
      ===================================================== */

      if (glows[0]) {
        gsap.to(glows[0], {
          x: -35,
          y: 25,
          scale: 1.08,
          opacity: 0.62,
          duration: 4.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (glows[1]) {
        gsap.to(glows[1], {
          x: 42,
          y: -30,
          scale: 1.10,
          opacity: 0.58,
          duration: 5.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (glows[2]) {
        gsap.to(glows[2], {
          scale: 1.2,
          opacity: 0.65,
          duration: 3.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      /* =====================================================
         LARGE BACKGROUND ORBS
      ===================================================== */

      if (orbs[0]) {
        gsap.to(orbs[0], {
          x: -38,
          y: 28,
          scale: 1.08,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (orbs[1]) {
        gsap.to(orbs[1], {
          x: 38,
          y: -32,
          scale: 1.08,
          duration: 7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      /* =====================================================
         LIGHT LINES
      ===================================================== */

      if (lightLines[0]) {
        gsap.to(lightLines[0], {
          xPercent: 34,
          opacity: 0.85,
          duration: 2.7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (lightLines[1]) {
        gsap.to(lightLines[1], {
          xPercent: -32,
          opacity: 0.82,
          duration: 3.1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      /* =====================================================
         INTRO CARD FLOAT
      ===================================================== */

      gsap.to(introCard, {
        y: -6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =====================================================
         MOUSE PARALLAX - AMBIENT BACKGROUND ONLY
      ===================================================== */

      const handleMouseMove = (event) => {
        const rect =
          section.getBoundingClientRect();

        const mouseX =
          (event.clientX - rect.left) /
          rect.width -
          0.5;

        const mouseY =
          (event.clientY - rect.top) /
          rect.height -
          0.5;

        orbs.forEach((orb, index) => {
          gsap.to(orb, {
            x:
              mouseX *
              (index === 0 ? 26 : -22),
            y:
              mouseY *
              (index === 0 ? 20 : -18),
            duration: 1.1,
            ease: "power2.out",
            overwrite: true,
          });
        });

        dots.forEach((dot, index) => {
          const strength =
            4 + (index % 4) * 2;

          gsap.to(dot, {
            x:
              mouseX * strength,
            y:
              mouseY * strength,
            duration: 0.9,
            ease: "power2.out",
            overwrite: true,
          });
        });

      };

      const handleMouseLeave = () => {
        orbs.forEach((orb) => {
          gsap.to(orb, {
            x: 0,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          });
        });
      };

      /* =====================================================
         REDUCED MOTION
      ===================================================== */

      if (
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
      ) {
        gsap.killTweensOf(
          [
            ...dots,
            ...glows,
            ...orbs,
            ...lightLines,
            introCard,
          ].filter(Boolean)
        );
      }

      /* =====================================================
         CLEANUP EVENTS
      ===================================================== */

      return () => {
        section.removeEventListener(
          "mousemove",
          handleMouseMove
        );

        section.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      };
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);


  /* =========================================================
     MODAL CONTENT (rendered via portal — see below)
  ========================================================= */

  const modalContent = (
    <AnimatePresence>
      {activeProduct && (
        <motion.div
          className="product-overlay"
          initial={{
            opacity: 0,
            backdropFilter:
              "blur(0px)",
          }}
          animate={{
            opacity: 1,
            backdropFilter:
              "blur(18px)",
          }}
          exit={{
            opacity: 0,
            backdropFilter:
              "blur(0px)",
          }}
          transition={{
            duration: 0.22,
          }}
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closeProduct();
            }
          }}
        >
          <motion.div
            className="product-detail-panel"
            initial={{
              opacity: 0,
              y: 32,
              scale: 0.88,
              rotateX: 7,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
            }}
            exit={{
              opacity: 0,
              y: 22,
              scale: 0.92,
              rotateX: -5,
            }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* =================================================
                CLOSE
            ================================================= */}

            <motion.button
              type="button"
              className="product-close"
              onClick={closeProduct}
              aria-label="Close product"
              whileHover={{
                rotate: 90,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <span />
              <span />
            </motion.button>

            <div className="product-detail-grid">
              {/* ===============================================
                  INFORMATION
              =============================================== */}

              <motion.div
                className="product-information"
                initial={{
                  opacity: 0,
                  x: -24,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.38,
                  delay: 0.08,
                  ease: "power3.out",
                }}
              >
                <div className="detail-top">
                  <span className="detail-number">
                    {activeProduct.number}
                  </span>

                  <span className="detail-label">
                    {activeProduct.type}
                  </span>
                </div>

                <motion.h2
                  className="detail-product-name"
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.28,
                    delay: 0.14,
                  }}
                >
                  {activeProduct.name}
                </motion.h2>

                <motion.h3
                  className="detail-tagline"
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.25,
                    delay: 0.19,
                  }}
                >
                  {activeProduct.tagline}
                </motion.h3>

                <motion.p
                  className="detail-description"
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.25,
                    delay: 0.23,
                  }}
                >
                  {activeProduct.description}
                </motion.p>

                <motion.div
                  className="functions-heading"
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.25,
                    delay: 0.27,
                  }}
                >
                  <span />

                  <p>
                    CORE FUNCTIONS
                  </p>
                </motion.div>

                <div className="functions-list">
                  {activeProduct.functions.map(
                    (
                      item,
                      index
                    ) => (
                      <motion.div
                        className="function-item"
                        key={item.title}
                        initial={{
                          opacity: 0,
                          x: -18,
                          scale: 0.97,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.30,
                          delay:
                            0.30 +
                            index *
                            0.055,
                          ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                          ],
                        }}
                        whileHover={{
                          x: 6,
                          scale: 1.012,
                        }}
                      >
                        <div className="function-number">
                          0{index + 1}
                        </div>

                        <div className="function-content">
                          <h4>
                            {item.title}
                          </h4>

                          <p>
                            {item.text}
                          </p>
                        </div>
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>

              {/* ===============================================
                  VIDEO
              =============================================== */}

              <motion.div
                className="product-video-side"
                initial={{
                  opacity: 0,
                  x: 28,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.42,
                  delay: 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="video-3d-wrapper">
                  <motion.div
                    className="video-glow"
                    animate={{
                      scale: [
                        0.95,
                        1.08,
                        0.95,
                      ],
                      opacity: [
                        0.45,
                        0.85,
                        0.45,
                      ],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    className="video-frame"
                    initial={{
                      rotateY: -5,
                      rotateX: 2,
                    }}
                    animate={{
                      rotateY: -2,
                      rotateX: 1,
                    }}
                    whileHover={{
                      rotateY: 0,
                      rotateX: 0,
                      y: -5,
                      scale: 1.012,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                  >
                    <div className="video-top-bar">
                      <div className="video-dots">
                        <span />
                        <span />
                        <span />
                      </div>

                      <span>
                        {
                          activeProduct.name
                        }
                      </span>

                      <span className="video-status">
                        READY
                      </span>
                    </div>

                    <div className="video-container">
                      <video
                        key={
                          activeProduct.id
                        }
                        src={
                          activeProduct.video
                        }
                        controls
                        playsInline
                        preload="metadata"
                      />

                      <motion.div
                        className="video-overlay-label"
                        initial={{
                          opacity: 0,
                          x: -8,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: 0.42,
                          duration: 0.25,
                        }}
                      >
                        INTELLIGENCE PREVIEW
                      </motion.div>
                    </div>

                    <div className="video-bottom-bar">
                      <span>
                        PRODUCT SYSTEM
                      </span>

                      <span>
                        {
                          activeProduct.number
                        }{" "}
                        / 03
                      </span>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="video-description"
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.35,
                    duration: 0.25,
                  }}
                >
                  <span>
                    EXPLORE
                  </span>

                  <p>
                    Use the video controls
                    to play, pause, mute,
                    seek or enter fullscreen.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  /* =========================================================
     JSX
  ========================================================= */

  return (
    <section
      ref={sectionRef}
      className="products-section"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="products-background">
        {/* Full background video (p5.mp4) replacing the
            previous plain gradient backdrop */}
        <video
          className="products-bg-video"
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark overlay so text/UI on top stays readable */}
        <div className="products-video-overlay" />

        <div className="background-glow background-glow-one" />

        <div className="background-glow background-glow-two" />

        <div className="background-glow background-glow-three" />

        <div className="background-particles">
          {Array.from({ length: 30 }).map(
            (_, index) => (
              <span key={index} />
            )
          )}
        </div>

        <div className="background-light-line line-one" />

        <div className="background-light-line line-two" />

        <div className="background-light-line line-three" />
      </div>

      {/* =====================================================
          AMBIENT ORBS
      ===================================================== */}

      <div className="products-bg-orb products-orb-one" />

      <div className="products-bg-orb products-orb-two" />

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="products-container">
        {/* ===================================================
            SIDEBAR
        =================================================== */}

        <aside className="products-sidebar">
          <div className="products-heading">
            <span>
              INTELLIGENCE SYSTEMS
            </span>

            <h2>
              Products
            </h2>
          </div>

          <div className="product-list">
            {products.map((product, index) => (
              <motion.button
                key={product.id}
                type="button"
                className={`product-selector ${activeProduct?.id ===
                  product.id
                  ? "selected"
                  : ""
                  }`}
                onClick={() =>
                  openProduct(product)
                }
                whileHover={{
                  x: 7,
                  scale: 1.015,
                }}
                whileTap={{
                  scale: 0.975,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                }}
              >
                <span className="product-number">
                  {product.number}
                </span>

                <span className="product-selector-content">
                  <strong>
                    {product.name}
                  </strong>

                  <small>
                    {product.type}
                  </small>
                </span>

                <motion.span
                  className="product-arrow"
                  animate={{
                    rotate:
                      activeProduct?.id ===
                        product.id
                        ? 45
                        : 0,
                  }}
                  transition={{
                    duration: 0.18,
                  }}
                >
                  ↗
                </motion.span>
              </motion.button>
            ))}
          </div>

          <div className="products-sidebar-line" />

          <p className="products-sidebar-note">
            Select a system to explore its
            intelligence layer.
          </p>
        </aside>

        {/* ===================================================
            INTRO
        =================================================== */}

        <motion.div
          className="products-intro"
          initial={false}
          animate={{
            opacity: activeProduct ? 0 : 1,
            scale: activeProduct ? 0.96 : 1,
            y: activeProduct ? -20 : 0,
          }}
          transition={{
            duration: 0.28,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            pointerEvents: activeProduct
              ? "none"
              : "auto",
          }}
          aria-hidden={
            activeProduct ? true : undefined
          }
        >
          <div className="intro-glass-card">
            <span className="intro-eyebrow">
              SELECT A PRODUCT
            </span>

            <h3 className="intro-heading">
              Intelligence designed
              <br />
              for better decisions.
            </h3>

            <p className="intro-description">
              Explore the systems built to
              diagnose, investigate, and
              simulate the mechanics behind
              business decisions.
            </p>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          PRODUCT MODAL — rendered via portal directly into
          document.body so it can NEVER be clipped by any
          ancestor's overflow/perspective/transform (which is
          what was cutting the box off before).
      ===================================================== */}

      {mounted &&
        createPortal(modalContent, document.body)}
    </section>
  );
}

export default Coast;