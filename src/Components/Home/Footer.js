import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Home.css";

function Footer() {
  return (
    <footer className="home-footer">
      <div className="footer-content">
        <span>&copy; {new Date().getFullYear()} Periyar Writings. All rights reserved.</span>
        <div className="footer-social">
          <a href="https://www.instagram.com/periyarscreen?igsh=MW5xNWtmenVrdzNwaw==" className="footer-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://facebook.com/PeriyarScreen" className="footer-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://youtube.com/@periyarscreen?si=rql_Fu40l8-ghKCa" className="footer-icon" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
