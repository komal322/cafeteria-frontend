import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("⚠️ You are not logged in.");
      return;
    }

    fetch("http://127.0.0.1:8000/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.detail || data.message?.includes("Invalid")) {
          setError("❌ Invalid or expired token.");
        } else if (data.verified === false) {
          alert("⚠️ Please verify your email first.");
          navigate("/verify-otp"); // redirect to OTP verification page
        } else {
          setUser(data);
        }
      })
      .catch(() => setError("⚠️ Server error. Please try again later."));
  }, [navigate]);

  if (error) {
    return (
      <div className="profile-error">
        <h2>{error}</h2>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="profile-loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  // ✅ Extract user details safely
  const details = user.details || {};
  const email = user.email || details.email || "Not provided";
  const firstName = details.firstName || "";
  const lastName = details.lastName || "";
  const username = details.username || "N/A";
  const fullName = `${firstName} ${lastName}`.trim();
  const location = details.location || "N/A";
  const contact = details.contactNumber || "N/A";

  return (
    <div className="profile-container">
      <h2 className="profile-welcome">Welcome {firstName || "User"}!</h2>

      <div className="profile-card">
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Username:</strong> {username}
        </p>
        <p>
          <strong>Full Name:</strong> {fullName}
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Contact:</strong> {contact}
        </p>
      </div>
    </div>
  );
}

export default Profile;
