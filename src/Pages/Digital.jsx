import React from "react";
import "../Style/digital.css";

const cardss = [
  {
    img: "/d1.webp",
    title: "Dynamic Content",
    desc: "Engaging visuals and animations to attract attention.",
  },
  {
    img:  "/d2.webp",
    title: "Wide Reach",
    desc: "Digital screens in high-footfall areas for maximum exposure.",
  },
  {
    img:  "/d3.webp",
    title: "Precise Targeting",
    desc: "Display campaigns based on audience demographics and location.",
  },
  {
    img:  "/d4.webp",
    title: "High Impact",
    desc: "Captivate viewers with high-resolution visuals and motion graphics.",
  },
  {
    img:  "/d5.webp",
    title: "Campaign Management",
    desc: "End-to-end support from concept to execution and reporting.",
  },
  {
    img:  "/d6.webp",
    title: "Measurable Results",
    desc: "Track engagement and ROI with our digital analytics.",
  },
];

const Digital = () => {
  return (
    <div className="digi-page">

      {/* 🔥 Banner Section */}
      <section className="digi-banner">
        <div className="overlay">
          <h1>Digital Live Screen Advertising</h1>
          <p>Engaging Audiences with Dynamic Digital Screens</p>
        </div>
      </section>

      {/* 🔥 About Section */}
      <section className="digi-about">
        <h2>About Digital Live Screen Advertising</h2>
        <p>
   Pooja Movie Creations specializes in high-impact digital live screen 
   advertising across malls, airports, metros, and public spaces. Our team ensures
    creative content, precise placement, and dynamic display strategies that 
    capture the audience’s attention, enhance brand visibility, and deliver
     measurable results.
        </p>
      </section>

      {/* 🔥 Cards Section */}
      <section className="digi-cards">
        {cardss.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

    </div>
  );
};

export default Digital;