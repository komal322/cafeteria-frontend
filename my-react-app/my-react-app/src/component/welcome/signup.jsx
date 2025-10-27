import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./signup.css";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [location, setLocation] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [contactNumber, setContactNumber] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [message, setMessage] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // Step 1: Signup → Step 2: OTP
  const navigate = useNavigate();

  // ✅ Password strength checker
  const checkPasswordStrength = (password) => {
    if (password.length < 6) return "Weak";
    if (/[A-Z]/.test(password) && /[0-9]/.test(password) && /[@#$%^&*!]/.test(password))
      return "Strong";
    return "Medium";
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    setPasswordStrength(checkPasswordStrength(pwd));
  };

  // ✅ Step 1: Send OTP to email
  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }

    if (contactNumber.length !== 10) {
      setMessage("❌ Contact number must be exactly 10 digits");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          username,
          password,
          location,
          contactNumber: `${countryCode}${contactNumber}`,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("✅ OTP sent to your email. Please verify.");
        setStep(2); // move to OTP step
      } else {
        setMessage(data.detail || "❌ Signup failed");
      }
    } catch (error) {
      setMessage("⚠️ Server connection error");
    }
  };

  // ✅ Step 2: Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (!otp) {
      setMessage("⚠️ Please enter OTP");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("🎉 Email verified successfully! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setMessage(data.detail || "❌ Invalid or expired OTP");
      }
    } catch (error) {
      setMessage("⚠️ Server connection error");
    }
  };

  return (
    <div className="auth-container">
      {step === 1 ? (
        <>
          <h2 className="auth-title">Sign Up</h2>
          <form onSubmit={handleSignup} className="auth-form">
            <div className="form-row">
              <div>
                <label>First Name</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
              </div>
              <div>
                <label>Last Name</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} required />
              </div>
            </div>

            <div className="form-row">
              <div>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Username</label>
                <input
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter strong password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                {password && (
                  <p className={`strength ${passwordStrength.toLowerCase()}`}>
                    Strength: {passwordStrength}
                  </p>
                )}
              </div>
              <div>
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Re-enter password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="contact-field">
                <label>Contact Number</label>
                <div className="contact-input">
                  <select
                    className="country-code"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    <option value="+1">🇺🇸 +1 (US)</option>
                    <option value="+44">🇬🇧 +44 (UK)</option>
                    <option value="+61">🇦🇺 +61 (Australia)</option>
                    <option value="+91">🇮🇳 +91 (India)</option>
                    <option value="+81">🇯🇵 +81 (Japan)</option>
                    <option value="+49">🇩🇪 +49 (Germany)</option>
                    <option value="+33">🇫🇷 +33 (France)</option>
                    <option value="+971">🇦🇪 +971 (UAE)</option>
                  </select>

                  <input
                    type="tel"
                    placeholder="Enter number"
                    value={contactNumber}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "");
                      if (val.length <= 10) setContactNumber(val);
                    }}
                    maxLength="10"
                    required
                  />
                </div>
              </div>

              <div>
                <label>Location</label>
                <input
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="auth-button">
              Email verfication 
            </button>

            {message && <p className="auth-text mt-3">{message}</p>}

            <p className="auth-text">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </>
      ) : (
        <>
          <h2 className="auth-title">Verify OTP</h2>
          <form onSubmit={handleVerifyOtp} className="auth-form">
            <p className="auth-text">
              Enter the OTP sent to <strong>{email}</strong>
            </p>

            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />

            <button type="submit" className="auth-button">
              Verify OTP
            </button>

            {message && <p className="auth-text mt-3">{message}</p>}
          </form>
        </>
      )}
    </div>
  );
}

export default Signup;
