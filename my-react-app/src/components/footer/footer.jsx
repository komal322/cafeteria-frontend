import React from "react";
import "./footer.css";
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
      className="bg-success-subtle text-muted pt-4"
      style={{
        width: "100%",
        position: "relative", // not fixed
        bottom: 0,
        left: 0,
        marginTop: "auto", // ensures footer stays at bottom if page content is short
      }}
    >
      {/* Social Section */}
      <section className="footer-top bg-success d-flex justify-content-center justify-content-lg-between  px-5 pb-3 border-bottom">
        <div className="me-5 d-none d-lg-block " >
          <span className="fw-semibold">Get connected with us:</span>
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

      {/* Info Section */}
      <section className="pt-4 pb-3">
        <div className="container text-center text-md-start">
          <div className="row mt-3">
            {/* Smart Serve */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="fw-bold mb-3 d-flex align-items-center">
                <FaGem className="me-2 text-secondary" /> Smart Serve
              </h6>
              <p className="small">
                Smart Serve is your one-stop solution for all your food and beverage needs.
              </p>
            </div>

            {/* Company */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="fw-bold mb-3">Company</h6>
              <p><a href="#" className="text-reset text-decoration-none">About Us</a></p>
              <p><a href="#" className="text-reset text-decoration-none">Our Services</a></p>
              <p><a href="#" className="text-reset text-decoration-none">Sectors</a></p>
            </div>

            {/* Services */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="fw-bold mb-3">Services</h6>
              <p><a href="#" className="text-reset text-decoration-none">Cafeteria Managed</a></p>
              <p><a href="#" className="text-reset text-decoration-none">SaaS Solution</a></p>
              <p><a href="#" className="text-reset text-decoration-none">Events & Pop-ups</a></p>
            </div>

            {/* Contact */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="fw-bold mb-3">Contact</h6>
              <p className="mb-2"><FaHome className="me-2" /> RETOUCH IT SERVICES</p>
              <p className="mb-2"><FaEnvelope className="me-2" /> retouch@example.com</p>
              <p className="mb-0"><FaPhone className="me-2" /> +91-1111111111</p>
            </div>
          </div>
        </div>
      </section>

      {/* Small line at bottom */}
      <div
        className="text-center py-2"
        style={{
          backgroundColor: "#198754",
          color: "white",
          fontSize: "0.9rem",
        }}
      >
        © 2025 Smart Serve | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

