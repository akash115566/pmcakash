import React from "react";
import "../Style/terms.css";

const Terms = () => {
  return (
    <section className="terms-section">
      <div className="terms-container">

        {/* Heading */}
        <h1 className="terms-heading">
          Terms & Conditions – Pooja Movie Creations
        </h1>

        {/* Intro */}
        <p className="terms-intro">
          These Terms and Conditions (“Terms”) govern the services provided by
          Pooja Movie Creations (“Company,” “we,” “our,” “us”) to clients
          (“Client,” “you,” “your”). By engaging our services, you agree to these Terms.
        </p>

        {/* Content */}
        <div className="terms-content">

          <h3>1. Services</h3>
          <ul>
            <li>
              We provide advertising, branding, TV commercial production,
              celebrity endorsements, and related media services as agreed in
              writing with the Client.
            </li>
          </ul>

          <h3>2. Payments</h3>
          <ul>
            <li>All fees must be paid as per the agreed payment schedule.</li>
            <li>
              Delayed payments may attract interest charges at [X]% per month.
            </li>
            <li>
              Advance payments once received are strictly non-refundable if the
              Client revokes the deal or delays the project for more than 30 days.
            </li>
            <li>
              In the case of celebrity endorsements, full payment must be made
              in advance. If the deal is revoked after confirmation, the advance
              will not be refundable.
            </li>
          </ul>

          <h3>3. Client Responsibilities</h3>
          <ul>
            <li>
              The Client must provide accurate information, approvals, and content on time.
            </li>
            <li>
              Once the deal is confirmed, no changes or revisions will be entertained.
            </li>
            <li>
              Model availability depends on production timing.
            </li>
          </ul>

          <h3>4. Intellectual Property</h3>
          <ul>
            <li>
              All creative work remains Company property until full payment is made.
            </li>
            <li>
              After payment, Client gets usage rights as agreed.
            </li>
            <li>
              Company can use projects for portfolio and marketing.
            </li>
          </ul>

          <h3>5. Confidentiality</h3>
          <ul>
            <li>
              Both parties must keep business and financial information confidential.
            </li>
            <li>This continues even after termination.</li>
          </ul>

          <h3>6. Timelines and Delivery</h3>
          <ul>
            <li>Timelines will be agreed before starting work.</li>
            <li>
              Delays due to third parties or approvals are not Company’s responsibility.
            </li>
          </ul>

          <h3>7. Liability</h3>
          <ul>
            <li>
              Company is not responsible for indirect or consequential damages.
            </li>
            <li>
              Maximum liability is limited to the fees paid by the Client.
            </li>
          </ul>

          <h3>8. Termination</h3>
          <ul>
            <li>
              Either party can terminate with 30 days written notice.
            </li>
            <li>
              Client must pay for work completed till termination.
            </li>
          </ul>

          <h3>9. Governing Law</h3>
          <ul>
            <li>These Terms are governed by the laws of India.</li>
            <li>
              Disputes will be handled in the courts of your city/state.
            </li>
          </ul>

          <p className="terms-footer">
            The Company reserves the right to update or modify these Terms &
            Conditions at any time. The updated version will be published on our
            official website. The scope of work, timelines, and deliverables will
            be clearly defined in the service agreement or proposal.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Terms;