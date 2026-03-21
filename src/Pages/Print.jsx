import React from "react";
import "../Style/print.css";

const cards = [
  {
    img: "/pr1.webp",
    title: "Creative Designs",
    desc: "High-quality and eye-catching print layouts for maximum impact.",
  },
  {
    img:  "/pr2.webp",
    title: "Wide Distribution",
    desc: "We place ads in leading newspapers, magazines, and publications.",
  },
  {
    img:  "/pr3.webp",
    title: "Targeted Audience",
    desc: "Reach the right audience with precise targeting and placements.",
  },
  {
    img:  "/pr4.webp",
    title: "End-to-End Service",
    desc: "From concept creation to printing and distribution, we manage everything.",
  },
  {
    img:  "/pr5.webp",
    title: "Brand Visibility",
    desc: "Boost your brand recognition with professional print campaigns.",
  },
  {
    img:  "/pr6.webp",
    title: "Quality Assurance",
    desc: "Ensuring top-quality print production and timely delivery.",
  },
];

const Print = () => {
  return (
    <div className="print-page">

      {/* 🔥 Banner Section */}
      <section className="print-banner">
        <div className="overlay">
          <h1>Print Advertising</h1>
          <p>Effective Print Campaigns to Amplify Your Brand Reach</p>
        </div>
      </section>

      {/* 🔥 About Section */}
      <section className="print-about">
        <h2>About Print Advertising</h2>
        <p>
          Pooja Movie Creations provides comprehensive print advertising solutions 
          including newspapers, magazines, brochures, and flyers. Our creative 
          designs, precise targeting, and impactful layouts ensure maximum reach 
          and brand recognition. We deliver high-quality campaigns that communicate 
          your brand message effectively to the intended audience.
        </p>
      </section>

      {/* 🔥 Cards Section */}
      <section className="print-cards">
        {cards.map((item, index) => (
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

export default Print;