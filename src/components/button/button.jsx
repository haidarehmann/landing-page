import React from "react";
import "./style.css";

/** 
 * Generic Button
 * variant: "submit" | "pricing" | "marquee" | "cta-primary" | "cta-secondary"
 */
export function Button({
  variant = "submit",
  featured = false,
  icon = null,
  iconPosition = "right",
  children,
  onClick,
  type = "button",
  className = "",
  ...rest
}) {
  const variantClass = {
    submit: "btn-submit",
    pricing: `btn-pricing ${featured ? "btn-pricing-featured" : ""}`,
    marquee: "btn-marquee",
    "cta-primary": "btn-cta-primary",
    "cta-secondary": "btn-cta-secondary",
  }[variant];

  return (
    <button
      type={type}
      className={`btn ${variantClass} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {icon && iconPosition === "left" && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="btn-icon">{icon}</span>}
    </button>
  );
}

/**
 * Round Arrow Button (sliders / carousels)
 * style: "slider" | "testimonial"
 * direction: "left" | "right"
 */
export function ArrowButton({
  style = "slider",
  direction = "left",
  visible = true,
  onClick,
  ariaLabel,
}) {
  const styleClass = style === "testimonial" ? "btn-arrow-testimonial" : "btn-arrow-slider";
  const visibleClass = style === "slider" && visible ? "btn-arrow-visible" : "";

  const symbol =
    style === "testimonial"
      ? direction === "left"
        ? "\u2039"
        : "\u203A"
      : direction === "left"
      ? "\u2190"
      : "\u2192";

  return (
    <button
      className={`btn btn-arrow-round ${styleClass} ${visibleClass}`}
      onClick={onClick}
      aria-label={ariaLabel || `Scroll ${direction}`}
    >
      {symbol}
    </button>
  );
}

/**
 * Dot Button (testimonial pagination)
 */
export function DotButton({ active = false, onClick, ariaLabel }) {
  return (
    <button
      className={`btn btn-dot ${active ? "btn-dot-active" : ""}`}
      onClick={onClick}
      aria-label={ariaLabel}
    />
  );
}

/**
 * Get Started Button (Header CTA)
 */
export function GetStartedButton({ onClick, className = "", ...rest }) {
  return (
    <button
      type="button"
      className={`btn btn-get-started ${className}`}
      onClick={onClick}
      {...rest}
    >
      Get Started
    </button>
  );
}

/**
 * Nav Link Button (Header nav items)
 */
export function NavButton({ onClick, children }) {
  return (
    <button type="button" className="btn btn-nav" onClick={onClick}>
      {children}
    </button>
  );
}

/**
 * Hamburger Menu Button (Header mobile toggle)
 */
export function HamburgerButton({ active = false, onClick }) {
  return (
    <button
      type="button"
      className={`btn-hamburger ${active ? "active" : ""}`}
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

/**
 * Newsletter Submit Button (Footer)
 */
export function NewsletterButton({ onClick, type = "button" }) {
  return (
    <button type={type} className="btn btn-newsletter" onClick={onClick}>
      →
    </button>
  );
}