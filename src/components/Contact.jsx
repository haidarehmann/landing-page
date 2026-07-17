import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Our team will reach out to you shortly.");
  };

  return (
    <div id="faq">
      <section id="contact" className="contact-root">
      <div className="contact-container">
        
        {/* Left Side: Elegant Brand/Info Panel */}
        <div className="contact-info-panel">
          <span className="contact-tag">Get in Touch</span>
          <h2 className="contact-info-heading">
            Let’s build something <br />
            <span className="gold-text">intelligent</span> together.
          </h2>
          <p className="contact-info-text">
            Have questions about our solutions? Tell us about your project, and our experts will help you find the perfect setup.
          </p>

          <div className="contact-details-list">
            <div className="contact-item">
              <span className="contact-item-label"> Email</span>
              <a href="mailto:Km@khadijaMubarik.com" className="contact-item-value">Km@khadijaMubarik.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">Phone</span>
              <a href="tel:+923216420575" className="contact-item-value">+92 321 6420575</a>
            </div>
            <div className="location-item">
              <span className="location-item-label">Location</span>
              <a href="#lahore" className="contact-item-value">Lahore, Pakistan</a>
            </div>
          </div>
        </div>

        {/* Right Side: Form with Beautiful Pink/Lavender Gradient */}
        <div className="contact-form-panel">
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              {/* Name Field */}
              <div className="input-group">
                <label>Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>

              {/* Company Field */}
              <div className="input-group">
                <label>Company / Organization</label>
                <input 
                  type="text" 
                  name="company" 
                  placeholder="e.g. Strgis Hotel" 
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="input-group">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email" 
                placeholder="you@example.com" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            {/* Message Field */}
            <div className="input-group">
              <label>Tell us about your requirements</label>
              <textarea 
                name="message" 
                rows="4" 
                placeholder="Describe your needs or ask us a question..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Premium Gold Button */}
            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <span className="btn-arrow"></span>
            </button>
          </form>
        </div>

      </div>
    </section>
    </div>
  );
}

export default Contact;