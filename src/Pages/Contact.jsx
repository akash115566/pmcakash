import React from "react";
import "../Style/contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="container">

        {/* Heading */}
        <h2 className="contact-heading">Contact Us</h2>

        {/* Contact Section */}
        <div className="contact-wrapper">

          {/* Left Side */}
          <div className="contact-info">
            <h3>Get in Touch</h3>

            <p>
              📍 Address: Pooja Movie Creations Office, Sector 63, Noida, India
            </p>

            <p>
              📞 Phone: +91 7042438293
            </p>

            <p>
              📧 Email: info@poojamoviecreations.com
            </p>

          </div>

          {/* Right Side Form */}
          <div className="contact-form">
            <h3>Send Us a Message</h3>

            <form>
              <input type="text" placeholder="Your Name" required />

              <input type="email" placeholder="Your Email" required />

              <textarea placeholder="Your Message" rows="5" required></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>

        {/* Map */}
        <div className="map">
          <iframe
            title="Noida Map"
            src="https://www.google.com/maps?q=Noida%20Sector%2063&output=embed"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default Contact;