import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import "../Style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li><Link to="/tvadd">TV & Ad Advertising</Link></li>
            <li><Link to="/radio-fm">Radio Ad Agency</Link></li>
            <li><Link to="/pvr-advertising">PVR Cinemas</Link></li>
            <li><Link to="/metro">Metro Advertising</Link></li>
            <li><Link to="/airport-advertising">Airport Advertising</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>Our Company</h3>
          <ul>
            <li><Link to="/terms">Terms & Condition</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
            <li><Link to="/policy">Cookie Policy</Link></li>
            <li><Link to="/legal">Legal Notice</Link></li>
                <li><Link to="/founder">Founder </Link></li>
          </ul>
        </div>

   {/* Column 4 */}
<div className="footer-col">
  <h3>Contact Us</h3>

  <ul>
    <li>
      <a
        href="https://maps.google.com"
        target="_blank"
        rel="noreferrer"
      >
        📍 167, Block A, Sector 63,<br />
        Noida, Uttar Pradesh 201301
      </a>
    </li>

    <li>
      <a href="mailto:info@poojamoviecreations.in">
        📧 info@poojamoviecreations.in
      </a>
    </li>

    <li>
      <a href="tel:7042438293">
        📞 70424 38293
      </a>
    </li>
  </ul>

  {/* Social Icons */}
  <div className="footer-social">
    <a href="https://facebook.com" target="_blank" rel="noreferrer">
      <FaFacebookF />
    </a>

    <a href="https://instagram.com" target="_blank" rel="noreferrer">
      <FaInstagram />
    </a>

    <a href="https://youtube.com" target="_blank" rel="noreferrer">
      <FaYoutube />
    </a>

    <a href="https://twitter.com" target="_blank" rel="noreferrer">
      <FaTwitter />
    </a>
  </div>
</div>
 </div>

{/* Bottom Bar */}
<div className="footer-bottom">
  <p>
    © 2008–2021 || All rights reserved | 
    <span> Pooja Movie Creations Group</span>
  </p>
</div>

     
    </footer>
  );
};

export default Footer;