import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"; // ✅ reuse same styles from login/signup

function VerifyOTP() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // ✅ Verify OTP Function
  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:8000/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }), // ✅ combined code here
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ OTP verified successfully! Please login.");
        navigate("/login");
      } else {
        setMessage(data.detail || "❌ Invalid or expired OTP");
      }
    } catch (error) {
      setMessage("⚠️ Server connection error");
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Verify OTP</h2>

      <form onSubmit={handleVerify} className="auth-form">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>OTP</label>
        <input
          type="text"
          placeholder="Enter OTP sent to email"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />

        <button type="submit" className="auth-button">
          Verify
        </button>

        {message && <p className="auth-text mt-3">{message}</p>}
      </form>
    </div>
  );
}

export default VerifyOTP;
