import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from "../../assets/images/logo.png";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/signup");

  return (
    <nav className="navbar navbar-expand-lg bg-success-subtle sticky-top fw-bold">
      <div className="container-fluid">
        {/* Brand / Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid me-0 rounded"
            style={{ height: "60px", width: "auto", objectFit: "cover" }}
          />
          <span className="navbar-brand-name text-success fw-bold ms-2">
            Smart Serve
          </span>
        </Link>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Dropdown - Services */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/services/cafe">
                    Cafe Managed Services
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item" to="/services/saas">
                    SaaS Solution
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item" to="/services/events">
                    Event & Pop Ups
                  </Link>
                </li>
              </ul>
            </li>

            {/* Other Links */}
            <li className="nav-item">
              <Link className="nav-link" to="/sectors">
                Sectors
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* Login & Signup Buttons */}
          <div className="d-flex ms-5">
            <button
              className="btn btn-outline-success me-3 fw-bold"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="btn btn-success fw-bold text-white"
              type="button"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
