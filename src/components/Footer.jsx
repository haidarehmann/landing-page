import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-container">
        
        {/* Brand Column */}
        <div className="footer-column brand-col">
          <h3 className="footer-brand">COASTS</h3>
          <p className="footer-desc">
            Empowering modern businesses with elite, innovative products to streamline complex decisions and drive sustainable growth.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="footer-column">
          <h4 className="footer-title">Solutions</h4>
          <ul className="footer-links">
            <li><a href="#orbital">Orbital Intelligence</a></li>
            <li><a href="#magnus">Magnus Forensic</a></li>
            <li><a href="#simfore">Simfore Simulation</a></li>
          </ul>
        </div>

        {/* Company Links Column */}
        <div className="footer-column">
          <h4 className="footer-title">Company</h4>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="footer-column newsletter-col">
          <h4 className="footer-title">Stay Updated</h4>
          <p className="footer-desc">Subscribe to get the latest business insights and product updates.</p>
          <div className="footer-newsletter">
            <input type="email" placeholder="Your email address" />
            <button type="button">→</button>
          </div>
        </div>

      </div>

      {/* Bottom Copyright & Social Icons Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Coasts. All rights reserved.</p>
          
          {/* Social Icons Section (Now perfectly integrated) */}
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