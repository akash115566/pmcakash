import React from "react";
import "../Style/ott.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft,FaStar } from "react-icons/fa";


const Ott = () => {
  const navigate = useNavigate();


  const jersey3 = [
  {
    title: "Hotstar Premium Ads",
    desc: "Premium advertising slots on Disney+ Hotstar during live IPL streaming, reaching millions of premium subscribers.",
  },
  {
    title: "JioCinema Integration",
    desc: "Targeted advertisements on JioCinema platform with interactive features and personalized content delivery.",
  },
  {
    title: "Social Media Campaigns",
    desc: "Comprehensive social media advertising across Instagram, Facebook, Twitter, and YouTube during IPL season.",
  },
  {
    title: "Mobile App Advertising",
    desc: "In-app advertisements and sponsored content within official IPL mobile applications and cricket gaming apps.",
  },
  {
    title: "Interactive Video Ads",
    desc: "Engaging interactive video advertisements that allow viewers to participate, vote, and engage with your brand.",
  },
  {
    title: "Programmatic Advertising",
    desc: "AI-powered programmatic advertising that targets specific demographics, interests, and viewing behaviors.",
  },
];



  const jersey4 = [
  {
    title: "Precise Targeting",
    desc: "Advanced targeting options based on demographics, location, interests, and viewing history for maximum relevance.",
  },
  {
    title: "Interactive Features",
    desc: "Clickable ads, polls, quizzes, and interactive elements that engage viewers beyond traditional advertising.",
  },
  {
    title: "Real-time Analytics",
    desc: "Comprehensive analytics and performance tracking to measure engagement, clicks, conversions, and ROI in real-time..",
  },
  {
    title: "Multi-device Reach",
    desc: "Consistent brand presence across smartphones, tablets, smart TVs, and desktop devices for complete coverage.",
  }
 
];

  return (
    <>
    <div className="jersey-page1">

      {/* 🔝 TOP SECTION */}
      <div className="jersey-header1">

        {/* Back Arrow */}
        <div className="back-btn11" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </div>

        {/* Heading */}
        <h1>📱 IPL Digital & OTT Advertising</h1>

        <p className="subtitle11">
       Comprehensive digital advertising solutions across streaming platforms and social media
        </p>

        {/* Image */}
        <div className="jersey-image1">
          <img src="/ot1.webp" alt="stadium" />
        </div>

      </div>

      {/* 📄 OVERVIEW */}
      <div className="overview-section11">
        <h2>📱 Digital & OTT Advertising Overview</h2>
        <p>
       Pooja Movie Creations delivers cutting-edge digital and OTT advertising solutions that reach cricket fans across all digital platforms. Our comprehensive digital strategy includes streaming platform advertisements on Hotstar, JioCinema, and other OTT services, social media campaigns, mobile app integrations, and targeted digital content. With the majority of IPL viewership now happening on digital platforms, we ensure your brand captures the attention of millions of engaged cricket fans through personalized, interactive, and highly targeted advertising experiences.
        </p>
      </div>

      {/* 📊 STATS */}
      <div className="stats-section11">

        <h2>📱 Digital Advertising Reach</h2>

        <div className="stats-grid11">

          <div className="stat-card11">
            <h3>300M+</h3>
            <p>OTT Platform Users</p>
          </div>

          <div className="stat-card11">
            <h3>70%</h3>
            <p>Digital Viewership </p>
          </div>

          <div className="stat-card11">
            <h3>15+</h3>
            <p>Digital Platforms</p>
          </div>

          <div className="stat-card11">
            <h3>24/7</h3>
            <p>Content Availability</p>
          </div>

        </div>
      </div>

    <div className="jersey-section1">

      {/* TOP HEADING */}
      <h2 className="jersey-heading1">
        📱 Our Digital Advertising Services
      </h2>

      {/* CARDS */}
      <div className="jersey-grid1">
        {jersey3.map((item, index) => (
          <div className="jersey-card1" key={index}>
            <h3>
              <FaStar className="star1-icon11" /> {item.title}
            </h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </div>



        <div className="jersey-section1">

      {/* TOP HEADING */}
      <h2 className="jersey-heading1">
        📱 Digital Platform Advantages
      </h2>

      {/* CARDS */}
      <div className="jersey-grid1">
        {jersey4.map((item, index) => (
          <div className="jersey-card1" key={index}>
            <h3>
              <FaStar className="jersey-icon2" /> {item.title}
            </h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </div>


     <div className="cta-section11">

      {/* Heading */}
      <h2>Go Digital with IPL!</h2>

      {/* Paragraph */}
      <p>
     Dominate the digital cricket space with Pooja Movie Creations' comprehensive OTT and digital advertising solutions. Contact us to launch your digital campaign! </p>

      {/* Buttons */}
      <div className="cta-buttons11">
        <a href="/quote" className="btn11 quote-btn11">
          Get Quote
        </a>

        <a href="tel:+918799746544" className="btn11 call-btn11">
          Call Now
        </a>
      </div>

    </div>

      

    </div>
    </>
  );
};

export default Ott;