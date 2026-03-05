import React, { useState } from "react";
import "../Style/navbar.css";
import { Link } from "react-router-dom";


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
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About Us</Link></li>
  <li><Link to="/service">Services</Link></li>
  <li><Link to="/work">Work</Link></li>
  <li><Link to="/award">Awards</Link></li>
  <li><Link to="/gallery">Gallery</Link></li>
  <li><Link to="#">Clients</Link></li>
  <li><Link to="#">Contact</Link></li>
  <li className="quote-btn"><Link to="#">Get a Quote</Link></li>
</ul>

      </div>
    </nav>
  );
};

export default Navbar;
