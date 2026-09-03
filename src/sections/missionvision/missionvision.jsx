import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Torus } from "@react-three/drei";
import "./style.css";

function RotatingShape({ shape, color }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
           {shape === "icosahedron" ? (
        <Icosahedron ref={meshRef} args={[0.95, 0]}>
          <meshStandardMaterial color={color} roughness={0.25} metalness={0.4} />
        </Icosahedron>
      ) : (
        <Torus ref={meshRef} args={[0.72, 0.26, 16, 64]}>
          <meshStandardMaterial color={color} roughness={0.3} metalness={0.5} />
        </Torus>
      )}
    </Float>
  );
}

function ShapeCanvas({ shape, color }) {
  return (
    <div className="mv-canvas-wrap">
      <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={1.1} />
        <RotatingShape shape={shape} color={color} />
      </Canvas>
    </div>
  );
}

function MissionVision() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section className="mv-section">
      <div className="mv-inner">
        <div className="mv-grid">
          <motion.div
            className="mv-card"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="mv-top-border"></div>
            <ShapeCanvas shape="icosahedron" color="#6c4cf1" />
            <span className="mv-tag">Mission</span>
            <p>
              To help accounting and finance businesses save time, reduce
              errors, and operate with confidence — by bringing responsible
              AI and intelligent automation into everyday financial
              decision-making.
            </p>
          </motion.div>

          <motion.div
            className="mv-card"
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="mv-top-border"></div>
            <ShapeCanvas shape="torus" color="#8fd14f" />
            <span className="mv-tag">Vision</span>
            <p>
              A future where every finance and accounting team trusts AI as
              much as they trust their own judgment — where governance,
              compliance, and automation work together to build resilient,
              future-ready businesses.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;