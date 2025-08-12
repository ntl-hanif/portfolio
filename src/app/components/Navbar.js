"use client";
import React, { useEffect } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  // Force scroll to top on page reload
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Dynamic offset function
  const getOffset = (section) => {
    if (section === "contact") return 0; // scroll fully into view
    return -70; // default for others
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg sticky-top">
      <div className="container">
        {/* Brand with Gradient Animation */}
        <span
          className="navbar-brand fw-bold gradient-text"
          style={{ cursor: "pointer" }}
        >
          Muhammad Hanif{" "}
          <span className="expertise">| Principal SQA Engineer</span>
        </span>

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

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              >
                <FaHome className="me-1" /> Home
              </a>
            </li>

            <li className="nav-item">
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={getOffset("about")}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                <FaUser className="me-1" /> About
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={getOffset("projects")}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                <FaProjectDiagram className="me-1" /> Projects
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={getOffset("contact")}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                <FaEnvelope className="me-1" /> Contact
              </ScrollLink>
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
          background: linear-gradient(
            90deg,
            #4facfe,
            #00f2fe,
            #43e97b,
            #f8ffae
          );
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
