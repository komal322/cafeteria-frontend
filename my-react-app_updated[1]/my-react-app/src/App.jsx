import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🧩 Core Components
import Navbar from "./component/Navbar/Navbar.jsx";
import Footer from "./component/Footer/footer.jsx"; // ✅ lowercase file

// 🏠 Home Page Sections
import Welcome from "./component/welcome/welcome.jsx"; // ✅ lowercase folder
import Second from "./component/Secondservice/Second.jsx";

// 🔐 Auth Pages
import Login from "./component/Login/Login.jsx";
import Signup from "./component/Signup/Signup.jsx";

// 📄 Additional Pages
import Contact from "./component/Header/Pages/Contact.jsx";
import Sectors from "./component/Header/Pages/Sectors.jsx";

// ☕ Cafe Management Pages
import CafeCustomer from "./component/cafe/CafeCustomer.jsx";
import CafeAdmin from "./component/cafe/CafeAdmin.jsx";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        {/* Navbar stays on all pages */}
        <Navbar />

        {/* Page Routes */}
        <Routes>
          {/* Home page */}
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

          {/* Additional Pages */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/sectors" element={<Sectors />} />

          {/* ☕ Cafe Management Pages */}
          <Route path="/cafe" element={<CafeCustomer />} />
          <Route path="/admin/cafe" element={<CafeAdmin />} />
        </Routes>

        {/* Footer stays on all pages */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
