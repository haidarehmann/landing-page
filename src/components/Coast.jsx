import React, { useState } from "react";
import "./Coast.css";

const products = [
  {
    title: "ORBITAL",
    subtitle: "Diagnostics Intelligence",
    description: "Discover hidden operational insights and identify risks before they impact your business.",
    initials: "OR"
  },
  {
    title: "MAGNUS",
    subtitle: "Forensic Intelligence",
    description: "Analyze business performance with precision and detect hidden operational inefficiencies.",
    initials: "MA"
  },
  {
    title: "SIMFORE",
    subtitle: "Simulation Intelligence",
    description: "Model complex business scenarios and evaluate strategies before taking critical decisions.",
    initials: "SI"
  },
];

function Coast() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next Slide function
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Previous Slide function
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const currentItem = products[currentIndex];

  return (
    <section id="pricing" className="coasts-root">
      {/* Header Area */}
      <div className="coasts-title-area">
        <span className="coasts-tag">Our Solutions</span>
        <h2 className="coasts-heading">Intelligent Solutions</h2>
        <div className="underline3"></div>
        <p className="coasts-text">
          Empowering businesses with innovative products that simplify complex decisions.
        </p>
      </div>

      <div className="slider-container">
        
        <button className="nav-btn prev-btn" onClick={prevSlide}>
          &#8249;
        </button>

        <div className="coasts-box">
          <p className="card-desc">"{currentItem.description}"</p>
          
          <div className="card-footer">
            <div className="user-badge">{currentItem.initials}</div>
            <div className="user-info">
              <h3>{currentItem.title}</h3>
              <h5>{currentItem.subtitle}</h5>
            </div>
          </div>
        </div>

        <button className="nav-btn next-btn" onClick={nextSlide}>
          &#8250;
        </button>
      </div>

      <div className="dots-container">
        {products.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active-dot" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Coast;