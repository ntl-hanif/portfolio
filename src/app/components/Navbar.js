"use client";
import React from "react";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
//test
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg sticky-top">
      <div className="container">
        {/* Brand with Gradient Animation */}
        <a className="navbar-brand fw-bold gradient-text" href="#">
          Muhammad Hanif <span className="expertise">| Senior SQA Engineer</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                <FaHome className="me-1" /> Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                <FaUser className="me-1" /> About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                <FaProjectDiagram className="me-1" /> Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                <FaEnvelope className="me-1" /> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        .gradient-text {
          background: linear-gradient(90deg, #4facfe, #00f2fe, #43e97b, #f8ffae);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 6s ease infinite;
        }
        .expertise {
          font-weight: 500;
          font-size: 0.9rem;
        }
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;