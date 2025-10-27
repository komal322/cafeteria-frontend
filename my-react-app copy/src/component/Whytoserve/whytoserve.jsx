import React from 'react';
import { MdMobileFriendly, MdTrendingUp, MdDesignServices, MdAssessment, MdPeopleAlt, MdSmartphone, MdSecurity } from "react-icons/md";
import { FaRobot } from "react-icons/fa6";
import { GiShield } from "react-icons/gi";
import 'bootstrap/dist/css/bootstrap.min.css';

const Whytoserve = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 fw-bold text-success">Why Smart Serve</h1>
      <div className="row g-4">
        <div className="col-md-4 ">
          <div className="p-4 bg-light rounded shadow-sm h-100 d-flex flex-column justify-content-center bg-success-subtle">
            <h4 className="d-flex align-items-center mb-3 text-light-green">
              <MdTrendingUp className="me-3 text-primary fs-3" /> Leading Digital Cafeteria Service in India
            </h4>
            <h4 className="d-flex align-items-center mb-3">
              <MdPeopleAlt className="me-3 text-primary fs-3" /> Right Partner Mapping with effective food program
            </h4>
            <h4 className="d-flex align-items-center">
              <MdSmartphone className="me-3 text-primary fs-3" /> Intuitive App User Interface & Experience
            </h4>
          </div>
        </div>

        <div className="col-md-4 ">
          <div className="p-4 bg-light rounded shadow-sm h-100 d-flex flex-column justify-content-center bg-success-subtle">
            <h4 className="d-flex align-items-center mb-3">
              <MdDesignServices className="me-3 text-primary fs-3" /> Customisable and Tailor-Made Solutions
            </h4>
            <h4 className="d-flex align-items-center mb-3">
              <FaRobot className="me-3 text-primary fs-3" /> AI-Based Prediction of Food Consumption
            </h4>
            <h4 className="d-flex align-items-center">
              <MdSecurity className="me-3 text-primary fs-3" /> Best-in-class App Security Features
            </h4>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 bg-light rounded shadow-sm h-100 d-flex flex-column justify-content-center bg-success-subtle">
            <h4 className="d-flex align-items-center mb-3">
              <MdMobileFriendly className="me-3 text-primary fs-3" /> Secure Digital Payments, Real-Time Feedback
            </h4>
            <h4 className="d-flex align-items-center mb-3">
              <MdAssessment className="me-3 text-primary fs-3" /> Vendor Compliance Visibility for Audit Purposes
            </h4>
            <h4 className="d-flex align-items-center">
              <GiShield className="me-3 text-primary fs-3" /> Industry-leading HSEQ compliance and management
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whytoserve;
