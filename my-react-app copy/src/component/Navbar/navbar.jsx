import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../../assets/images/logo.png';
import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success-subtle sticky-top fw-bold">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid me-0 rounded"
            style={{ height: '60px', width: 'auto', objectFit: 'cover' }}
          />
          <span className="navbar-brand-name text-success fw-bold">Smart Serve</span>
        </a>
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
            <li className="nav-item">
              <a className="nav-link" href="#">Sectors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>

          <form className="d-flex ms-5 " role="search">

            <button className="btn btn-outline-success me-3 fw-bold" type="submit"> Login</button>
            <button className="btn btn-outline-success fw-bold" type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
