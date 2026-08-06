import React from "react";
import "./style.css";
import { products } from "../../data/data";

function Coast() {
  return (
    <section className="coasts-root">
      <div className="coasts-title-area">
        <span className="coasts-tag">Our Solutions</span>
        <h2 className="coasts-heading">Intelligent Solutions</h2>
        <div className="underline4"></div>
        <p className="coasts-text">
          Empowering businesses with innovative products that simplify complex decisions.
        </p>
      </div>

      <div className="coasts-grid">
        {products.map((item, index) => (
          <div className="coasts-box" key={index}>
            <p className="card-desc">"{item.description}"</p>

            <div className="card-footer">
              <div className="user-badge">{item.initials}</div>
              <div className="user-info">
                <h3>{item.title}</h3>
                <h5>{item.subtitle}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Coast;