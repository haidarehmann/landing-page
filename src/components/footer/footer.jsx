import React from "react";
import "./style.css";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { images } from "../../assets/images";

/* Real flag images (not emoji) so every flag renders consistently
   across OS/browsers — emoji flags often show as blank boxes on
   Windows. GCC has no ISO country code, so it uses a globe icon. */
const OFFICES = [
  { flagUrl: null, flagEmoji: "🌐", country: "GCC" },
  { flagUrl: "https://flagcdn.com/w80/pk.png", country: "Pakistan" },
  { flagUrl: "https://flagcdn.com/w80/us.png", country: "United States" },
  { flagUrl: "https://flagcdn.com/w80/gb.png", country: "United Kingdom" },
];

function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-container">

        <div className="footer-column brand-col">
          <div className="footer-brand-row">
            {/* Replace src with your logo file's path once it's in the project (e.g. /logo.png) */}
            <img
              className="footer-logo-mark"
              src={images.logoo}
              alt="Khadija Mubarik Ali logo"
            />
          </div>
          <p className="footer-desc">
            Helping businesses stay compliant, organized, and growth-ready
            through reliable audit, tax, financial, and AI advisory support.
          </p>
          <div className="social-icons">
            <a href="#" className="icon" aria-label="LinkedIn">
              <FaLinkedinIn size={16} />
            </a>
            <a href="#" className="icon" aria-label="Facebook">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="icon" aria-label="Instagram">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="icon" aria-label="X">
              <FaXTwitter size={16} />
            </a>
          </div>
          <p className="footer-contact">contact@khadijamubarik.com</p>
        </div>

        <div className="footer-column">
          <h4 className="footer-title">Services</h4>
          <ul className="footer-links">
            <li><a href="#audit">Audit &amp; Assurance</a></li>
            <li><a href="#tax">Tax Advisory</a></li>
            <li><a href="#bookkeeping">Bookkeeping &amp; Accounting</a></li>
            <li><a href="#reporting">Financial Reporting</a></li>
            <li><a href="#business">Business Advisory</a></li>
            <li><a href="#ai">AI Advisory &amp; Automation</a></li>
          </ul>
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
            <li><a href="#features">Features</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-offices">
        <div className="footer-offices-content">
          <h4 className="footer-offices-title">Served Across</h4>
          <div className="footer-offices-grid">
            {OFFICES.map((o) => (
              <div className="office-card" key={o.country}>
                <div className="office-card-head">
                  {o.flagUrl ? (
                    <img className="office-flag" src={o.flagUrl} alt={`${o.country} flag`} />
                  ) : (
                    <span className="office-flag office-flag-emoji">{o.flagEmoji}</span>
                  )}
                  <span className="office-country">{o.country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Khadija Mubarik Ali. All rights reserved.</p>

          <div className="footer-legal">
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;