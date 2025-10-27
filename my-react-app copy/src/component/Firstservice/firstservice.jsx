import React from "react";
import orderImage from "../../assets/images/order.jpg";

// Import Google Font in your main index.html or via CSS
//<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">

const firstservice = () => {
  return (
    <div className="container-fluid py-5" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Section Heading */}
      <h2
        className="text-center mb-5"
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          color: "green",
          fontFamily: "'Playfair Display', serif"
        }}
      >
        Our Services Keep Things Cooking Well
      </h2>

      {/* --------- First Service --------- */}
      <div className="row align-items-center mb-5">
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <div style={{
            position: "relative",
            width: "100%",
            maxWidth: "300px",
            margin: "0 auto",
            borderRadius: "20px",
            overflow: "hidden"
          }}>
            <svg
              viewBox="0 0 300 300"
              style={{ width: "100%", height: "300px", display: "block" }}
            >
              <defs>
                <clipPath id="waveClip1">
                  <path d="M0,30 Q75,0 150,30 T300,30 V300 H0 Z" />
                </clipPath>
              </defs>
              <rect width="100%" height="100%" fill="black" />
              <image
                href={orderImage}
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#waveClip1)"
              />
            </svg>
          </div>
          <p className="mt-2 fst-italic text-black" style={{ fontSize: "1.3rem", fontWeight: "500" }}>
            Contactless Ordering
          </p>
        </div>

        <div className="col-md-8">
          <h4
            className="mb-4 text-center text-md-start"
            style={{ fontSize: "2rem", fontWeight: "600", color: "#333" }}
          >
            Streamline Office Cafeteria Management with SaaS
          </h4>

          <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-5">
            <div className="text-center text-md-start" style={{ maxWidth: "300px" }}>
              <div className="fs-2 text-success mb-2" role="img" aria-label="clock" style={{ fontSize: "3rem" }}>
                ⏰
              </div>
              <p className="mb-0" style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
                Real-time tracking, inventory management, and streamlined billing processes.
              </p>
            </div>

            <div className="text-center text-md-start" style={{ maxWidth: "300px" }}>
              <div className="fs-2 text-success mb-2" role="img" aria-label="dashboard" style={{ fontSize: "3rem" }}>
                🗂️
              </div>
              <p className="mb-0" style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
                Digitized admin dashboard facilitates monitoring of feedback, compliance documents, and cafeteria checklists.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --------- Second Service --------- */}
      <div className="row align-items-center mb-5">
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <div style={{
            position: "relative",
            width: "100%",
            maxWidth: "300px",
            margin: "0 auto",
            borderRadius: "20px",
            overflow: "hidden"
          }}>
            <svg
              viewBox="0 0 300 300"
              style={{ width: "100%", height: "300px", display: "block" }}
            >
              <defs>
                <clipPath id="waveClip2">
                  <path d="M0,30 Q75,0 150,30 T300,30 V300 H0 Z" />
                </clipPath>
              </defs>
              <rect width="100%" height="100%" fill="black" />
              <image
                href={orderImage}
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#waveClip2)"
              />
            </svg>
          </div>
          <p className="mt-2 fst-italic text-black" style={{ fontSize: "1.3rem", fontWeight: "500" }}>
            Contactless Ordering
          </p>
        </div>

        <div className="col-md-8">
          <h4
            className="mb-4 text-center text-md-start"
            style={{ fontSize: "2rem", fontWeight: "600", color: "#333" }}
          >
            Streamline Office Cafeteria Management with SaaS
          </h4>

          <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-5">
            <div className="text-center text-md-start" style={{ maxWidth: "300px" }}>
              <div className="fs-2 text-success mb-2" role="img" aria-label="clock" style={{ fontSize: "3rem" }}>
                ⏰
              </div>
              <p className="mb-0" style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
                Real-time tracking, inventory management, and streamlined billing processes.
              </p>
            </div>

            <div className="text-center text-md-start" style={{ maxWidth: "300px" }}>
              <div className="fs-2 text-success mb-2" role="img" aria-label="dashboard" style={{ fontSize: "3rem" }}>
                🗂️
              </div>
              <p className="mb-0" style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
                Digitized admin dashboard facilitates monitoring of feedback, compliance documents, and cafeteria checklists.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --------- Third Service --------- */}
      <div className="row align-items-center mb-5">
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <div style={{
            position: "relative",
            width: "100%",
            maxWidth: "300px",
            margin: "0 auto",
            borderRadius: "20px",
            overflow: "hidden"
          }}>
            <svg
              viewBox="0 0 300 300"
              style={{ width: "100%", height: "300px", display: "block" }}
            >
              <defs>
                <clipPath id="waveClip3">
                  <path d="M0,30 Q75,0 150,30 T300,30 V300 H0 Z" />
                </clipPath>
              </defs>
              <rect width="100%" height="100%" fill="black" />
              <image
                href={orderImage}
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#waveClip3)"
              />
            </svg>
          </div>
          <p className="mt-2 fst-italic text-black" style={{ fontSize: "1.3rem", fontWeight: "500" }}>
            Contactless Ordering
          </p>
        </div>

        <div className="col-md-8">
          <h4
            className="mb-4 text-center text-md-start"
            style={{ fontSize: "2rem", fontWeight: "600", color: "#333" }}
          >
            Streamline Office Cafeteria Management with SaaS
          </h4>

          <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-5">
            <div className="text-center text-md-start" style={{ maxWidth: "300px" }}>
              <div className="fs-2 text-success mb-2" role="img" aria-label="clock" style={{ fontSize: "3rem" }}>
                ⏰
              </div>
              <p className="mb-0" style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
                Real-time tracking, inventory management, and streamlined billing processes.
              </p>
            </div>

            <div className="text-center text-md-start" style={{ maxWidth: "300px" }}>
              <div className="fs-2 text-success mb-2" role="img" aria-label="dashboard" style={{ fontSize: "3rem" }}>
                🗂️
              </div>
              <p className="mb-0" style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
                Digitized admin dashboard facilitates monitoring of feedback, compliance documents, and cafeteria checklists.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Center Button */}
      <div className="text-center">
        <form role="search" className="d-inline-block">
          <button className="btn btn-outline-success btn-lg fw-bold rounded shadow" type="submit">Get in Touch</button>
        </form>
      </div>

        <hr className="custom-line" />

    </div>
  );
};

export default firstservice;