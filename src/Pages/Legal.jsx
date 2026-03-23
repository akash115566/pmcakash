import React from "react";
import "../Style/legal.css";

const Legal = () => {
  return (
    <section className="legal-section">
      <div className="legal-container">

        {/* Heading */}
        <h1 className="legal-heading">
          Legal Notice – Pooja Movie Creations
        </h1>

        {/* Intro */}
        <p className="legal-intro">
          This Legal Notice governs the use of this website and any communication
          with Pooja Movie Creations (“Company,” “we,” “our,” or “us”). By using
          this website, you agree to the terms stated in this notice.
        </p>

        {/* Content */}
        <div className="legal-content">

          <h3>1. Ownership</h3>
          <p>
            The content, design, graphics, and all materials on this website are
            owned by Pooja Movie Creations. Any unauthorized use, reproduction,
            or distribution is strictly prohibited.
          </p>

          <h3>2. Intellectual Property</h3>
          <p>
            All intellectual property rights, including trademarks, logos, and
            copyrighted content, belong to Pooja Movie Creations unless otherwise
            stated. No part of this website may be copied, modified, or used for
            commercial purposes without written permission.
          </p>

          <h3>3. Limitation of Liability</h3>
          <p>
            We do not guarantee the accuracy or completeness of the information
            provided on this website. Pooja Movie Creations shall not be liable
            for any damages arising from the use or inability to use this website.
          </p>

          <h3>4. External Links</h3>
          <p>
            This website may contain links to external websites. We are not
            responsible for the content, privacy policies, or practices of
            third-party sites.
          </p>

          <h3>5. Governing Law</h3>
          <p>
            This Legal Notice is governed by the laws of India. Any disputes shall
            be subject to the exclusive jurisdiction of the courts at
            [Your City/State].
          </p>

          <h3>6. Contact Information</h3>
          <ul>
            <li>Email: info@poojamoviecreations.com</li>
            <li>Phone: 7042438293</li>
            <li>Address: Noida, Ahmedabad, Mumbai</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default Legal;