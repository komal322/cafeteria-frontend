import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Main Heading */}
      <h1 className="contact-main-heading">How can we help you?</h1>

      {/* Mint Green Box */}
      <div className="contact-container">
        {/* Left Section */}
        <div className="contact-left">
          <h2 className="contact-subheading">Upgrade your cafeteria management with <b>Smart Serve</b> — your one-stop platform for
            cafeteria management, SaaS-based food solutions, and event services.</h2>
          <p className="contact-description">
            
          </p>

          <div className="contact-info">
            <h3>Write to us</h3>
            <p><strong>For Queries:</strong> support@retouchitservices.com</p>
            <p><strong>Sales:</strong> sales@retouchitservices.com</p>

            <h3>Address</h3>
            <p>
              Retouch IT Services Private Limited<br />
              Comelot Office Building, No.6, 1st main Road,<br />
              KIADB Export Promotion Industrial Area,<br />
              Whitefield,<br />
              Bangalore, Karnataka – 560066
            </p>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="contact-right">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>

            <div className="form-row">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone" />
            </div>

            <input type="text" placeholder="Company" />

            <select>
              <option>— Please choose an option —</option>
              <option>Vendor / Food Partner</option>
              <option>Corporate / Tech Park</option>
              <option>Mobile App User</option>
            </select>

            <textarea placeholder="Message" rows="4"></textarea>

            <div className="form-actions">
              <label>
                <input type="checkbox" /> I agree to the terms & conditions
              </label>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
