import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from "../../assets/images/logo.png";
import "./navbar.css";

const Navbar = ({ token, setToken }) => {
  const navigate = useNavigate();
  const [initials, setInitials] = useState("");

  // ✅ Fetch user initials from backend
  useEffect(() => {
    if (token) {
      fetch("http://127.0.0.1:8000/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.details) {
            const firstName = data.details.firstName || "";
            const lastName = data.details.lastName || "";
            const initialsValue =
              (firstName[0]?.toUpperCase() || "") +
              (lastName[0]?.toUpperCase() || "");
            setInitials(initialsValue);
          }
        })
        .catch(() => setInitials(""));
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-success-subtle sticky-top fw-bold">
      <div className="container-fluid">
        {/* ✅ Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid me-0 rounded"
            style={{ height: "60px", width: "auto", objectFit: "cover" }}
          />
          <span className="navbar-brand-name text-success fw-bold">
            Smart Serve
          </span>
        </Link>

        {/* ✅ Mobile Toggle */}
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

        {/* ✅ Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
                <li><a className="dropdown-item" href="#">Cafe Managed Services</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">SaaS Solution</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Event and Pop Ups</a></li>
              </ul>
            </li>
            <li className="nav-item"><a className="nav-link" href="#">Sectors</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
          </ul>

          {/* ✅ Right-side Buttons */}
          <div className="d-flex ms-5 align-items-center">
            {!token ? (
              <>
                <Link
                  to="/login"
                  className="btn btn-outline-success me-3 fw-bold text-decoration-none"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="btn btn-outline-success fw-bold text-decoration-none"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                {/* 🟢 Circular Avatar Profile */}
                <div
                  onClick={() => navigate("/profile")}
                  className="profile-avatar d-flex justify-content-center align-items-center me-3"
                  title="Go to Profile"
                >
                  {initials || "U"}
                </div>

                {/* 🔴 Logout Button */}
                <button
                  onClick={handleLogout}
                  className="btn btn-danger fw-bold text-decoration-none"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
