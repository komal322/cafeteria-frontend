import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import Navbar from "./component/Navbar/navbar.jsx";
import Second from "./component/Secondservice/second.jsx";
import Welcome from "./component/welcome/welcome.jsx";
import Login from "./component/welcome/login.jsx";
import Signup from "./component/welcome/signup.jsx";
import Footer from "./component/Footer/footer.jsx";
import Profile from "./component/welcome/profile.jsx";
import CustomCarousel from "./component/Carousel/carousel.jsx"; // ✅ Carousel
import VerifyOTP from "./component/welcome/verifyOTP.jsx";


// ✅ Wrapper for routes and token handling
function AppContent() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  // ✅ Save or clear token in localStorage
  useEffect(() => {
    if (token) localStorage.setItem("token", token);
    else localStorage.removeItem("token");
  }, [token]);

  // ✅ Validate JWT token expiry
  useEffect(() => {
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        const expiry = payload.exp * 1000;

        if (Date.now() > expiry) {
          alert("Session expired. Please log in again.");
          localStorage.removeItem("token");
          setToken(null);
          navigate("/login");
        }
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("token");
        setToken(null);
        navigate("/login");
      }
    }
  }, [token, navigate]);

  // ✅ Protected Route component
  const ProtectedRoute = ({ element }) => {
    return token ? element : <Navigate to="/login" replace />;
  };

  return (
    <>
      {/* ✅ Navbar visible on all pages */}
      <Navbar token={token} setToken={setToken} />

      <div className="container-fluid p-0">
        <Routes>
          {/* ✅ Home Page */}
          <Route
            path="/"
            element={
              <>
                <CustomCarousel />
                <Welcome token={token} />
              </>
            }
          />

          {/* ✅ Other Pages */}
          <Route path="/services" element={<Second />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />

          {/* ✅ Profile (Protected) */}
          <Route
            path="/profile"
            element={<ProtectedRoute element={<Profile />} />}
          />

          {/* ✅ Welcome (optional public route) */}
          <Route
            path="/welcome"
            element={
              <>
                <CustomCarousel />
                <Welcome token={token} />
              </>
            }
          />

          {/* ✅ Redirect any unknown route to Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      {/* ✅ Footer visible everywhere */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
