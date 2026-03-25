import React from "react";
import "../Style/team.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft,FaStar } from "react-icons/fa";


const StadiumBranding = () => {
  const navigate = useNavigate();


  const services = [
  {
    title: "Perimeter LED Boards",
    desc: "Dynamic perimeter LED displays that rotate your brand content throughout the match, visible in every camera shot and replay.",
  },
  {
    title: "Giant Stadium Screens",
    desc: "Massive LED screens for maximum impact, displaying your brand during strategic timeouts, innings breaks, and celebrations.",
  },
  {
    title: "Corner LED Displays",
    desc: "Strategic corner positioning ensures your brand is visible from every angle of the stadium and television coverage.",
  },
  {
    title: "Animated Brand Content",
    desc: "Create engaging animated advertisements that stand out from static displays and capture viewer attention effectively.",
  },
  {
    title: "Real-time Integration",
    desc: "Dynamic content that can be updated in real-time to match game situations, player performances, and audience engagement.",
  },
  {
    title: "Multi-format Support",
    desc: "Support for various content formats including videos, animations, static images, and interactive brand experiences.",
  },
];



  const services2 = [
  {
    title: "Dynamic Content",
    desc: "Unlike static banners, LED screens allow for animated, video, and interactive content that captures and holds attention.",
  },
  {
    title: "Perfect Visibility",
    desc: "High-brightness LED technology ensures perfect visibility in all lighting conditions, day or night matches.",
  },
  {
    title: "Broadcast Quality",
    desc: "Ultra-high resolution displays look crisp and professional on television broadcasts, enhancing your brand image.",
  },
  {
    title: "Flexible Scheduling",
    desc: "Schedule different content for different match moments - timeouts, boundaries, wickets, and celebrations",
  }
 
];

  return (
    <>
    <div className="stadium-page1">

      {/* 🔝 TOP SECTION */}
      <div className="stadium-header1">

        {/* Back Arrow */}
        <div className="back-btn1" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </div>

        {/* Heading */}
        <h1>📺 IPL LED Screen Advertising</h1>

        <p className="subtitle1">
         High-impact digital advertising on stadium LED screens during live IPL matches.
        </p>

        {/* Image */}
        <div className="stadium-image1">
          <img src="/team1.webp" alt="stadium" />
        </div>

      </div>

      {/* 📄 OVERVIEW */}
      <div className="overview-section1">
        <h2>🏟️ LED Screen Advertising Overview</h2>
        <p>
         Pooja Movie Creations provides cutting-edge LED screen advertising solutions that deliver dynamic, high-resolution brand content directly to stadium audiences and television viewers. Our LED screen placements include perimeter boards, giant screens, corner displays, and strategic digital signage throughout the stadium. With crystal-clear visuals and the ability to display animated content, your brand message captures attention like never before during the most exciting moments of IPL cricket.
        </p>
      </div>

      {/* 📊 STATS */}
      <div className="stats-section1">

        <h2>🏟️ LED Advertising Impact</h2>

        <div className="stats-grid1">

          <div className="stat-card1">
            <h3>4K</h3>
            <p>Ultra HD Resolution</p>
          </div>

          <div className="stat-card1">
            <h3>500M+</h3>
            <p>Total Impressions</p>
          </div>

          <div className="stat-card1">
            <h3>15 Sec</h3>
            <p>Average View Time</p>
          </div>

          <div className="stat-card1">
            <h3>100%</h3>
            <p>Visibility Guarantee</p>
          </div>

        </div>
      </div>

    <div className="services1-section1">

      {/* TOP HEADING */}
      <h2 className="services1-heading1">
        🏟️ Our LED Screen Solutions
      </h2>

      {/* CARDS */}
      <div className="services1-grid1">
        {services.map((item, index) => (
          <div className="service1-card1" key={index}>
            <h3>
              <FaStar className="star1-icon1" /> {item.title}
            </h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </div>



        <div className="services2-section1">

      {/* TOP HEADING */}
      <h2 className="services2-heading1">
        🏟️ LED Screen Advantages
      </h2>

      {/* CARDS */}
      <div className="services2-grid1">
        {services2.map((item, index) => (
          <div className="service2-card1" key={index}>
            <h3>
              <FaStar className="star1-icon2" /> {item.title}
            </h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </div>


     <div className="cta-section1">

      {/* Heading */}
      <h2>Light Up Your Brand!</h2>

      {/* Paragraph */}
      <p>
      Make your brand shine with Pooja Movie Creations' premium LED screen advertising solutions. Contact us to secure your digital advertising space!
      </p>

      {/* Buttons */}
      <div className="cta-buttons1">
        <a href="/quote" className="btn1 quote-btn1">
          Get Quote
        </a>

        <a href="tel:+918799746544" className="btn1 call-btn1">
          Call Now
        </a>
      </div>

    </div>

      

    </div>
    </>
  );
};

export default StadiumBranding;