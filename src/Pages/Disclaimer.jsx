import React from "react";
import "../Style/disclaimer.css";

const Disclaimer = () => {
  return (
    <section className="disclaimer-section">
      <div className="disclaimer-container">

        {/* Heading */}
        <h1 className="disclaimer-heading">
          Disclaimer – Pooja Movie Creations
        </h1>

        {/* Intro */}
        <p className="disclaimer-intro">
          The information provided on this website is for general informational
          purposes only. While we strive to keep the information accurate and
          up-to-date, Pooja Movie Creations makes no representations or warranties
          of any kind, express or implied, about the completeness, accuracy,
          reliability, suitability, or availability of the website or the
          information contained on it.
        </p>

        {/* Content */}
        <div className="disclaimer-content">

          <h3>1. Limitation of Liability</h3>
          <ul>
            <li>
              Pooja Movie Creations shall not be held liable for any direct,
              indirect, incidental, consequential, or special damages arising
              from the use of this website or reliance on any information provided.
            </li>
          </ul>

          <h3>2. External Links</h3>
          <ul>
            <li>
              This website may contain links to external websites. Pooja Movie
              Creations is not responsible for the content or practices of
              these third-party sites.
            </li>
          </ul>

          <h3>3. Professional Advice</h3>
          <ul>
            <li>
              Any content, materials, or information on this site is not intended
              as professional advice. Clients should seek independent professional
              consultation for specific needs.
            </li>
          </ul>

          <h3>4. Changes to Disclaimer</h3>
          <ul>
            <li>
              Pooja Movie Creations reserves the right to modify this Disclaimer
              at any time. Updates will be reflected on this page.
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default Disclaimer;