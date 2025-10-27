import React from 'react'
import logo from '../../assets/images/logo.png';
import './Second.css'; // ✅ External CSS for styles
import corp1 from "../../assets/images/img1.jpg";
import corp2 from "../../assets/images/img2.jpg";
import corp3 from "../../assets/images/healthcare.jpeg";

import { MdLocalDining } from "react-icons/md";
import { RiLightbulbFlashFill } from "react-icons/ri";




const second = () => {
  return (
    <div>

      <div className="container">
        <div className="row text-center m-5 text-success fw-bold">
          <h1 >We have a <span className='text-dark'><MdLocalDining /></span> smart serve</h1>
          <h1>We have a <span className='text-dark'><RiLightbulbFlashFill />
          </span> Soultion</h1>
          <span className='text-dark'>Smart Serve caters to the cafeteria needs of companies and institutions</span>
        </div>
        <hr className="custom-line" />

        <div className="row m-5">
          <div className="col-md-4">
            <div className="card border-0">
              <div className="card-title mb-3 ">Corporates</div>
              <img
                src={corp1}
                alt="Logo"
                className="img-fluid me-0 rounded"
                style={{ height: '250px', width: 'auto', objectFit: 'cover' }}
              />
              <div className="card-title mt-3">Smart Serve enables complete transparency and oversight. Permits setting of employee-based entitlement rules for full or  part-subsidies and reimbursement </div>
              <a href="">Learn more</a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0">
              <div className="card-title mb-3">Educational Institutes</div>
              <img
                src={corp2}
                alt="Logo"
                className="img-fluid me-0 rounded"
                style={{ height: '250px', width: 'auto', objectFit: 'cover' }}
              />
              <div className="card-title mt-3">Smart Serve offers a range of cuisines and incorporates regional preferences. Options for healthy food choices </div>
              <a href="">Learn more</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0">
              <div className="card-title mb-3">Healthcare Institutions</div>
              <img
                src={corp3}
                alt="Logo"
                className="img-fluid me-0 rounded"
                style={{ height: '250px', width: 'auto', objectFit: 'cover' }}
              />
              <div className="card-title mt-3">Smart Servena caters to in-patients, outpatients, employees and visitors. Enables setting of rules for subsidized dining for employees. </div>
              <a href="">Learn more</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default second
