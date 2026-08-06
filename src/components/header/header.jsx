import { useState } from "react";
import "./style.css";
import { GetStartedButton, NavButton, HamburgerButton } from "../button/button";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div
        className="logo"
        onClick={() => scrollToSection("ai")}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            scrollToSection("ai");
          }
        }}
      >
        <h2>Khadija Mubarak Ali</h2>
        <p>Audit | Task | Risk | Strategy & AI Advisory</p>
      </div>

      <HamburgerButton active={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><NavButton onClick={() => scrollToSection("ai")}>AI</NavButton></li>
        <li><NavButton onClick={() => scrollToSection("services")}>Services</NavButton></li>
        <li><NavButton onClick={() => scrollToSection("testimonials")}>Testimonials</NavButton></li>
        <li><NavButton onClick={() => scrollToSection("faq")}>FAQ</NavButton></li>
        <li><NavButton onClick={() => scrollToSection("contact")}>Contact</NavButton></li>

        <li className="mobile-only-btn">
          <GetStartedButton onClick={() => scrollToSection("contact")} />
        </li>
      </ul>

      <div className="desktop-only-btn">
        <GetStartedButton onClick={() => scrollToSection("contact")} />
      </div>
    </header>
  );
}

export default Header;