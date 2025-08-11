"use client";
import React from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

export default function ContactComponent() {
  return (
    <section id="contact" className="bg-dark text-white py-5">
      <div className="container text-center">
        <h1 className="fw-bold mb-4 gradient-text">Contact Me</h1>
        <p>
          <FaEnvelope className="me-2 text-info" />
          <a href="mailto:hanif355938@gmail.com" className="text-white text-decoration-none">
            hanif355938@gmail.com
          </a>
        </p>
        <p>
          <FaPhone className="me-2 text-success" />
          <a href="tel:+92-309-4459278" className="text-white text-decoration-none">
            +92-309-4459278
          </a>
        </p>
        <p>
          <FaLinkedin className="me-2 text-primary" />
          <a
            href="https://linkedin.com/in/muhammad-hanif-a030b91a3"
            target="_blank"
            className="text-white text-decoration-none"
          >
            linkedin.com/in/muhammad-hanif-a030b91a3
          </a>
        </p>
      </div>

      {/* Styles */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(90deg, #4facfe, #00f2fe, #43e97b, #f8ffae);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 6s ease infinite;
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
    </section>
  );
}
