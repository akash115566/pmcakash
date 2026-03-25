import React from "react";
import "../Style/stadium.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft,FaStar } from "react-icons/fa";


const StadiumBranding = () => {
  const navigate = useNavigate();


  const services = [
  {
    title: "Boundary Rope Branding",
    desc: "Your brand logo prominently displayed on boundary ropes, visible during every boundary hit and camera angle throughout the match.",
  },
  {
    title: "Sight Screen Advertising",
    desc: "Prime positioning on sight screens behind the bowler, ensuring maximum visibility during every ball delivery and replay.",
  },
  {
    title: "Stadium Banner Displays",
    desc: "Large-format banners strategically placed around the stadium perimeter for continuous brand exposure to live audiences.",
  },
  {
    title: "Player Dugout Branding",
    desc: "Exclusive branding opportunities in player dugout areas, visible during team discussions and strategic timeouts.",
  },
  {
    title: "Ground Signage",
    desc: "Custom ground signage and field markings that appear in aerial shots and wide-angle camera coverage.",
  },
  {
    title: "Entry Gate Branding",
    desc: "Welcome your audience with branded entry gates and turnstiles, creating the first brand impression for stadium visitors.",
  },
];



  const services2 = [
  {
    title: "Unmatched Visibility",
    desc: "Stadium branding offers 360-degree visibility with your brand appearing in every camera angle and broadcast shot.",
  },
  {
    title: "Live Audience Impact",
    desc: "Direct engagement with 50,000+ passionate cricket fans in the stadium, creating memorable brand experiences.",
  },
  {
    title: "Television Coverage",
    desc: "Guaranteed appearance in TV broadcasts reaching 400+ million viewers across India and international markets.",
  },
  {
    title: "Premium Association",
    desc: "Associate your brand with the excitement and prestige of IPL cricket, enhancing brand perception and recall.",
  }
 
];

  return (
    <>
    <div className="stadium-page">

      {/* 🔝 TOP SECTION */}
      <div className="stadium-header">

        {/* Back Arrow */}
        <div className="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </div>

        {/* Heading */}
        <h1>🏟️ IPL Stadium Branding</h1>

        <p className="subtitle">
          Premium stadium advertising with maximum visibility during live IPL matches
        </p>

        {/* Image */}
        <div className="stadium-image">
          <img src="/st1.webp" alt="stadium" />
        </div>

      </div>

      {/* 📄 OVERVIEW */}
      <div className="overview-section">
        <h2>🏟️ Stadium Branding Overview</h2>
        <p>
          Pooja Movie Creations offers exclusive IPL stadium branding opportunities that put your brand at the center of cricket's biggest stage. Our comprehensive stadium advertising solutions include boundary rope branding, sight screen placements, stadium banners, and strategic positioning throughout the venue. With millions of viewers watching both live and on television, your brand gains unparalleled exposure during every match moment.
        </p>
      </div>

      {/* 📊 STATS */}
      <div className="stats-section">

        <h2>🏟️ Stadium Branding Statistics</h2>

        <div className="stats-grid">

          <div className="stat-card">
            <h3>50,000+</h3>
            <p>Live Stadium Audience</p>
          </div>

          <div className="stat-card">
            <h3>400M+</h3>
            <p>TV Viewers Per Match</p>
          </div>

          <div className="stat-card">
            <h3>360°</h3>
            <p>Stadium Coverage</p>
          </div>

          <div className="stat-card">
            <h3>4 Hours</h3>
            <p>Brand Exposure Per Match</p>
          </div>

        </div>
      </div>

    <div className="services1-section">

      {/* TOP HEADING */}
      <h2 className="services1-heading">
        🏟️ Our Stadium Branding Services
      </h2>

      {/* CARDS */}
      <div className="services1-grid">
        {services.map((item, index) => (
          <div className="service1-card" key={index}>
            <h3>
              <FaStar className="star-icon1" /> {item.title}
            </h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </div>



        <div className="services2-section">

      {/* TOP HEADING */}
      <h2 className="services2-heading">
        🏟️ Why Choose Stadium Branding?
      </h2>

      {/* CARDS */}
      <div className="services2-grid">
        {services2.map((item, index) => (
          <div className="service2-card" key={index}>
            <h3>
              <FaStar className="star-icon2" /> {item.title}
            </h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </div>


     <div className="cta-section">

      {/* Heading */}
      <h2>Ready to Brand the Stadium?</h2>

      {/* Paragraph */}
      <p>
        Transform your brand visibility with Pooja Movie Creations' exclusive IPL stadium branding solutions. Contact us today to secure your premium stadium advertising space!
      </p>

      {/* Buttons */}
      <div className="cta-buttons">
        <a href="/contact" className="btn quote-btn">
          Get Quote
        </a>

        <a href="tel:+918799746544" className="btn call-btn">
          Call Now
        </a>
      </div>

    </div>

      

    </div>
    </>
  );
};

export default StadiumBranding;