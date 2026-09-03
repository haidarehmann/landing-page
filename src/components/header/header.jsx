import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, LayoutGroup } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";

import {
  GetStartedButton,
  NavButton,
  HamburgerButton,
} from "../button/button";

import { images } from "../../assets/images";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "features", label: "Features" },
  { id: "faq", label: "FAQ" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const navigate = useNavigate();
  const location = useLocation();

  const cleanupAnimations = () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };

  useEffect(() => {
    const routeName = location.pathname.slice(1) || "home";
    setActiveLink(routeName);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      cleanupAnimations();
      window.location.assign(`/#${sectionId}`);
      setMenuOpen(false);
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setActiveLink(sectionId);
    setMenuOpen(false);
  };

  const goToAbout = () => {
    cleanupAnimations();
    window.location.assign("/about");
    setMenuOpen(false);
  };

  const goToFeatures = () => {
    cleanupAnimations();
    window.location.assign("/features");
    setMenuOpen(false);
  };

  const handleNavClick = (id) => {
    if (id === "about") return goToAbout();
    if (id === "features") return goToFeatures();
    return scrollToSection(id);
  };

  return (
    <motion.header
      className="nh-header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* LOGO */}
      <motion.div
        className="nh-logo"
        onClick={() => {
          cleanupAnimations();
          window.location.assign("/");
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            cleanupAnimations();
            window.location.assign("/");
          }
        }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 260, damping: 15 }}
      >
        <img
          src={images.logoo}
          alt="Khadija Mubarak Ali"
          className="nh-logo-img"
        />
      </motion.div>

      {/* HAMBURGER */}
      <HamburgerButton
        active={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      />

      {/* NAVIGATION */}
      <LayoutGroup id="nh-nav">
        <ul className={`nh-nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li
              key={item.id}
              className={activeLink === item.id ? "active" : ""}
            >
              {activeLink === item.id && (
                <motion.div
                  className="nh-active-pill"
                  layoutId="nh-active-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <NavButton onClick={() => handleNavClick(item.id)}>
                {item.label}
              </NavButton>
            </li>
          ))}

          {/* MOBILE GET STARTED */}
          <li className="nh-mobile-only-btn">
            <GetStartedButton onClick={() => scrollToSection("contact")} />
          </li>
        </ul>
      </LayoutGroup>

      {/* DESKTOP GET STARTED */}
      <motion.div
        className="nh-desktop-only-btn"
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 14 }}
      >
        <GetStartedButton onClick={() => scrollToSection("contact")} />
      
      </motion.div>
    </motion.header>
  );
}

export default Header;