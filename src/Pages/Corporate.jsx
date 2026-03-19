import React from "react";
import "../Style/corporate.css";
import {
  FaStar,
  FaVideo,
  FaComments,
  FaIndustry,
  FaTrophy,
  FaChartLine,
  FaBuilding,
  FaBullhorn,
  FaFilm
} from "react-icons/fa";

const data = [
  {
    icon: <FaStar />,
    title: "Brand Success Story",
    text: "Showcasing achievements and success stories that define your brand’s journey."
  },
  {
    icon: <FaVideo />,
    title: "Completed Brand Shoots",
    text: "High-quality production covering product launches and campaigns."
  },
  {
    icon: <FaComments />,
    title: "Client Testimonials",
    text: "Powerful testimonial films that build trust with real client experiences."
  },
  {
    icon: <FaIndustry />,
    title: "Factory Complete Shoot",
    text: "Capturing production processes and infrastructure for professional presentation."
  },
  {
    icon: <FaTrophy />,
    title: "Company Milestones",
    text: "Documenting major achievements and turning points in your brand’s history."
  },
  {
    icon: <FaChartLine />,
    title: "Company Turnover",
    text: "Presenting growth, revenue highlights, and business scale effectively."
  },
  {
    icon: <FaBuilding />,
    title: "Company Overview",
    text: "A complete walkthrough of your company’s culture, values, and future goals."
  },
  {
    icon: <FaBullhorn />,
    title: "Radio & Logo Updates",
    text: "Professional voiceovers, radio updates, and logo-based corporate content."
  },
  {
    icon: <FaFilm />,
    title: "Corporate Film & Brand Storytelling Advertising",
    text: "We create high-impact corporate films that go beyond simple visuals — delivering."
  }
];

function Corporate() {
  return (
    <div>

      {/* Banner Section */}
      <section className="banner">
        <div className="overlay">
          <h1>Corporate Film Production</h1>
          <p>Delivering High-Impact Corporate Films to Amplify Your Brand</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Corporate Film Production</h2>
        <p>
          Pooja Movie Creations offers complete corporate film production services to help brands showcase their journey, success, and vision. From brand storytelling to milestone films, we deliver impactful content that resonates with employees, stakeholders, and customers.
        </p>
      </section>

      {/* Highlights */}
      <section className="highlights">
        <h2>Corporate Film Highlights</h2>

        <div className="card-container">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Corporate;