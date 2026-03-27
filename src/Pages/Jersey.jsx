import React from "react";
import "../Style/jersey.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft,FaStar } from "react-icons/fa";


const Jersey = () => {
  const navigate = useNavigate();


  const jersey3 = [
  {
    title: "Team Jersey Sponsorship",
    desc: "Complete team jersey branding with your logo prominently displayed on all players' uniforms throughout the tournament.",
  },
  {
    title: "Individual Player Branding",
    desc: "Partner with specific star players for personalized branding opportunities on jerseys, helmets, and equipment..",
  },
  {
    title: "Helmet & Equipment Branding",
    desc: "Extend your brand presence to helmets, bats, gloves, and other equipment used by players during matches.",
  },
  {
    title: "Captain's Armband Branding",
    desc: "Exclusive branding opportunity on team captain's armband, visible during toss, team discussions, and celebrations.",
  },
  {
    title: "Wicket Keeper Gear Branding",
    desc: "Special branding opportunities on wicket keeper's gloves, pads, and gear, visible in close-up shots and replays.",
  },
  {
    title: "Training Kit Sponsorship",
    desc: "Brand visibility during practice sessions, warm-ups, and training activities broadcast before matches.",
  },
];



  const jersey4 = [
  {
    title: "Continuous Visibility",
    desc: "Your brand is visible throughout the entire match duration, from first ball to last, ensuring maximum exposure time.",
  },
  {
    title: "Star Association",
    desc: "Direct association with cricket superstars and fan favorites, enhancing brand prestige and emotional connection.",
  },
  {
    title: "Close-up Coverage",
    desc: "Television cameras frequently focus on players, ensuring your brand appears in close-up shots and replays.",
  },
  {
    title: "Global Reach",
    desc: "IPL's international broadcast ensures your brand reaches cricket fans across multiple countries and demographics.",
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
        <h1>👕 IPL Players Jersey Branding</h1>

        <p className="subtitle11">
        Premium jersey sponsorship and player branding opportunities in IPL cricket
        </p>

        {/* Image */}
        <div className="jersey-image1">
          <img src="/j1.webp" alt="stadium" />
        </div>

      </div>

      {/* 📄 OVERVIEW */}
      <div className="overview-section11">
        <h2>👕 Jersey Branding Overview</h2>
        <p>
        Pooja Movie Creations offers exclusive IPL players jersey branding opportunities that place your brand directly on the cricket field with every ball bowled and every run scored. Our jersey sponsorship solutions include team jersey partnerships, individual player sponsorships, helmet branding, and equipment partnerships. With players being the center of attention throughout the match, your brand gains continuous visibility and association with cricket's biggest stars and most exciting moments.
        </p>
      </div>

      {/* 📊 STATS */}
      <div className="stats-section11">

        <h2>👕 Jersey Branding Impact</h2>

        <div className="stats-grid11">

          <div className="stat-card11">
            <h3>11</h3>
            <p>Players Per Team</p>
          </div>

          <div className="stat-card11">
            <h3>600M+</h3>
            <p>Global Viewership</p>
          </div>

          <div className="stat-card11">
            <h3>240</h3>
            <p>Minutes Per Match</p>
          </div>

          <div className="stat-card11">
            <h3>8</h3>
            <p>Teams Available</p>
          </div>

        </div>
      </div>

    <div className="jersey-section1">

      {/* TOP HEADING */}
      <h2 className="jersey-heading1">
        👕 Our Jersey Branding Services
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
       👕 Why Choose Jersey Branding?
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
      <h2>Wear Your Brand to Victory!</h2>

      {/* Paragraph */}
      <p>
     Join the champions with Pooja Movie Creations' exclusive IPL jersey branding opportunities. Contact us to secure your player partnership today!
      </p>

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

export default Jersey;