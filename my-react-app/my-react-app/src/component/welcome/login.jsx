import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css"; // ✅ shared CSS for auth pages

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        if (data.verified === false) {
          setMessage("⚠️ Please verify your email before logging in!");
          return;
        }

        if (data.access_token) {
          localStorage.setItem("token", data.access_token);
          setToken(data.access_token);
          alert("✅ Login successful!");
          navigate("/welcome");
        } else {
          setMessage("❌ Invalid login credentials");
        }
      } else {
        setMessage(data.detail || "❌ Login failed");
      }
    } catch (err) {
      setMessage("⚠️ Unable to connect to server");
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>

      <form onSubmit={handleLogin} className="auth-form">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="auth-button">
          Login
        </button>

        {message && <p className="auth-text mt-3">{message}</p>}

        <p className="auth-text">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
