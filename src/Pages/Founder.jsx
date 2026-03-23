import React from "react";
import "../Style/founder.css";


const Founder = () => {
  return (
    <section className="founder-section">
      <div className="founder-container">

        {/* Heading */}
        <h1 className="founder-heading">Founder's Message</h1>

        {/* Content */}
        <div className="founder-content">

          {/* Left Image */}
          <div className="founder-img">
            <img src="/f1.webp" alt="Founder" />
          </div>

          {/* Right Text */}
          <div className="founder-text">
            <h2>Message from the Founder</h2>

            <p>
              Welcome to Pooja Movie Creations! Our journey began with a vision
              to create compelling stories, impactful advertising campaigns, and
              cinematic experiences that resonate with audiences globally. We
              believe in innovation, creativity, and integrity in every project
              we undertake.
            </p>

            <p>
              Our mission is to empower brands, entertain viewers, and make a
              lasting impact through quality production and media services. With
              a dedicated team of professionals, we ensure that every project is
              handled with care, passion, and precision.
            </p>

            <p>
              Thank you for trusting Pooja Movie Creations. We look forward to
              bringing your ideas to life and creating stories that inspire.
            </p>

            <h4>- Founder, Pooja Movie Creations</h4>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;