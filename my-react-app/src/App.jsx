import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Core Components
import Navbar from "./component/Navbar/Navbar.jsx";
import Footer from "./component/Footer/Footer.jsx";

// Home Page Sections
import Welcome from "./component/Welcome/Welcome.jsx";
import Second from "./component/Secondservice/Second.jsx";

// Auth Pages
import Login from "./component/Login/Login.jsx";
import Signup from "./component/Signup/Signup.jsx";

// Additional Pages
import Contact from "./component/Header/Pages/Contact.jsx";
import Sectors from "./component/Header/Pages/Sectors.jsx";

function App() {
  return (
    <Router>
      {/* Use flex layout to make footer always at bottom */}
      <div className="d-flex flex-column min-vh-100">
        
        {/* Navbar visible on all pages */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow-1">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Welcome />
                  <Second />
                </>
              }
            />

            {/* Auth Pages */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Other Pages */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/sectors" element={<Sectors />} />
          </Routes>
        </main>

        {/* Footer visible on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
