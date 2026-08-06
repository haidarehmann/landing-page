import React from "react";
import "./style.css";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NewsletterButton } from "../button/button";

function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-container">

        <div className="footer-column brand-col">
          <h3 className="footer-brand">KHADIJA MUBARIK</h3>
          <p className="footer-desc">
            Empowering modern businesses with elite, innovative products to streamline complex decisions and drive sustainable growth.
          </p>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Solutions</h4>
          <ul className="footer-links">
            <li><a href="#orbital">Orbital Intelligence</a></li>
            <li><a href="#magnus">Magnus Forensic</a></li>
            <li><a href="#simfore">Simfore Simulation</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Company</h4>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column newsletter-col">
          <h4 className="footer-title">Stay Updated</h4>
          <p className="footer-desc">Subscribe to get the latest business insights and product updates.</p>
          <div className="footer-newsletter">
            <input type="email" placeholder="Your email address" />
            <NewsletterButton />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Coasts. All rights reserved.</p>

          <div className="social-icons">
            <a href="#" className="icon">
              <FaInstagram size={17} />
            </a>
            <a href="#" className="icon">
              <FaLinkedinIn size={17} />
            </a>
          </div>

          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;