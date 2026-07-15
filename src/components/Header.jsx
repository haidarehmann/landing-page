import "./Header.css";

function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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

      <ul className="nav-links">
        <li><button type="button" onClick={() => scrollToSection("ai")}>AI</button></li>
        <li><button type="button" onClick={() => scrollToSection("features")}>Features</button></li>
         <li><button type="button" onClick={() => scrollToSection("testimonials")}>Testimonials</button></li>
        <li><button type="button" onClick={() => scrollToSection("services")}>Services</button></li>
        <li><button type="button" onClick={() => scrollToSection("pricing")}>Pricing</button></li>
        <li><button type="button" onClick={() => scrollToSection("contact")}>Contact</button></li>
      </ul>
    </header>
  );
}

export default Header;