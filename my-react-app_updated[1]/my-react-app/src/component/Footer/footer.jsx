import React from "react";
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
      className="text-muted pt-4"
      style={{
        width: "100%",
        backgroundColor: "#dff5ec", // same mint color
        position: "relative",
        left: 0,
        zIndex: 1000,
      }}
    >
      {/* Social Section */}
      <section className="d-flex justify-content-center justify-content-lg-between px-5 pb-3 border-bottom">
        <div className="me-5 d-none d-lg-block fw-semibold text-dark">
          Get connected with us:
        </div>
        <div>
          <a href="#" className="me-4 text-reset"><FaFacebookF /></a>
          <a href="#" className="me-4 text-reset"><FaTwitter /></a>
          <a href="#" className="me-4 text-reset"><FaGoogle /></a>
          <a href="#" className="me-4 text-reset"><FaInstagram /></a>
          <a href="#" className="me-4 text-reset"><FaLinkedin /></a>
          <a href="#" className="me-4 text-reset"><FaGithub /></a>
        </div>
      </section>

      {/* Horizontal Info Section */}
      <section className="pt-4 pb-3">
        <div
          className="container d-flex justify-content-between align-items-start flex-wrap"
          style={{ gap: "40px" }}
        >
          {/* Smart Serve */}
          <div className="footer-column" style={{ flex: "1" }}>
            <h6 className="fw-bold mb-3 d-flex align-items-center text-success">
              <FaGem className="me-2" /> Smart Serve
            </h6>
            <p className="small text-dark">
              Smart Serve is your one-stop platform for managed cafeteria
              services, SaaS-based food management, and event solutions.
            </p>
          </div>

          {/* Company */}
          <div className="footer-column" style={{ flex: "1" }}>
            <h6 className="fw-bold mb-3 text-success">Company</h6>
            <p><a href="#" className="text-reset text-decoration-none">About Us</a></p>
            <p><a href="#" className="text-reset text-decoration-none">Sectors</a></p>
            <p><a href="#" className="text-reset text-decoration-none">Contact</a></p>
          </div>

          {/* Services */}
          <div className="footer-column" style={{ flex: "1" }}>
            <h6 className="fw-bold mb-3 text-success">Services</h6>
            <p><a href="#" className="text-reset text-decoration-none">Cafeteria Managed</a></p>
            <p><a href="#" className="text-reset text-decoration-none">SaaS Solution</a></p>
            <p><a href="#" className="text-reset text-decoration-none">Events & Pop-ups</a></p>
          </div>

          {/* Contact */}
          <div className="footer-column" style={{ flex: "1" }}>
            <h6 className="fw-bold mb-3 text-success">Contact</h6>
            <p className="mb-2"><FaHome className="me-2 text-success" /> RETOUCH IT SERVICES</p>
            <p className="mb-2"><FaEnvelope className="me-2 text-success" /> retouch@example.com</p>
            <p className="mb-0"><FaPhone className="me-2 text-success" /> +91-1111111111</p>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div
        className="text-center p-3 text-white fw-semibold"
        style={{
          backgroundColor: "#0c8346", // dark green
        }}
      >
        © {new Date().getFullYear()} Smart Serve | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
