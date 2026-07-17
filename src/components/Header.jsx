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
  <ul className="nav-links">
  <li><button onClick={() => scrollToSection("ai")}>Home</button></li>
  <li><button onClick={() => scrollToSection("features")}>About</button></li>
  <li><button onClick={() => scrollToSection("services")}>Services</button></li>
  <li><button onClick={() => scrollToSection("solutions")}>Solutions</button></li>
  <li><button onClick={() => scrollToSection("testimonials")}>Testimonials</button></li>
  <li><button onClick={() => scrollToSection("faq")}>FAQ</button></li>
  <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
</ul>
</ul>
    </header>
  );
}

export default Header;