import React, { useState } from "react";
import "../Style/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

 const handleLinkClick = () => {
  setMenuOpen(false);

  // 👇 force scroll top
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant", // ya "smooth"
  });

  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo-section">
          <h2 className="company-name">POOJA MOVIE CREATIONS</h2>
        </div>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
          <li><Link to="/service" onClick={handleLinkClick}>Services</Link></li>
          <li><Link to="/work" onClick={handleLinkClick}>Work</Link></li>
          <li><Link to="/award" onClick={handleLinkClick}>Awards</Link></li>
          <li><Link to="/gallery" onClick={handleLinkClick}>Gallery</Link></li>
          <li><Link to="/client" onClick={handleLinkClick}>Clients</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
          <li className="quote-btn">
            <Link to="/quote" onClick={handleLinkClick}>Get a Quote</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;