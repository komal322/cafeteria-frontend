import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // keep existing styles or create one

const Header = () => {
  return (
    <header className="app-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 24px' }}>
      {/* Left: logo or brand */}
      <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src="/logo192.png" alt="logo" style={{ height: 44 }} />
        <h2 style={{ margin: 0 }}>Smart Serve</h2>
      </div>

      {/* Right: only Sectors and Contact */}
      <nav className="header-nav">
        <ul style={{ display: 'flex', gap: 20, listStyle: 'none', margin: 0, padding: 0 }}>
          <li><Link to="/sectors" className="nav-link">Sectors</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
