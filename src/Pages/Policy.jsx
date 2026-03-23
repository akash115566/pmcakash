import React from "react";
import "../Style/Policy.css";

const Policy = () => {
  return (
    <section className="policy-section">
      <div className="policy-container">

        {/* Heading */}
        <h1 className="policy-heading">
          Cookie Policy – Pooja Movie Creations
        </h1>

        {/* Intro */}
        <p className="policy-intro">
          Pooja Movie Creations (“Company,” “we,” “our,” or “us”) uses cookies
          and similar technologies to enhance user experience, analyze traffic,
          and personalize content on our website. By using our website, you
          consent to the use of cookies as described in this policy.
        </p>

        {/* Content */}
        <div className="policy-content">

          <h3>1. What Are Cookies?</h3>
          <p>
            Cookies are small text files stored on your device when you visit our
            website. They help us remember your preferences, improve functionality,
            and provide relevant content or advertising.
          </p>

          <h3>2. Types of Cookies We Use</h3>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for proper website functionality (login, security).</li>
            <li><strong>Analytics Cookies:</strong> To understand visitor behavior and improve services.</li>
            <li><strong>Advertising Cookies:</strong> To deliver relevant ads and measure campaign performance.</li>
            <li><strong>Preference Cookies:</strong> To remember settings like language or region.</li>
          </ul>

          <h3>3. Managing Cookies</h3>
          <p>
            You can manage or disable cookies through your browser settings.
            However, some features of our website may not function properly without cookies.
          </p>

          <h3>4. Third-Party Cookies</h3>
          <p>
            We may allow trusted third parties such as advertising partners or
            analytics providers to place cookies on your device to help deliver ads,
            track performance, and improve user experience.
          </p>

          <h3>5. Policy Updates</h3>
          <p>
            This Cookie Policy may be updated from time to time. Any changes will
            be posted on this page with the revised effective date.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Policy;