import React from "react";
import "../Style/privacy.css";

const Privacy = () => {
  return (
    <section className="privacy-section">
      <div className="privacy-container">

        {/* Heading */}
        <h1 className="privacy-heading">
          Privacy Policy – Pooja Movie Creations
        </h1>

        {/* Intro */}
        <p className="privacy-intro">
          Pooja Movie Creations (“Company,” “we,” “our,” or “us”) is committed to
          protecting your privacy. This Privacy Policy describes how we collect,
          use, and safeguard your personal information when you interact with us,
          whether through our website, email, phone, or in person.
        </p>

        {/* Content */}
        <div className="privacy-content">

          <h3>1. Information We Collect</h3>
          <ul>
            <li><strong>Personal Details:</strong> Name, email, phone number, company/brand details, address.</li>
            <li><strong>Project & Business Information:</strong> Advertising requirements, campaign details, contracts, and related documents.</li>
            <li><strong>Payment Information:</strong> Billing details (We do not store sensitive financial data; secure third-party providers are used).</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device type, and usage statistics.</li>
          </ul>

          <h3>2. How We Use Your Information</h3>
          <ul>
            <li>Providing and executing advertising, media, and production services.</li>
            <li>Communicating regarding contracts, billing, campaigns, and support.</li>
            <li>Improving our website, services, and client experience.</li>
            <li>Legal compliance and dispute resolution.</li>
            <li>Sending updates or promotional materials (with consent).</li>
          </ul>

          <h3>3. Sharing of Information</h3>
          <ul>
            <li>We do not sell your data.</li>
            <li>Data may be shared with trusted partners for project purposes.</li>
            <li>Shared with legal authorities if required by law.</li>
          </ul>

          <h3>4. Data Security</h3>
          <ul>
            <li>
              We use industry-standard measures to protect your data, but no system
              is 100% secure.
            </li>
          </ul>

          <h3>5. Data Retention</h3>
          <ul>
            <li>
              Data is retained only as long as necessary for business or legal purposes.
            </li>
          </ul>

          <h3>6. Your Rights</h3>
          <ul>
            <li>Access and request your data.</li>
            <li>Update or correct your information.</li>
            <li>Request deletion (as per legal rules).</li>
            <li>Withdraw marketing consent.</li>
          </ul>

          <h3>7. Cookies & Tracking</h3>
          <ul>
            <li>
              Cookies are used to improve functionality and analyze traffic.
            </li>
            <li>
              You can disable cookies in browser settings.
            </li>
          </ul>

          <h3>8. Policy Updates</h3>
          <ul>
            <li>
              Policy may be updated anytime and changes will be posted on website.
            </li>
          </ul>

          <h3>9. Contact Us</h3>
          <ul>
            <li>Pooja Movie Creations</li>
            <li>Email: info@poojamoviecreations.com</li>
            <li>Phone: 7042438293</li>
            <li>Address: Noida, Ahmedabad, Mumbai</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

export default Privacy;