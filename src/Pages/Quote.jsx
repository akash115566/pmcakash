import React from "react";
import "../Style/quote.css";

const Quote = () => {
  return (
    <div className="quote-page">

      {/* TOP HEADING */}
      <h1 className="quote-main-heading">Get a Quote</h1>

      {/* FORM SECTION */}
      <div className="quote-container">

        <h2 className="quote-subheading">
          Tell Us About Your Project
        </h2>

        <form className="quote-form">

          {/* Project Type */}
          <select required>
            <option value="">Select Project Type</option>
            <option>TV Advertising</option>
            <option>Stadium Branding</option>
            <option>Digital Marketing</option>
          </select>

          {/* Budget */}
          <input type="text" placeholder="Estimated Budget (₹)" required />

          {/* Description */}
          <textarea placeholder="Tell us about your project..." rows="4"></textarea>

          {/* Name */}
          <input type="text" placeholder="Your Name" required />

          {/* Phone */}
          <input type="tel" placeholder="Your Phone" required />

          {/* Email */}
          <input type="email" placeholder="Your Email" required />

          {/* File Upload */}
          <div className="file-input">
            <label>File</label>
            <input type="file" />
          </div>

          {/* Submit */}
          <button type="submit">Submit Quote Request</button>

        </form>

      </div>

    </div>
  );
};

export default Quote;