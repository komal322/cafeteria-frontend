import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGem,
  FaHome,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer
      className="text-white pt-4"
      style={{
        width: "100%",
        backgroundColor: "#dff5ec", // ✅ full mint green background
        position: "relative",
        left: 0,
        zIndex: 1000,
      }}
    >
      {/* Social Section */}
      <section className="d-flex justify-content-center justify-content-lg-between px-5 pb-3 border-bottom border-light">
        <div className="me-5 d-none d-lg-block fw-semibold text-dark">
          Get connected with us:
        </div>
        <div>
          <a href="#" className="me-4 text-dark"><FaFacebookF /></a>
          <a href="#" className="me-4 text-dark"><FaTwitter /></a>
          <a href="#" className="me-4 text-dark"><FaGoogle /></a>
          <a href="#" className="me-4 text-dark"><FaInstagram /></a>
          <a href="#" className="me-4 text-dark"><FaLinkedin /></a>
          <a href="#" className="me-4 text-dark"><FaGithub /></a>
        </div>
      </section>

      {/* Info Section (Horizontal layout) */}
      <section className="pt-4 pb-3">
        <div
          className="container d-flex justify-content-between align-items-start flex-wrap"
          style={{ gap: "40px" }}
        >
          {/* Smart Serve */}
          <div className="footer-column" style={{ flex: "1" }}>
            <h6 className="fw-bold mb-3 d-flex align-items-center text-dark">
              <FaGem className="me-2" /> Smart Serve
            </h6>
            <p className="small text-dark">
              Smart Serve is your one-stop platform for managed cafeteria
              services, SaaS-based food management, and event solutions.
            </p>
          </div>

          {/* Company */}
          <div className="footer-column" style={{ flex: "1" }}>
            <h6 className="fw-bold mb-3 text-dark">Company</h6>
            <p>
              <Link to="/" className="text-dark text-decoration-none">
                About Us
              </Link>
            </p>
            <p>
              <Link to="/sectors" className="text-dark text-decoration-none">
                Sectors
              </Link>
            </p>
            <p>
              <Link to="/contact" className="text-dark text-decoration-none">
                Contact
              </Link>
            </p>
          </div>

          {/* Services */}
          <div className="footer-column" style={{ flex: "1" }}>
            <h6 className="fw-bold mb-3 text-dark">Services</h6>
            <p>
              <Link to="#" className="text-dark text-decoration-none">
                Cafeteria Managed
              </Link>
            </p>
            <p>
              <Link to="#" className="text-dark text-decoration-none">
                SaaS Solution
              </Link>
            </p>
            <p>
              <Link to="#" className="text-dark text-decoration-none">
                Events & Pop-ups
              </Link>
            </p>
          </div>

          {/* Contact */}
          <div className="footer-column" style={{ flex: "1" }}>
            <h6 className="fw-bold mb-3 text-dark">Contact</h6>
            <p className="mb-2 text-dark">
              <FaHome className="me-2" /> RETOUCH IT SERVICES
            </p>
            <p className="mb-2 text-dark">
              <FaEnvelope className="me-2" /> retouch@example.com
            </p>
            <p className="mb-0 text-dark">
              <FaPhone className="me-2" /> +91-1111111111
            </p>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div
        className="text-center p-3 fw-semibold"
        style={{
          backgroundColor: "#156846", // darker green strip at bottom
          color: "white",
        }}
      >
        © {new Date().getFullYear()} Smart Serve | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
