import React from "react";
import "../Style/about.css";

const About = () => {
  return (
    <>
    <section className="about-hero">
      <div className="about-overlay">
        <div className="about-content">
          <h1>
            18+ Years of Excellence in <br />
            Ad Film Making & TV Broadcasting
          </h1>
          <p>Crafting Stories, Creating Impact</p>
        </div>
      </div>
    </section>




     <section className="about-info-section">
      <div className="about-info-container">
        
        <div className="about-left">
          <h2>About Us</h2>
          <p>
            Pooja Movie Creations is a pioneer in the world of Ad Film Making
            and TV Broadcasting.
          </p>
          <p>
            For over 18 years, we have been creating impactful advertising
            solutions that connect brands with millions of audiences.
          </p>
          <p>
            With more than 10,000 satisfied clients, 25,000 successful brand
            stories, and the trust of 900+ renowned celebrities, we have built
            a legacy of excellence.
          </p>
          <p>
            Our association with 600+ leading TV channels makes us one of
            India’s most trusted advertising and broadcasting partners.
          </p>
        </div>

        <div className="about-right">
          <h2>Our Mission</h2>
          <p>
            To create compelling stories that engage, entertain and inspire
            audiences worldwide, leaving a lasting impact through cinema.
          </p>
        </div>

      </div>
    </section>
    </>
  );
};

export default About;