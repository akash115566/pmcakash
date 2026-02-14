import React, { useState } from "react";
import "../Style/navbar.css";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Left Side Logo */}
        <div className="logo-section">
          {/* <img src={logo} alt="PMC Logo" className="logo" /> */}
          <h2 className="company-name">POOJA MOVIE CREATIONS</h2>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Right Side Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Awards</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Clients</a></li>
          <li><a href="#">Contact</a></li>
          <li className="quote-btn"><a href="#">Get a Quote</a></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
