import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Home.css';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  return (
    <nav className="home-navbar navbar-fixed">
      <div className="navbar-left">
        <h1 className="navbar-title">Periyar Writings</h1>
        <button className="navbar-toggle" onClick={() => setNavOpen(v => !v)} aria-label="Toggle navigation">
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
      </div>
      <div className={`navbar-right${navOpen ? ' open' : ''}`}>
        <Link to="/" className="home-link" onClick={() => setNavOpen(false)}>Home</Link>
        <Link to="/current-affairs" className="home-link" onClick={() => setNavOpen(false)}>Current Affairs</Link>
        <Link to="/caste" className="home-link" onClick={() => setNavOpen(false)}>Caste</Link>
        <Link to="/god-religion" className="home-link" onClick={() => setNavOpen(false)}>God &amp; religion</Link>
        <Link to="/culture" className="home-link" onClick={() => setNavOpen(false)}>Culture</Link>
        <Link to="/about" className="home-link" onClick={() => setNavOpen(false)}>About us</Link>
        {location.pathname === "/about" && (
          <Link to="/login" className="home-link" onClick={() => setNavOpen(false)}>Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
